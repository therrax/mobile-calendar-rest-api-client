/**
 * Invoice item interface
 */
export interface IInvoiceItem {
  invoiceId?: number;
  positionId?: number;
  userId?: number;
  status?: number;
  name: string;
  grossUnitPrice: number;
  quantity: number;
  unit: string;
  rate: string; // e.g. "20"
  symbol: string; // e.g. VAT symbol
}

/**
 * Party interfaces
 */
export interface IBuyer {
  companyName: string;
  address: string;
  taxId: string;
}

export interface ISeller {
  companyName: string;
  address: string;
  taxId: string;
  bankNo?: string;
}

export interface IReceiver {
  companyName?: string | null;
  address?: string | null;
  taxId?: string | null;
  bankNo?: string | null;
}

export type InvoicePaymentType = 0 | 1 | 2 | 3 | 4 | 5; // None, Cash, Bank Transfer, Credit Card, Virtual Card, Online Payment
export type InvoicePaymentStatus = 0 | 1 | 2; // Unpaid, Partially Paid, Fully Paid

/**
 * Invoice interface
 */
export interface IInvoice {
  invoiceId: number | null;
  invoiceNo: number | null;
  invoiceFullNo: string | null;
  format: string;
  extraChar: string;
  invoiceType: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  buyer: IBuyer;
  seller: ISeller;
  receiver?: IReceiver | null;
  invoiceItems: IInvoiceItem[];
  paymentType: InvoicePaymentType;
  paymentStatus: InvoicePaymentStatus;
  issueDate: string; // YYYY-MM-DD
  saleDate: string; // YYYY-MM-DD
  town?: string;
  paymentDate: string; // YYYY-MM-DD
  currency: string;
  additionalInfo?: string | null;
  personCollect?: string | null;
  personIssue?: string | null;
  clientId?: number | null;
  reservationId?: number | null;
  addDate?: string;
  editDate?: string;
}


