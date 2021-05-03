// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {
    let arr = [3, 5, 7, 6, 4, 9].reduce((a, b) => a + b, 0)
    return arr
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && c === b) {
            return "10"
        } else if (a === b || a === c || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //первый вариант
    /*let figures = "" + number
    let sum = 0
    for (let i = 0; i < figures.length; i++)
        sum += +figures[i]
    return sum*/

    //второй вариант
    let digits = number.toString().split("");
    let realDigits = digits.map(Number)
    return (realDigits.reduce((acc, item) => acc + item, 0))

}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
// первый вариант
    /*let chet = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        chet = chet + arr[i]
    }
    let nechet = 0;
    for (let i = 1; i < arr.length; i = i + 2) {
        nechet = nechet + arr[i]
    }
    return chet > nechet*/

    //второй вариант
    /* let even = arr.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum, 0);
     let notEven = arr.reduce((sum, num, index) => index % 2 !== 0 ? sum + num : sum, 0);
     return even > notEven*/

    //третий вариант
    let sumEven = 0, sumOdd = 0;
    arr.forEach((num, i) => {
        if (i % 2 === 0) {
            sumEven = sumEven + num
        } else {
            sumOdd = sumOdd + num
        }
    })
    return sumEven > sumOdd
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    const sCr = 3.14
    const sSq = 4
    areaCr = sCr / Math.PI
    areaSq = Math.sqrt(sSq)
    if (areaSq >= areaCr) {
        return true
    } else {
        return false
    }
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result = [];
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let note = banknotes [i];
            while (amountOfMoney - note >= 0) {
                amountOfMoney -= note;
                result.push(note);
            }
        }
    }
    return result
}