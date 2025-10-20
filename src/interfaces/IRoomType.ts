/**
 * Room type interface
 */
export interface IRoomType {
  /** Room type identifier */
  roomTypeId: number;
  /** Room type key */
  type: string;
  /** Room type description in multiple languages */
  description: {
    default: string;
    pl: string;
    en: string;
  };
  /** Number of single beds */
  singleBed: number;
  /** Number of double beds */
  doubleBed: number;
  /** Number of extra beds */
  extraBed: number;
  /** Room square footage */
  square: number;
  /** Maximum number of adults */
  maxAdults: number;
  /** Maximum number of children */
  maxChildren: number;
  /** Maximum number of people */
  maxPeople: number;
  /** List of equipment keys */
  equipment: string[];
}

