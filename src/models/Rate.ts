import { IRateEntry } from '../interfaces/IRateEntry';

/**
 * Rate model with automatic field mapping
 */
export class Rate implements IRateEntry {
  public rateId: number = 0;
  public name: string = '';
  public cancellationId: number = 0;
  public meals: number = 0;
  public parentRateId: number | null = null;
  public rateRelation: IRateEntry['rateRelation'] = null;
  public rooms: number[] | null = null;
  public types: number[] | null = null;
  public cancellationPolicy: IRateEntry['cancellationPolicy'] = {
    cancellationId: 0,
    type: 'REFUNDABLE',
    cancellationPenaltyPercentageAfterDeadline: null,
    deadlineDays: null,
    deadlineHours: null,
    cancellationPenaltyNightsAfterDeadline: null,
    noShow: 'DEFAULT',
    prepaymentPercentage: null,
    prepaymentFirstNight: false
  };
  public status: 0 | 1 | null = null

  constructor(data: Partial<IRateEntry> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = (data as any)[key];
      }
    });
  }
}


