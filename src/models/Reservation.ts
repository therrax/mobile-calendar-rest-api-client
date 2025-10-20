import { IReservation } from '../interfaces/IReservation';
import { IClient } from '../interfaces/IClient';
import { DateTime } from 'luxon';

/**
 * Reservation model class
 */
export class Reservation implements IReservation {
  public reservationId: number = 0;
  public type: 'SINGLE' | 'GROUP' | 'LOCK' = 'SINGLE';
  public arrival: string = '';
  public departure: string = '';
  public roomId: number | null = null;
  public clientId: number | null = null;
  public client: IClient = {
    clientId: null,
    forename: '',
    name: '',
    phone: '',
    email: '',
    clientType: 'REGULAR',
    countryId: 0,
    lang: 'en'
  };
  public checkIn: string = '';
  public checkOut: string = '';
  public adults: number = 0;
  public children: number = 0;
  public kidsAge: number[] = [];
  public registration: 'CHECKED_IN' | 'CHECKED_OUT' | 'NONE' = 'NONE';
  public sourceId: number = 0;
  public doorCode: string = '';
  public additionalInfo: string = '';
  public prepayment: number = 0;
  public prepaymentDeadline: string | null = null;
  public paymentStatus: 'NO_PAYMENT' | 'PREPAYMENT_PAID' | 'PAID_ALL' = 'NO_PAYMENT';
  public paymentType: 'NONE' | 'CASH_PAYMENT' | 'BANK_TRANSFER_PAYMENT' | 'CREDIT_CARD_PAYMENT' | 'VIRTUAL_CARD_PAYMENT' | 'ONLINE_PAYMENT' = 'NONE';
  public currency: string = '';
  public meal: string = '';
  public adultsPortion: number = 0;
  public childrenPortion: number = 0;
  public additionalServices: any[] = [];
  public color: string = '';
  public price: number = 0;
  public pricePerRoom: number = 0;
  public pricePerMeal: number = 0;
  public discount: number = 0;
  public discountType: number = 0;
  public rateId: number | null = null;
  public status: 0 | 1 | null = null

  constructor(data: Partial<IReservation> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = data[key as keyof IReservation];
      }
    });
  }

  /**
   * Checks if reservation is active
   */
  public isActive(): boolean {
    const now = DateTime.now();
    const arrivalDate = DateTime.fromISO(this.arrival);
    const departureDate = DateTime.fromISO(this.departure);
    
    return now >= arrivalDate && now <= departureDate;
  }

  /**
   * Calculates number of nights
   */
  public getNightsCount(): number {
    const arrivalDate = DateTime.fromISO(this.arrival);
    const departureDate = DateTime.fromISO(this.departure);
    return departureDate.diff(arrivalDate, 'days').days;
  }

  /**
   * Checks if reservation is in the future
   */
  public isFuture(): boolean {
    const now = DateTime.now();
    const arrivalDate = DateTime.fromISO(this.arrival);
    return arrivalDate > now;
  }
}
