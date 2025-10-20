/**
 * Pricing restrictions interface
 */
export interface IPricingRestrictions {
  /** Minimum stay */
  minStay: number;
  /** Maximum stay */
  maxStay: number;
  /** Whether closed */
  closed: number;
  /** Available arrivals */
  availArrival: number;
  /** Available departures */
  availDeparture: number;
  /** Minimum advance reservation */
  minAdvanceRes: number;
  /** Maximum advance reservation */
  maxAdvanceRes: number;
}

/**
 * Derived prices interface
 */
export interface IDerivedPrice {
  /** Number of persons */
  persons: number;
  /** Price */
  price: number;
}

/**
 * Price interface for specific date
 */
export interface IPricingDate {
  /** Date */
  date: string;
  /** Base price */
  basePrice: number;
  /** Restrictions */
  restrictions: IPricingRestrictions;
  /** Derived prices */
  derivedPrices: IDerivedPrice[];
}

/**
 * Cancellation policy interface
 */
export interface ICancellationPolicy {
  /** Cancellation identifier */
  cancellationId: number;
  /** Cancellation type */
  type: 'REFUNDABLE' | 'NON_REFUNDABLE';
  /** Penalty percentage after deadline */
  cancellationPenaltyPercentageAfterDeadline: number;
  /** Days to deadline */
  deadlineDays: number;
  /** Hours to deadline */
  deadlineHours: number | null;
  /** No-show penalty */
  noShow: string;
  /** Prepayment percentage */
  prepaymentPercentage: number;
  /** First night prepayment */
  prepaymentFirstNight: boolean;
}

/**
 * Rate interface
 */
export interface IRate {
  /** Rate identifier */
  rateId: number;
  /** Rate name */
  name: string;
  /** Parent rate identifier */
  parentRateId: number | null;
  /** Percentage */
  percentage: number | null;
  /** Cancellation policy */
  cancellationPolicy: ICancellationPolicy;
}

/**
 * Pricing interface
 */
export interface IPricing {
  /** Room identifier */
  roomId: number;
  /** Type identifier */
  typeId: number;
  /** Prices for different dates */
  prices: IPricingDate[];
  /** Rate */
  rate: IRate;
}
