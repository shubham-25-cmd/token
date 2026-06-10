export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Record<string, unknown> | null;
  error?: string | null;
}