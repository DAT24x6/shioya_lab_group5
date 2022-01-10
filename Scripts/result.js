const currentUrl = new URL(location.href);
//URLSearchParamsオブジェクトを取得
const queryString = currentUrl.searchParams;


//取得方法1 : キー名を指定して値を取得
const namae = queryString.get('yourName');

const email = queryString.get('email');

const gender = queryString.get('gender');

const job = queryString.get('yourJob');

const gakubu = queryString.get('yourSyozoku');

const year = queryString.get('year');

const month = queryString.get('month');

const day = queryString.get('day');
