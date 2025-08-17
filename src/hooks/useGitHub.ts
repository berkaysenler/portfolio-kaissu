'use client';

import { useState, useEffect } from 'react';
import { apiService, GitHubRepo } from '@/utils/api';

interface UseGitHubProps {
  username: string;
  selected?: string[];
}

interface UseGitHubReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useGitHub({ username, selected }: UseGitHubProps): UseGitHubReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getGitHubRepos(username, selected);
      setRepos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchRepos();
    }
  }, [username, selected]);

  return {
    repos,
    loading,
    error,
    refetch: fetchRepos
  };
}