import * as Linking from 'expo-linking';
import type { User } from '../../types';

export interface StorageInterface {
  getToken(): Promise<string | null>;
  setToken(token: string): Promise<void>;
  removeToken(): Promise<void>;
}

export interface ApiInterface {
  getUser(): Promise<User>;
  logout(): Promise<{ message: string }>;
}

export interface AuthServiceConfig {
  apiUrl: string;
}

export class AuthService {
  constructor(
    private storage: StorageInterface,
    private api: ApiInterface,
    private config: AuthServiceConfig
  ) {}

  async getStoredToken(): Promise<string | null> {
    return this.storage.getToken();
  }

  async saveToken(token: string): Promise<void> {
    return this.storage.setToken(token);
  }

  async clearToken(): Promise<void> {
    return this.storage.removeToken();
  }

  async fetchUser(): Promise<User> {
    return this.api.getUser();
  }

  async logout(): Promise<void> {
    try {
      await this.api.logout();
    } catch {
      // Ignore logout errors - token might already be invalid
    }
    await this.clearToken();
  }

  buildAuthUrl(platform: string): string {
    return `${this.config.apiUrl}/auth/battlenet/redirect?platform=${platform}`;
  }

  parseCallbackUrl(url: string): { token?: string; error?: string } {
    const parsed = Linking.parse(url);
    return {
      token: parsed.queryParams?.token as string | undefined,
      error: parsed.queryParams?.error as string | undefined,
    };
  }
}
