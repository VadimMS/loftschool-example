/* ДЗ 5 - DOM Events */

/*
 Задание 1:

 Функция должна добавлять обработчик fn события eventName к элементу target

 Пример:
   addListener('click', document.querySelector('a'), () => console.log('...')) // должна добавить указанный обработчик кликов на указанный элемент
 */
function addListener(eventName, target, fn) {
    target.addEventListener(eventName, fn);
}
// addListener('click', document.querySelector('#taskOne'), () => alert('Add Listener'));
/*
 Задание 2:

 Функция должна удалять у элемента target обработчик fn события eventName

 Пример:
   removeListener('click', document.querySelector('a'), someHandler) // должна удалить указанный обработчик кликов на указанный элемент
 */
function removeListener(eventName, target, fn) {
    target.removeEventListener(eventName, fn);
}
// removeListener('click', document.querySelector('#taskOne'), () => alert('Remove Listener'));
/*
 Задание 3:

 Функция должна добавить к элементу target такой обработчик на события eventName, чтобы он отменял действия по умолчанию

 Пример:
   skipDefault('click', document.querySelector('a')) // после вызова функции, клики на указанную ссылку не должны приводить к переходу на другую страницу
 */
function skipDefault(eventName, target) {
    target.addEventListener(eventName, e => e.preventDefault());
}
// skipDefault('click', document.querySelector('#taskTwo'));
/*
 Задание 4:

 Функция должна эмулировать событие click для элемента target

 Пример:
   emulateClick(document.querySelector('a')) // для указанного элемента должно быть сэмулировано события click
 */
function emulateClick(target) {
    target.dispatchEvent(new MouseEvent('click'));
}
// emulateClick(document.querySelector('#taskThre'));
/*
 Задание 5:

 Функция должна добавить такой обработчик кликов к элементу target,
 который реагирует (вызывает fn) только на клики по элементам BUTTON внутри target

 Пример:
   delegate(document.body, () => console.log('кликнули на button')) // добавит такой обработчик кликов для body, который будет вызывать указанную функцию только если кликнули на кнопку (элемент с тегом button)
 */
function delegate(target, fn) {
    target.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'button') {
            fn();
        }
    });
}
// delegate(document.body, () => alert('кликнули на button'));
/*
 Задание 6:

 Функция должна добавить такой обработчик кликов к элементу target,
 который сработает только один раз и удалится (перестанет срабатывать для последующих кликов по указанному элементу)

 Пример:
   once(document.querySelector('button'), () => console.log('обработчик выполнился!')) // добавит такой обработчик кликов для указанного элемента, который вызовется только один раз и затем удалится
 */
function once(target, fn) {
    let isAlready = false;

    // if (!isAlready) {
    //     target.addEventListener('click', () => {
    //         fn();
    //         isAlready = true;
    //         target.removeEventListener('click');
    //     });
    // }
    
    target.addEventListener('click', () => {
        if (!isAlready) {
            fn();
            isAlready = true;
        }
    });
}
// once(document.querySelector('#taskFive'), () => alert('обработчик выполнился!'));

export { addListener, removeListener, skipDefault, emulateClick, delegate, once };
