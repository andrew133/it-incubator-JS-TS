export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
   id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    buildings?: any;
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}