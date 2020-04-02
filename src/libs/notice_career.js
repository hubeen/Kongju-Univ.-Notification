const request = require('request');
const cheerio = require('cheerio');
const log = console.log;
const notics_url = 'https://www.kongju.ac.kr/kor/article/career/?mno=&pageIndex=';

function GetNotice(i){
    var Board = [];

    return new Promise(resolve=> {
        request({
            method: "GET", 
            uri: notics_url + i,
            headers: { 'User-Agent': 'Mozilla/5.0' },
            encoding: 'UTF-8'
        }, function(err, res, html){
            const $ = cheerio.load(html);
            let table = $('div.div_career ul').children("li");
            table.find("a").each(function(i, e){
                Board[i] = {
                    title : $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url : "https://www.kongju.ac.kr/kor/article/career/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                };
                //log($(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, ''));
                //resolve(Board);
            });
            table.find("p.date").each(function(i, e){
                Board[i].date = $(this).text();
            });

            table.find("p.writer").each(function(i, e){
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        });
    });

}

module.exports = GetNotice;
