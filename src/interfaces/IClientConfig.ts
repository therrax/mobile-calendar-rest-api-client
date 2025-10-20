/**
 * Mobile Calendar API client configuration
 */
export interface IClientConfig {
  /** Client identifier */
  clientId: string;
  /** Client secret */
  clientSecret: string;
  /** Base API URL (optional, defaults to sandbox) */
  baseURL?: string;
}
