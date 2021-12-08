const currentUrl = new URL(location.href);
//URLSearchParamsオブジェクトを取得
const queryString = currentUrl.searchParams;


//取得方法1 : キー名を指定して値を取得
const namae = queryString.get('yourName');
document.write(namae);
const job = queryString.get('yourjob');
document.write(job);
const gakubu = queryString.get('yourSyozoku');
document.write(gakubu);
const year = queryString.get('year');
document.write(year);
const month = queryString.get('month');
document.write(month);
const day = queryString.get('day');
document.write(day);
