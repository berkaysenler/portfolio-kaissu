# Portfolio Website - Graduate Software Engineer

A stunning, pixel art-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a modern, responsive design with beautiful animations and dynamic content management.

## ✨ Features

### 🎨 Design & UX
- **Pixel Art Aesthetic**: Unique retro-modern design with professional elegance
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Framer Motion powered animations enhance user experience
- **Dark Theme**: Developer-friendly color scheme with excellent contrast
- **Interactive Elements**: Hover effects, typing animations, and engaging micro-interactions

### 🚀 Core Sections
- **Hero Section**: Eye-catching introduction with pixel art avatar and typing animation
- **About**: Personal background, education, and certifications showcase
- **Projects**: Dynamic GitHub API integration displaying repositories
- **Experience**: Professional timeline with achievements and technologies
- **Skills**: Interactive skill meters with category-based organization
- **Contact**: Functional contact form with floating contact bubble

### 🔧 Technical Features
- **GitHub Integration**: Automatically fetches and displays repositories
- **EmailJS Integration**: Contact form with email functionality
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Content Management**: Easy-to-edit JSON configuration files

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **APIs**: GitHub REST API, EmailJS
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- GitHub account (for repository fetching)
- EmailJS account (for contact form)

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env.local
```

3. **Configure Environment Variables**
Edit `.env.local` and add your API keys:
```env
# GitHub API (optional - for unlimited requests)
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_SITE_NAME=Your Portfolio
```

4. **Customize Your Content**
Edit `src/data/config/portfolio.json` with your information:
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "location": "Your Location",
    "bio": "Your bio...",
    "avatar": "/assets/your-avatar.png"
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  },
  "projects": {
    "github_username": "yourusername",
    "featured": ["repo1", "repo2", "repo3"]
  }
}
```

5. **Add Your Assets**
- Add your avatar image to `public/assets/`
- Replace favicon files in `public/`

6. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Content Management

### Personal Information
Edit `src/data/config/portfolio.json` to update:
- Personal details and contact information
- Skills and proficiency levels
- Work experience and achievements
- Education and certifications
- Social media links

### GitHub Integration
- Set `projects.github_username` to your GitHub username
- Add repository names to `projects.featured` for priority display
- Optionally add `NEXT_PUBLIC_GITHUB_TOKEN` for unlimited API requests

### EmailJS Setup
1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Add your service ID, template ID, and public key to environment variables

## 🎨 Customization

### Modifying Colors
Update the color scheme in `src/utils/constants.ts`:
```typescript
export const PIXEL_COLORS = {
  primary: '#00ff41',    // Main green color
  secondary: '#ff6b35',  // Orange accent
  accent: '#4ecdc4',     // Cyan accent
}
```

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
portfolio-kai/
├── src/
│   ├── app/                  # Next.js App Router
│   ├── components/           # React components
│   │   ├── sections/         # Page sections
│   │   └── ui/              # Reusable UI components
│   ├── data/                # Configuration files
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── public/                  # Static assets
└── .env.example            # Environment variables template
```

## 🎯 Performance Features

- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Lazy Loading**: Components and images load as needed

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Clear focus indicators

## 🐛 Troubleshooting

### Common Issues

**GitHub API Rate Limiting**
- Solution: Add `NEXT_PUBLIC_GITHUB_TOKEN` to environment variables

**EmailJS Not Working**
- Check service ID, template ID, and public key
- Verify EmailJS template variables match form fields

**Build Errors**
- Run `npm run build` to identify issues
- Check ESLint configuration in `.eslintrc.json`

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Claude Code**

Transform your portfolio into a pixel-perfect showcase of your skills and experience!
