/**
 * Base API response structure
 */
export interface IApiResponse<T = any> {
  /** Response data */
  data: T;
  /** Response metadata */
  meta: {
    /** Request Unique ID */
    ruid: string;
    /** Number of items per page */
    limit?: number;
    /** Page number */
    page?: number;
    /** Total number of items */
    total?: number;
  };
}
