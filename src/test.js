const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const log = console.log;
const notic_student = "http://www.kongju.ac.kr/lounge/board.jsp?board=student_news&page="
function GetData(i){
    request({
         method:'GET',
         uri: notic_student + i,
         headers: { "User-Agent": "Mozilla/5.0" },
         encoding: null
     }, function (err, res, html){
        var data = [];
        const strContents = Buffer(html);
        const body= iconv.decode(strContents, 'EUC-KR').toString();
        const $ = cheerio.load(body);
        var table = $("table.content_main_table02");
        var tr_list = $(table).children( "tbody" ).children("tr.table_tr");

        for( var row = 0; row < tr_list.length; row++ ) {
            var cells = tr_list.eq( row ).children( );
            var cols = [ ];
            for( var column = 0; column < cells.length -1; column++ ) {
                if(column != 2){
                    var hero = cells.eq( column ).text().replace(/(\\n)|(\s){2,}|(\\t)/g, "");
                    cols.push( hero );
                }
            }
            data.push( cols );
         }
         log(data);
     });
}
for(var i=0; i<3; i++){
    GetData(i);
}
