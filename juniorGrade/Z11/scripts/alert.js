// || (ИЛИ)
result = a || b;

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// Например, число 1 будет воспринято как true, а 0 – как false:

if (1 || 0) { // работает как if( true || false )
  alert( 'truthy!' );
}

// ИЛИ «||» находит первое истинное значение
result = value1 || value2 || value3;

/*
Другими словами, цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.

Например:
*/

alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

//&& (И)
//Оператор И пишется как два амперсанда &&:

result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
Пример с if:

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // вычисляется как true && false
  alert( "не сработает, так как результат ложный" );
}

//Задачи
/*
Что выведет alert (ИЛИ)?
Что выведет код ниже?

alert( null || 2 || undefined ); Ответ = 2.
*/

// 2 
/*
Что выведет alert (ИЛИ)?
Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); Сначала выведет 1, затем 2.
*/

// 3
/*
Что выведет alert (И)?
Что выведет код ниже?

alert( 1 && null && 2 ); null, потому что это первое «ложное» значение из списка.
*/

// 4
/*
Что выведет alert (И)?
Что выведет код ниже?

alert( alert(1) && alert(2) ); 1, а затем undefined.
*/

// 5
/*
Что выведет этот код?
Что выведет код ниже?

alert( null || 2 && 3 || 4 ); Ответ 3.
*/

// 6
/*
Проверка значения из диапазона
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

if (age >= 14 && age <= 90)
*/

//7
/*
Проверка значения вне диапазона
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (age < 14 || age > 90)
*/

// 8
/*
Вопрос о "if"
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' ); Результат -1 || 0 = -1, в логическом контексте true
if (-1 && 0) alert( 'second' ); Результат -1 || 0 = -1, в логическом контексте true
if (null || -1 && 1) alert( 'third' ); Oператор && имеет больший приоритет, чем || так что -1 && 1 выполнится раньше
*/

// 9
/*
Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
*/