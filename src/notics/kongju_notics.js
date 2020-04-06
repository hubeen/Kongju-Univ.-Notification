const hot_notics_url = 'https://www.kongju.ac.kr/kor/article/hot_news/?mno=&pageIndex=';
const student_notics_url = 'https://www.kongju.ac.kr/kor/article/student_news/?mno=&pageIndex=';
const executive_notics_url = 'https://www.kongju.ac.kr/kor/article/executive_news/?mno=&pageIndex=';
const work_notics_url = 'https://www.kongju.ac.kr/kor/article/work_news/?mno=&pageIndex=';
const career_notics_url = 'https://www.kongju.ac.kr/kor/article/career/?mno=&pageIndex=';


function GetNotice_hot(i) {
    let Board = [];
    return new Promise(resolve => {
        axios.get(hot_notics_url + i, {
        }).then(res => {
            let el = $('<div></div>');
            el.html(res.data);
            let table = $('div.div_hot_news ul', el).children("li");
            table.find("a").each(function (i, e) {
                Board[i] = {
                    title: $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url: "https://www.kongju.ac.kr/kor/article/hot_news/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                }
            });
            table.find("p.date").each(function (i, e) {
                Board[i].date = $(this).text();
            });
    
            table.find("p.writer").each(function (i, e) {
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        })
    }); 
}
function GetNotice_student(i) {
    let Board = [];
    return new Promise(resolve => {
        axios.get(student_notics_url + i, {
        }).then(res => {
            let el = $('<div></div>');
            el.html(res.data);
            let table = $('div.div_student_news ul', el).children("li");
            table.find("a").each(function (i, e) {
                Board[i] = {
                    title: $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url: "https://www.kongju.ac.kr/kor/article/student_news/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                }
            });
            table.find("p.date").each(function (i, e) {
                Board[i].date = $(this).text();
            });
    
            table.find("p.writer").each(function (i, e) {
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        })
    }); 
}
function GetNotice_executive(i) {
    let Board = [];
    return new Promise(resolve => {
        axios.get(executive_notics_url + i, {
        }).then(res => {
            let el = $('<div></div>');
            el.html(res.data);
            let table = $('div.div_executive_news ul', el).children("li");
            table.find("a").each(function (i, e) {
                Board[i] = {
                    title: $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url: "https://www.kongju.ac.kr/kor/article/executive_news/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                }
            });
            table.find("p.date").each(function (i, e) {
                Board[i].date = $(this).text();
            });
    
            table.find("p.writer").each(function (i, e) {
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        })
    }); 
}
function GetNotice_work(i) {
    let Board = [];
    return new Promise(resolve => {
        axios.get(work_notics_url + i, {
        }).then(res => {
            let el = $('<div></div>');
            el.html(res.data);
            let table = $('div.div_work_news ul', el).children("li");
            table.find("a").each(function (i, e) {
                Board[i] = {
                    title: $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url: "https://www.kongju.ac.kr/kor/article/work_news/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                }
            });
            table.find("p.date").each(function (i, e) {
                Board[i].date = $(this).text();
            });
    
            table.find("p.writer").each(function (i, e) {
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        })
    }); 
}

function GetNotice_career(i) {
    let Board = [];
    return new Promise(resolve => {
        axios.get(career_notics_url + i, {
        }).then(res => {
            let el = $('<div></div>');
            el.html(res.data);
            let table = $('div.div_career ul', el).children("li");
            table.find("a").each(function (i, e) {
                Board[i] = {
                    title: $(this).text().replace(/(\\n)|(\s){2,}|(\\t)/g, '').replace("new", ''),
                    url: "https://www.kongju.ac.kr/kor/article/career/" + $(this).attr("onclick").replace("article.view('", '').replace("');", '')
                }
            });
            table.find("p.date").each(function (i, e) {
                Board[i].date = $(this).text();
            });
    
            table.find("p.writer").each(function (i, e) {
                Board[i].writer = $(this).text();
            });

            resolve(Board);
        })
    }); 
}