// Результат сравнения имеет логический тип
alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)

// Сравнение строк
alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

// Сравнение разных типов
alert( true == 1 ); // true
alert( false == 0 ); // true
alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

// Строгое сравнение
alert( '' == false ); // true
alert( 0 == false ); // true

// Сравнение с null и undefined
alert( null == undefined ); // true
alert( null === undefined ); // false

//Несравненное значение undefined
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// 1
/*
Каким будет результат этих выражений?
5 > 4; true
"ананас" > "яблоко"; false
"2" > "12"; true 
undefined == null; true
undefined === null; false
null == "\n0\n"; false
null === +"\n0\n"; false
*/