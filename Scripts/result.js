const currentUrl = new URL(location.href);
//URLSearchParamsオブジェクトを取得
const queryString = currentUrl.searchParams;


//取得方法1 : キー名を指定して値を取得
const namae = queryString.get('yourName');
document.write("<p class= 'namae'>" + namae + "</p>");
const shasin = queryString.get('yourPicture');
document.write("<img src=\"" + shasin + "\">");
const email = queryString.get('email');
document.write("<p class= 'email'>" + email + "</p>");
const job = queryString.get('yourJob');
document.write("<p class= 'job'>" + job + "</p>");
const gakubu = queryString.get('yourSyozoku');
document.write("<p class= 'gakubu'>" + gakubu + "</p>");
const year = queryString.get('year');
document.write("<p class= 'year'>" + year + "</p>");
const month = queryString.get('month');
document.write("<p class= 'month'>" + month + "</p>");
const day = queryString.get('day');
document.write("<p class= 'day'>" + day + "</p>");