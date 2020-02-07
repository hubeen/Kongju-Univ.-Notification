const request = require("request");
const cheerio = require("cheerio");
const log = console.log;
const notic_student = "http://www.kongju.ac.kr/lounge/board.jsp?page=0&board=student_news";

request({
		method:'GET',
		uri: notic_student,
		mutipart:[{
			'content-type':'text/html; charset=utf-8'
		}]
	}, function (err, res, html){
		const $ = cheerio.load(html);
		var data = [ ];
		var data = [ ];
		var table = $("table.content_main_table02");
		var tr_list = $(table).children( "tbody" ).children("tr.table_tr");

		for( var row = 0; row < tr_list.length; row++ ) {
			var cells = tr_list.eq( row ).children( );
			var cols = [ ];
			// 열의 갯수만큼 반복문을 실행
			for( var column = 0; column < cells.length; column++ ) {
				var hero = cells.eq( column ).text( );
				cols.push( hero );
			}
			data.push( cols );
		}
		var ret_data = data;
		log(data);
})

/*
getHtml()
	.then(html => {
		const $ = cheerio.load(html.data, {decodeEntities: true});
		var data = [ ];
		var table = $("table.content_main_table02");
		var tr_list = $(table).children( "tbody" ).children("tr.table_tr");

		// 행의 갯수만큼 반복문을 실행
		for( var row = 0; row < tr_list.length; row++ ) {
			var cells = tr_list.eq( row ).children( );
			var cols = [ ];
			// 열의 갯수만큼 반복문을 실행
			for( var column = 0; column < cells.length; column++ ) {
				var hero = cells.eq( column ).text( );
				cols.push( hero );
			}
			data.push( cols );
		}
		var ret_data = data;
		
		return ret_data;
	})
	.then(res=> log(res));
*/