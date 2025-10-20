import { IWebhook } from '../interfaces/IWebhook';

/**
 * Klasa reprezentująca webhook
 */
export class Webhook implements IWebhook {
  constructor(
    public webhookId: number,
    public url: string,
    public events: string[],
    public status: 'ACTIVE' | 'INACTIVE',
    public createdAt: string,
    public updatedAt: string,
    public secret?: string
  ) {}

  /**
   * Sprawdza czy webhook jest aktywny
   */
  public isActive(): boolean {
    return this.status === 'ACTIVE';
  }

  /**
   * Sprawdza czy webhook nasłuchuje określonego zdarzenia
   */
  public listensToEvent(event: string): boolean {
    return this.events.includes(event);
  }

  /**
   * Sprawdza czy webhook ma skonfigurowany sekret
   */
  public hasSecret(): boolean {
    return !!this.secret;
  }
}
