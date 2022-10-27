export type TRegion = {
    is_loading: boolean
    is_eu_location: boolean
    is_uk_location: boolean
    is_eu: boolean
    is_uk: boolean
    is_non_uk: boolean
    is_non_eu: boolean
    is_uk_eu: boolean
    is_latam: boolean
    is_row: boolean
    is_dev: boolean
    is_africa: boolean
    is_south_africa: boolean
    is_nigeria: boolean
}

/* disable-translation */
export type StringObjectType = {
    [key: string]: string
}

export type PopupModalTypes = {
    is_open: boolean
    setShowNonEuPopup: React.Dispatch<React.SetStateAction<boolean>>
}

export type TString = `_t_${string}_t_`
export type ObjectPropType<TObj, TProp extends keyof TObj> = TObj[TProp]
export interface TSmartContent<T, V extends object> {
    id: number
    data: T
    visiblity: V
}

export type TRegionSmartContent<T> = TSmartContent<T, Partial<TRegion>>
export type TObjectKeys<T extends object> = keyof T
