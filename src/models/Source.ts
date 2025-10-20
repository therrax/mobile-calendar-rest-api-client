import { ISource } from '../interfaces/ISource';

/**
 * Source model with automatic field mapping
 */
export class Source implements ISource {
  public sourceId: number = 0;
  public name: string = '';
  public isCustom: boolean = false;

  constructor(data: Partial<ISource> = {}) {
    Object.keys(data).forEach((key) => {
      if (key in this) {
        (this as any)[key] = (data as any)[key];
      }
    });
  }
}


