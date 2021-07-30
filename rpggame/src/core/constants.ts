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

export const GridSize = {
    SMALL: 12,
    MEDIUM: 16,
    LARGE: 20
} as const;