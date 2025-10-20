/**
 * Rate relation interface
 */
export interface IRateRelation {
  /** Modification percentage from parent rate */
  percentage: number | null;
  /** Additional amount relative to parent rate */
  additional: number | null;
}

/**
 * Cancellation policy interface (re-use from IPricing if available)
 */
export interface IRateCancellationPolicy {
  cancellationId: number;
  type: 'REFUNDABLE' | 'NONREFUNDABLE';
  cancellationPenaltyPercentageAfterDeadline?: number | null;
  deadlineDays?: number | null;
  deadlineHours?: number | null;
  cancellationPenaltyNightsAfterDeadline?: number | null;
  noShow?: string;
  prepaymentPercentage?: number | null;
  prepaymentFirstNight?: boolean | null;
}

/**
 * Rate entry interface returned by /rates
 */
export interface IRateEntry {
  /** Rate identifier */
  rateId: number;
  /** Rate name */
  name: string;
  /** Cancellation policy identifier */
  cancellationId: number;
  /** Meal plan (0=OV,1=BB,...) */
  meals: number;
  /** Parent rate identifier */
  parentRateId: number | null;
  /** Relation to parent rate (only for derived rates) */
  rateRelation: IRateRelation | null;
  /** List of room IDs this rate applies to (null=all) */
  rooms: number[] | null;
  /** List of room type IDs this rate applies to (null=all) */
  types: number[] | null;
  /** Cancellation policy (details) */
  cancellationPolicy: IRateCancellationPolicy;
}


