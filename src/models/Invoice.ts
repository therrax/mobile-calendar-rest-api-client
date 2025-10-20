import { IInvoice, IInvoiceItem } from '../interfaces/IInvoice';

/**
 * Invoice model with automatic field mapping
 */
export class Invoice implements IInvoice {
  public invoiceId: number | null = null;
  public invoiceNo: number = 0;
  public invoiceFullNo: string = '';
  public format: string = '';
  public extraChar: string = '';
//   Invoice type: 0=Standard Invoice, 1=VAT Invoice, 2=Pro Forma Invoice, 3=Advance Invoice, 4=Correction Invoice, 5=VAT Exempt Invoice, 6=Advance Receipt, 7=Correction Receipt
  public invoiceType: IInvoice['invoiceType'] = 0;
  public buyer: IInvoice['buyer'] = { companyName: '', address: '', taxId: '' };
  public seller: IInvoice['seller'] = { companyName: '', address: '', taxId: '' };
  public receiver: IInvoice['receiver'] = null;
  public invoiceItems: IInvoiceItem[] = [];
  public paymentType: IInvoice['paymentType'] = 0;
  public paymentStatus: IInvoice['paymentStatus'] = 0;
  public issueDate: string = '';
  public saleDate: string = '';
  public town?: string;
  public paymentDate: string = '';
  public currency: string = '';
  public additionalInfo?: string | null;
  public personCollect?: string | null;
  public personIssue?: string | null;
  public clientId?: number | null;
  public reservationId?: number | null;
  public addDate?: string;
  public editDate?: string;

  constructor(data: Partial<IInvoice> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = (data as any)[key];
      }
    });
  }
}


