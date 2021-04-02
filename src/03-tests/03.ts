import {StudentType} from "../02-tests/02"
import {governmentBuildingsType, HouseType} from "../02-tests/02_02";

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

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}
export const toFireStaff = (building: governmentBuildingsType, stafftoFire: number) => {
    building.staffCount -=stafftoFire;
}