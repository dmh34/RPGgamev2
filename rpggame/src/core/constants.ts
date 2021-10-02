export  const SlotType = {
    SAND: 1,
    GRASS: 2,
    MUD: 3,
    SNOW:4 ,
    WATER: 5,
    GRAVEL: 6,
    STONE: 7
} as const

export const GridBitMasks = {
    OCCUPIED: 0x1,
    TYPE: 0x1fe,
    HEIGHT: 0x1e00
}as const;

/**
 * Determines the grid size.
 */
export const GridSize = {
    SMALL: 24,
    MEDIUM: 32,
    LARGE: 40
} as const;

/**
 * Determines the weapon type.
 */
export const WeaponType = {
    STAFF: 1,
    LONG_SWORD: 2,
    SHORT_SWORD: 3,
    BOW: 4,
    POLEARM: 5,
    KNUCKLES: 6,
    ROD: 7,
    DAGGER: 8,
    WAND: 9
} as const;

/**
 * Determines the upperlimit of the damage the weapon can inflict.
 */
export const DamageClass ={
    LOW: 1,
    BELOW_AVG: 2,
    AVG: 3,
    ABOVE_AVG: 4,
    HIGH: 5
} as const;