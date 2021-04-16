export const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => {
    return age > 90;
}

export const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}
export const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
    ];

export const cheapPredicate = (course:CourseType ) => {
    return course.price < 160;
}
export const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
];
