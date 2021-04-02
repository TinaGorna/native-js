import {StudentType} from "../02-tests/02";
import {addSkill, DoesStudentLiveInaCity, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(3);

    addSkill (student, 'JS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('student lives in a city', () => {
    let result1 = DoesStudentLiveInaCity(student, 'Moscow');
    let result2 = DoesStudentLiveInaCity(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})