import { IPricing, IPricingDate, IDerivedPrice } from '../interfaces/IPricing';

/**
 * Pricing model class
 */
export class Pricing implements IPricing {
  public roomId: number = 0;
  public typeId: number = 0;
  public prices: IPricingDate[] = [];
  public rate: IPricing['rate'] = {
    rateId: 0,
    name: '',
    parentRateId: null,
    percentage: null,
    cancellationPolicy: {
      cancellationId: 0,
      type: 'REFUNDABLE',
      cancellationPenaltyPercentageAfterDeadline: 0,
      deadlineDays: 0,
      deadlineHours: null,
      noShow: 'DEFAULT',
      prepaymentPercentage: 0,
      prepaymentFirstNight: false
    }
  };

  constructor(data: Partial<IPricing> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = data[key as keyof IPricing];
      }
    });
  }

  /**
   * Gets lowest price from all dates
   */
  public getLowestPrice(): number {
    if (this.prices.length === 0) return 0;
    
    let minPrice = Infinity;
    this.prices.forEach(price => {
      if (price.derivedPrices && Array.isArray(price.derivedPrices) && price.derivedPrices.length > 0) {
        const minDerived = Math.min(...price.derivedPrices.map(dp => dp.price));
        minPrice = Math.min(minPrice, minDerived);
      } else {
        minPrice = Math.min(minPrice, price.basePrice);
      }
    });
    return minPrice === Infinity ? 0 : minPrice;
  }

  /**
   * Gets highest price from all dates
   */
  public getHighestPrice(): number {
    if (this.prices.length === 0) return 0;
    
    let maxPrice = 0;
    this.prices.forEach(price => {
      if (price.derivedPrices && Array.isArray(price.derivedPrices) && price.derivedPrices.length > 0) {
        const maxDerived = Math.max(...price.derivedPrices.map(dp => dp.price));
        maxPrice = Math.max(maxPrice, maxDerived);
      } else {
        maxPrice = Math.max(maxPrice, price.basePrice);
      }
    });
    return maxPrice;
  }

  /**
   * Gets price for specific date and number of persons
   */
  public getPriceForDate(date: string, persons: number): number | null {
    const priceData = this.prices.find(p => p.date === date);
    if (!priceData) return null;

    const derivedPrice = priceData.derivedPrices.find(dp => dp.persons === persons);
    return derivedPrice ? derivedPrice.price : priceData.basePrice;
  }

  /**
   * Checks if room is available on specific date
   */
  public isAvailableOnDate(date: string): boolean {
    const priceData = this.prices.find(p => p.date === date);
    return priceData ? priceData.restrictions.closed === 0 : false;
  }

  /**
   * Gets all available dates
   */
  public getAvailableDates(): string[] {
    return this.prices
      .filter(p => p.restrictions.closed === 0)
      .map(p => p.date);
  }
}
