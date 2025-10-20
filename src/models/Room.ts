import { IRoom, EquipmentKey, RoomTypeKey } from '../interfaces/IRoom';

/**
 * Room model class
 */
export class Room implements IRoom {
  
    public roomId: number | null = null
    public name: string = ''
    public persons: number = 0
    public maxAdults: number = 0
    public maxChildren: number = 0
    public roomTypeId: number | null = null
    public roomType: RoomTypeKey = 'STANDARD_ROOM'
    public singleBed: number = 0
    public doubleBed: number = 0
    public extraBed: number = 0
    public service: 'CLEAN' | 'DIRTY' | 'WHILE_CLEANING' = 'CLEAN'
    public serviceInfo: string = ''
    public info: string = ''
    public color: string = ''
    public square: string = ''
    public squareType: 'm2' | 'ft2' = 'm2'
    public description: {
      default: string;
      pl: string;
    } = { default: '', pl: '' }
    public equipment: EquipmentKey[] = []
    public shareInOffer: number = 0
    public locationId: number | null = null
    public status: 0 | 1 | null = null

    constructor(data: Partial<IRoom> = {}) {
        Object.keys(data).forEach((key) => {
          if (key in this) {
            (this as any)[key] = data[key as keyof IRoom];
          }
        });
      }
  

  /**
   * Checks if the room can accommodate the specified number of people
   */
  public canAccommodate(adults: number, children: number): boolean {
    return adults <= this.maxAdults && children <= this.maxChildren && 
           (adults + children) <= this.persons;
  }

  /**
   * Gets description in specified language
   */
  public getDescription(language: 'default' | 'pl' = 'default'): string {
    return this.description[language] || this.description.default;
  }

  /**
   * Checks if the room has specified equipment
   */
  public hasEquipment(equipmentKey: EquipmentKey): boolean {
    return this.equipment.includes(equipmentKey);
  }
}
