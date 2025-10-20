/**
 * Client interface
 */
export interface IClient {
  /** Client identifier */
  clientId?: number | null;
  /** First name */
  forename: string;
  /** Last name */
  name: string;
  /** Phone number */
  phone: string;
  /** Email address */
  email: string;
  /** Company name */
  companyName?: string;
  /** Tax ID */
  taxId?: string;
  /** Personal ID */
  personalId?: string;
  /** ID card number */
  idCard?: string;
  /** Client type */
  clientType: 'NONE' | 'REGULAR' | 'UNWANTED',
  /** Address */
  address?: string;
  /** Comments */
  comments?: string;
  /** Vehicle registration number */
  vehicleRegistrationNumber?: string;
  /** Country identifier */
  countryId: number;
  /** Language */
  lang: string;
}
