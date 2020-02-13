const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const log = console.log;
const notic_student = 'http://www.kongju.ac.kr/lounge/board.jsp?board=student_news&page='

function GetData(i) {
  request({
    method:'GET',
    uri: notic_student + i,
    headers: { 'User-Agent': 'Mozilla/5.0' },
    encoding: null
  }, function (err, res, html) {
    let data = [];
    const strContents = Buffer(html);
    const body= iconv.decode(strContents, 'EUC-KR').toString();
    const $ = cheerio.load(body);
    let table = $('table.content_main_table02');
    let tr_list = $(table).children('tbody').children('tr.table_tr');
    for (let row = 0; row < tr_list.length; row++) {
      let cells = tr_list.eq(row).children();
      let cols = [];
      for (let column = 0; column < cells.length - 1; column++) {
        if (column != 2) {
            let hero = cells.eq(column).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '');
            cols.push(hero);
        }
      }
      data.push(cols);
    }
    log(data);
  });
}

for (let i = 0; i < 3; i++) {
  GetData(i);
}
