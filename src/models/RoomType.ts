import { IRoomType } from '../interfaces/IRoomType';

/**
 * Room type model with automatic field mapping
 */
export class RoomType implements IRoomType {
  public roomTypeId: number = 0;
  public type: string = '';
  public description: {
    default: string;
    pl: string;
    en: string;
  } = {
    default: '',
    pl: '',
    en: ''
  };
  public singleBed: number = 0;
  public doubleBed: number = 0;
  public extraBed: number = 0;
  public square: number = 0;
  public maxAdults: number = 0;
  public maxChildren: number = 0;
  public maxPeople: number = 0;
  public equipment: string[] = [];

  constructor(data: Partial<IRoomType> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = (data as any)[key];
      }
    });
  }

  /**
   * Gets total bed capacity
   */
  public getTotalBeds(): number {
    return this.singleBed + this.doubleBed + this.extraBed;
  }

  /**
   * Checks if room type has specific equipment
   */
  public hasEquipment(equipmentKey: string): boolean {
    return this.equipment.includes(equipmentKey);
  }

  /**
   * Gets description in specific language
   */
  public getDescription(lang: 'default' | 'pl' | 'en' = 'default'): string {
    return this.description[lang] || this.description.default;
  }
}

