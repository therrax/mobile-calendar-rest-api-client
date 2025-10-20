/**
 * Booking source interface
 */
export interface ISource {
  /** Source identifier */
  sourceId: number;
  /** Source name (e.g., booking.com) */
  name: string;
  /** Whether the source is custom-defined */
  isCustom: boolean;
}


