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

export type UserWithBooksType = UserType & {
    books: string []
}
type CompanyType = { id: number, title: string }
export type UserWithCompanies = {
    companies: Array<CompanyType>
}

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

export function upgradeUserLaptop(u: UserWithMacbook, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptop & UserWithBooksType, house: number) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    return copy
}

export function addNewBooksToUser(u: UserWithLaptop & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithLaptop & UserWithBooksType, oldBook: string, newbook: string) {
    return {
        ...u,
        books: u.books.map(b => {
            if (b === oldBook) {
                return newbook
            } else {
                return b
            }
        })
    }
}

/* второй вариант записи - тернарное выражение
return {
...u,
    books: u.books.map (b => b === oldBook ? newbook : b)}*/
export function removeBook(u: UserWithLaptop & UserWithBooksType, bookToRemove: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToRemove)
    }
}

export function updateCompanyTitle(u: UserWithCompanies,
                                   companyId: number,
                                   newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2(companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}


