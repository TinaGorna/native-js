export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}
export type UserWithMacbook = UserWithLaptop

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptop, city: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    return copy
}

export function upgradeUserLaptop (u: UserWithMacbook, laptop: string) {
    return  {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}