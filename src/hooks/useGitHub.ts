'use client';

import { useState, useEffect } from 'react';
import { apiService, GitHubRepo } from '@/utils/api';

interface UseGitHubProps {
  username: string;
  selected?: string[];
  overrides?: Record<string, { homepage?: string }>;
}

interface UseGitHubReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useGitHub({ username, selected, overrides }: UseGitHubProps): UseGitHubReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getGitHubRepos(username, selected);

      // Apply overrides if provided
      const reposWithOverrides = overrides
        ? data.map(repo => {
            const override = overrides[repo.name];
            return override
              ? { ...repo, homepage: override.homepage || repo.homepage }
              : repo;
          })
        : data;

      setRepos(reposWithOverrides);
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