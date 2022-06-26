const path = "/users/download/index.html"

const isHtml = path => {
// передаем строку эмулирующую путь до файла
const requiredExt = ".html";
// создали переменную с которой будем сравнивать строку
const pathExt = path.slice(-5);
// создадим переменную в которую запишем вырезаную строку (-5 это 5 с конца)
return requiredExt == pathExt
// == всегда возвращает true или false
}
// если равны то true иначе false
console.log(isHtml(path));