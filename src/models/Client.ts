import { IClient } from '../interfaces/IClient';

/**
 * Client model class with automatic field mapping
 */
export class Client implements IClient {
  public clientId?: number | null = null;
  public forename: string = '';
  public name: string = '';
  public phone: string = '';
  public email: string = '';
  public clientType: 'NONE' | 'REGULAR' | 'UNWANTED' = 'REGULAR';
  public countryId: number = 0;
  public lang: string = 'en';
  public companyName?: string;
  public taxId?: string;
  public personalId?: string;
  public idCard?: string;
  public address?: string;
  public comments?: string;
  public vehicleRegistrationNumber?: string;
  public status: 0 | 1 | null = null;

  constructor(data: Partial<IClient> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = (data as any)[key];
      }
    });
  }

  /**
   * Gets full name
   */
  public getFullName(): string {
    return `${this.forename} ${this.name}`;
  }

  /**
   * Checks if client has complete contact information
   */
  public hasCompleteContactInfo(): boolean {
    return !!(this.phone && this.email);
  }
}
