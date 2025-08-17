'use client';

import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  color: string;
};

interface Props {
  particleCount?: number;
  connectDistance?: number;
  speed?: number;
  colors?: string[];
  className?: string;
  lineColor?: string;  // "r,g,b" format
  lineAlpha?: number;
  fpsCap?: number;
}

export function BackgroundAnimation({
  particleCount = 400,
  connectDistance = 120,
  speed = 0.6,
  colors = ['#00ff41', '#4ecdc4', '#ff6b35', '#ffffff'],
  className = '',
  lineColor = '0,255,65',
  lineAlpha = 0.18,
  fpsCap,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });

  // set canvas size
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const setSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  // seed particles
  useEffect(() => {
    const { w, h } = sizeRef.current;
    if (!w || !h) return;
    const P: Particle[] = Array.from({ length: particleCount }, () => {
      const r = Math.random() * 2 + 1.2;
      const a = Math.random() * 0.5 + 0.15;
      const angle = Math.random() * Math.PI * 2;
      const mag = (Math.random() * 0.5 + 0.25) * speed;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * mag,
        vy: Math.sin(angle) * mag,
        r,
        a,
        color: colors[(Math.random() * colors.length) | 0],
      };
    });
    particlesRef.current = P;
  }, [particleCount, speed, colors]);

  // animate
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let last = performance.now();
    const minFrameTime = fpsCap ? 1000 / fpsCap : 0;

    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop);
      if (now - last < minFrameTime) return;
      last = now;

      const { w, h } = sizeRef.current;
      const P = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      // move & draw particles
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > w) p.x = 0;
        else if (p.x < 0) p.x = w;
        if (p.y > h) p.y = 0;
        else if (p.y < 0) p.y = h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.a;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // draw connecting lines (optimized with spatial hashing)
      const cellSize = connectDistance;
      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);
      const grid: number[][] = new Array(cols * rows);
      for (let i = 0; i < grid.length; i++) grid[i] = [];

      const cellIndex = (x: number, y: number) =>
        Math.min(rows - 1, Math.max(0, Math.floor(y / cellSize))) * cols +
        Math.min(cols - 1, Math.max(0, Math.floor(x / cellSize)));

      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        grid[cellIndex(p.x, p.y)].push(i);
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        const cx = Math.floor(p.x / cellSize);
        const cy = Math.floor(p.y / cellSize);

        for (let ny = -1; ny <= 1; ny++) {
          for (let nx = -1; nx <= 1; nx++) {
            const gx = cx + nx;
            const gy = cy + ny;
            if (gx < 0 || gy < 0 || gx >= cols || gy >= rows) continue;
            const bucket = grid[gy * cols + gx];
            for (let j of bucket) {
              if (j <= i) continue;
              const q = P[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < connectDistance * connectDistance) {
                const d = Math.sqrt(d2);
                const alpha = (1 - d / connectDistance) * lineAlpha;
                ctx.strokeStyle = `rgba(${lineColor},${alpha})`;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [connectDistance, lineColor, lineAlpha, fpsCap]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
    </div>
  );
}
