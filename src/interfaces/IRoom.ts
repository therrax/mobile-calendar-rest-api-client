/**
 * Room interface
 */
export type EquipmentKey =
  | 'air_conditioning'
  | 'kitchenette'
  | 'television'
  | 'bathroom'
  | 'pool'
  | 'balcony'
  | 'washing_machine'
  | 'kitchen_utensils'
  | 'baby_crib'
  | 'blanket'
  | 'screen'
  | 'umbrella'
  | 'lounger'
  | 'clothes_hanger'
  | 'dryer'
  | 'towels'
  | 'floor_covering'
  | 'fireplace'
  | 'heating'
  | 'iron'
  | 'safe'
  | 'desk'
  | 'bidet'
  | 'toothbrush'
  | 'shampoo'
  | 'hair_conditioner'
  | 'soap'
  | 'radio'
  | 'table'
  | 'wine_glasses'
  | 'corkscrew'
  | 'water'
  | 'grill'
  | 'dishwasher'
  | 'minibar'
  | 'refrigerator'
  | 'coffee_machine';

export type RoomTypeKey =
  | 'SINGLE_ROOM'
  | 'DOUBLE_ROOM'
  | 'TWIN_ROOM'
  | 'TRIPLE_ROOM'
  | 'QUAD_ROOM'
  | 'QUEEN_ROOM'
  | 'KING_ROOM'
  | 'SUITE'
  | 'JUNIOR_SUITE'
  | 'FAMILY_ROOM'
  | 'CONNECTING_ROOMS'
  | 'DELUXE_ROOM'
  | 'SUPERIOR_ROOM'
  | 'STANDARD_ROOM'
  | 'STUDIO_ROOM'
  | 'APARTMENT'
  | 'LOFT'
  | 'ACCESSIBLE_ROOM'
  | 'VILLA'
  | 'BUNGALOW'
  | 'CABIN'
  | 'COTTAGE'
  | 'TREEHOUSE'
  | 'WATER_VILLA'
  | 'GLAMPING_TENT'
  | 'PENTHOUSE'
  | 'CAPSULE_ROOM'
  | 'DORMITORY'
  | 'BED_IN_DORMITORY'
  | 'CAVE_ROOM'
  | 'ICE_ROOM'
  | 'FARMHOUSE_ROOM'
  | 'BED_IN_SHARED_ROOM'
  | 'TATAMI_ROOM'
  | 'RAILWAY_CABIN'
  | 'AIRPORT_POD'
  | 'SAFARI_TENT'
  | 'OVERWATER_BUNGALOW'
  | 'CHALET'
  | 'HOLIDAY_HOME'
  | 'MOBILE_HOME';

export interface IRoom {
  /** Room identifier */
  roomId: number | null;
  /** Room name */
  name: string;
  /** Number of persons */
  persons: number;
  /** Maximum number of adults */
  maxAdults: number;
  /** Maximum number of children */
  maxChildren: number;
  /** Room type identifier */
  roomTypeId: number | null;
  /** Room type (dictionary key) */
  roomType: RoomTypeKey;
  /** Number of single beds */
  singleBed: number;
  /** Number of double beds */
  doubleBed: number;
  /** Number of extra beds */
  extraBed: number;
  /** Service type */
  service: 'CLEAN' | 'DIRTY' | 'WHILE_CLEANING';
  /** Service information */
  serviceInfo: string;
  /** Additional information */
  info: string;
  /** Room color */
  color: string;
  /** Area */
  square: string;
  /** Area type */
  squareType: 'm2' | 'ft2';
  /** Room description */
  description: {
    /** Default description */
    default: string;
    /** Polish description */
    pl: string;
  };
  /** Equipment (list of keys from EQUIPMENT_MAP) */
  equipment: EquipmentKey[];
  /** Share in offer */
  shareInOffer: number;
  /** Location identifier */
  locationId: number | null;
}
