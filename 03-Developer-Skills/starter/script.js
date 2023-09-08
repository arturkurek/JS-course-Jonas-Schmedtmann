// Remember, we're gonna use strict mode in all scripts now!
'use strict'; // note tryb ścisły - zakaz deklarowania zmiennych bez użycia słów kluczowych i przypisywania do nich wartości, zakaz używania słów kluczowych jako identyfikatory(nazwy), zakaz zmieniania wartości const, zakaz usuwania zmiennej lub funkcji za pomocą operatora delete, zmienione zachowanie this - w trybie ścisłym przy globalnym wywołaniu będzie miało wartość 'undefined'.

const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log(1998);
