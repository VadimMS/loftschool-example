/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
let array = ['Вася', 'Петя', 'Валера'];

function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}
forEach(array, (item, i) => `${item}[${i}]`);
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }

    return newArr;
}

map(array, item => item.split('').reverse().join(''));
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
array = [1, 2, 3, 4, 5];
function reduce(array, fn, initial) {
    let hasInitial = initial !== undefined;
    let result = hasInitial ? initial : array[0];

    for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

reduce(array, (prevVarious, currentItem) => prevVarious + currentItem);
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

const obj = {
    name: 'Дима',
    lastName: 'Димович',
};

function upperProps(obj) {
    return Object.keys(obj).map(item => item.toUpperCase());
}

upperProps(obj);

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    
    let newArr = [];

    if (Boolean(+from) === false) {
        from = 0
    }

    if (from < 0) {
        from = array.length + from
    }

    if (to < 0) {
        to = array.length + to
    }

    for (let i = from; i < to; i++) {
        if (array[i] !== undefined) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

slice(array, 0, 3);

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(obj, key, value) {
            obj[key] = value ** 2;
            
            return true;
        },
    });
}

let objProx = createProxy({});

objProx.foo = 2;
objProx.foo;

export { forEach, map, reduce, upperProps, slice, createProxy };
