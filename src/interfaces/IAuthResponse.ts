/**
 * Authorization endpoint response
 */
export interface IAuthResponse {
  /** Access token */
  access_token: string;
  /** Refresh token */
  refresh_token: string;
  /** Token expiration time in seconds */
  expires_in: number;
  /** Token type */
  token_type: string;
  /** Response metadata */
  meta?: {
    /** Request Unique ID */
    ruid: string;
  };
}
