import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompanies,
    UserWithLaptop,
    UserWithMacbook
} from "./10"


test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithMacbook = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
})
test("upgrade laptop to Macbook", () => {
    let user: UserWithMacbook & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})
test("add new books to user", () => {
    let user: UserWithMacbook & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[4]).toBe("ts")
})
test("update js books to ts", () => {
    let user: UserWithMacbook & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe("ts")
})
test("remove js book", () => {
    let user: UserWithMacbook & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.books[2]).toBe("react")
})
test("update company", () => {
    let user: UserWithLaptop & UserWithCompanies = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, title: "Епам"}, {id: 2, title: "IT-Incubator"}]
    }
    const userCopy = updateCompanyTitle(user, 1, "Epam") as UserWithLaptop & UserWithCompanies //1 - это it компании, кот. надо обновить
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[0].title).toBe("Epam")

})
test("update company state", () => {

    let companies = {
        "Dimych": [{id: 1, title: "Епам"}, {id: 2, title: "IT-Incubator"}],
        "Artem": [{id: 2, title: "IT-Incubator"}]
    }
    const copy = updateCompanyTitle2(companies, "Dimych", 1, "Epam")
    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("Epam")
})