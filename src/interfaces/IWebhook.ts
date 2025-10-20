/**
 * Webhook interface
 */
export interface IWebhook {
  /** Webhook identifier */
  webhookId: number;
  /** Webhook URL */
  url: string;
  /** Event types */
  events: string[];
  /** Webhook status */
  status: 'ACTIVE' | 'INACTIVE';
  /** Webhook secret */
  secret?: string;
  /** Creation date */
  createdAt: string;
  /** Last update date */
  updatedAt: string;
}
