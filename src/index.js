/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// delayPromise(3);
/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */

const url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

function loadAndSortTowns() {
    return fetch(url)
        .then(res => res.json())
        .then(towns => towns.sort((a, b) => a.name.localeCompare(b.name)));

    // return new Promise(resolve => {
    //     const xhr = new XMLHttpRequest();

    //     xhr.open('GET', url);
    //     xhr.responseType = 'json';
    //     xhr.send();

    //     xhr.addEventListener('load', () => {
    //         if (xhr.status === 200) {
    //             const towns = xhr.response.sort((a, b) => a.name.localeCompare(b.name));

    //             resolve(towns);
    //         }
    //     });
    // });
}
// loadAndSortTowns().then(towns => console.log(towns));

// async function loadAndSortTowns() {
//     const response = await fetch(url);
//     const towns = await response.json();
//     const townsSort = towns.sort((a, b) => a.name.localeCompare(b.name));

//     console.log(townsSort);
// }

// loadAndSortTowns();

export { delayPromise, loadAndSortTowns };
