type CityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}
const student = {
    id: 1,
    name: "Martin",
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'React'
        },
        {
            id: 3,
            title: 'CSS'
        }
    ]
}
console.log(student.name)
console.log(student.address.city)
console.log(student.technologies[2].title)