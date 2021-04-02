import {StudentType} from "../02-tests/02"

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const DoesStudentLiveInaCity = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}
