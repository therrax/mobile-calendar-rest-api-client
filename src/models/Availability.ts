import { IAvailability, IAvailabilityDate, ITransformedAvailability } from '../interfaces/IAvailability';

/**
 * Room availability model in API structure
 * { roomId, availability: [{ date, roomsToSell }, ...] }
 */
export class Availability implements IAvailability {
  public roomId: number;
  public availability: IAvailabilityDate[];

  constructor(data: IAvailability) {
    this.roomId = data.roomId;
    this.availability = Array.isArray(data.availability) ? data.availability.map(a => ({
      date: a.date,
      roomsToSell: a.roomsToSell
    })) : [];
  }

  /**
   * Checks if the room is available on specific date
   */
  public isAvailable(date: string): boolean {
    return this.availability.some(a => a.date === date);
  }

  /**
   * Returns availability map with date as key
   */
  public toByDateMap(): ITransformedAvailability {
    return this.availability.reduce((acc, { date, roomsToSell }) => {
      if (!acc[date]) acc[date] = [];
      acc[date].push({ roomId: this.roomId, roomsToSell });
      return acc;
    }, {} as ITransformedAvailability);
  }
}
