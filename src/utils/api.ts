import { Octokit } from '@octokit/rest';

export interface GitHubRepo {
  id: number;
  name: string;
  description?: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  created_at: string;
  updated_at: string;
}

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  tags: string[];
  cover_image: string | null;
  reading_time_minutes: number;
}

class APIService {
  private octokit: Octokit | null = null;

  constructor() {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (token) {
      this.octokit = new Octokit({ auth: token });
    }
  }

  async getGitHubRepos(username: string, selected?: string[]): Promise<GitHubRepo[]> {
    if (!this.octokit) {
      console.warn('GitHub token not provided, using public API with rate limits');
      return this.getPublicRepos(username, selected);
    }

    try {
      const { data } = await this.octokit.repos.listForUser({
        username,
        sort: 'updated',
        per_page: 50,
      });

      let repos = data.filter(repo => !repo.fork);
      
      if (selected && selected.length > 0) {
        // Only return selected repositories, no others
        return repos.filter(repo => selected.includes(repo.name)) as GitHubRepo[];
      }

      // Fallback: return all repos if no selection specified
      return repos.slice(0, 6) as GitHubRepo[];
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      return [];
    }
  }

  private async getPublicRepos(username: string, selected?: string[]): Promise<GitHubRepo[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const data = await response.json();
      let repos = data.filter((repo: any) => !repo.fork);
      
      if (selected && selected.length > 0) {
        // Only return selected repositories, no others
        return repos.filter((repo: any) => selected.includes(repo.name)) as GitHubRepo[];
      }

      // Fallback: return all repos if no selection specified
      return repos.slice(0, 6) as GitHubRepo[];
    } catch (error) {
      console.error('Error fetching public GitHub repos:', error);
      return [];
    }
  }

  async getDevToArticles(username: string): Promise<DevToArticle[]> {
    try {
      const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=6`);
      if (!response.ok) throw new Error('Failed to fetch Dev.to articles');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching Dev.to articles:', error);
      return [];
    }
  }

  async getGitHubContributions(username: string): Promise<any> {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username }
        })
      });

      if (!response.ok) throw new Error('Failed to fetch GitHub contributions');
      
      const data = await response.json();
      return data.data?.user?.contributionsCollection?.contributionCalendar;
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
      return null;
    }
  }
}

export const apiService = new APIService();