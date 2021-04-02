export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    buildAt: number
    repaired: false
    address: AddressType
}
export type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
     houses: HouseType[]
     governmentBuildings: governmentBuildingsType[]
     citizensNumber: number
 }