import { IClient } from "./IClient";

/**
 * Reservation interface
 */
export interface IReservation {
  /** Reservation identifier */
  reservationId: number;
  /** Reservation type */
  type: 'SINGLE' | 'GROUP' | 'LOCK';
  /** Arrival date */
  arrival: string;
  /** Departure date */
  departure: string;
  /** Room identifier */
  roomId: number | null;
  /** Client identifier */
  clientId: number | null;
  /** Client data */
  client: IClient;
  /** Check-in time */
  checkIn: string;
  /** Check-out time */
  checkOut: string;
  /** Number of adults */
  adults: number;
  /** Number of children */
  children: number;
  /** Children ages */
  kidsAge: number[];
  /** Registration type */
  registration: 'CHECKED_IN' | 'CHECKED_OUT' | 'NONE';
  /** Source identifier */
  sourceId: number;
  /** Door code */
  doorCode: string;
  /** Additional information */
  additionalInfo: string;
  /** Prepayment amount */
  prepayment: number;
  /** Prepayment deadline */
  prepaymentDeadline: string | null;
  /** Payment status */
  paymentStatus: 'NO_PAYMENT' | 'PREPAYMENT_PAID' | 'PAID_ALL';
  /** Payment type */
  paymentType: 'NONE' | 'CASH_PAYMENT' | 'BANK_TRANSFER_PAYMENT' | 'CREDIT_CARD_PAYMENT' | 'VIRTUAL_CARD_PAYMENT' | 'ONLINE_PAYMENT';
  /** Currency */
  currency: string;
  /** Meal type */
  meal: string;
  /** Adult portions */
  adultsPortion: number;
  /** Children portions */
  childrenPortion: number;
  /** Additional services */
  additionalServices: any[];
  /** Reservation color */
  color: string;
  /** Price */
  price: number;
  /** Price per room */
  pricePerRoom: number;
  /** Price per meal */
  pricePerMeal: number;
  /** Discount amount */
  discount: number;
  /** Discount type */
  discountType: number;
  /** Rate identifier */
  rateId: number | null;
}
