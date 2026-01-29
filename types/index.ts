export interface User {
  id: number;
  sub: string;
  battlenet_id: number;
  battletag: string;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export type Platform = 'ios' | 'android' | 'web';
