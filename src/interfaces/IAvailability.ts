/**
 * Availability interface for specific date
 */
export interface IAvailabilityDate {
  /** Date */
  date: string;
  /** Number of rooms to sell */
  roomsToSell: number;
}

/**
 * Room availability interface
 */
export interface IAvailability {
  /** Room identifier */
  roomId: number;
  /** Availability for different dates */
  availability: IAvailabilityDate[];
}

/**
 * Transformed availability interface (date as key)
 */
export interface ITransformedAvailability {
  [date: string]: {
    roomId: number;
    roomsToSell: number;
  }[];
}
