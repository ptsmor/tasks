const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
//   создадим ф-цию которая проверяет на четность и вернет true или false
return num % 2 == 0;
// используем оператор целочисленый остаток от деления
}

const filterArray = (arrayToFilter,filterFn ) => {
// передаем массив и ф-цию которая будет его фильтровать
const filteredArray = [];
// заводим переменную(массив) где будем хранить отфильтрованые значения
arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num)  
    }
});

return filteredArray;
}


console.log(filterArray(mixedArray, isEven));