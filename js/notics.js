$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
    var parm = location.href.split("kongju_notics.html?id=")[1];
    switch (parm){
        case "hot":
            $("#category").text("HOT 뉴스");
            GetNotice_hot(1).then(function(Board){
                $(".tb_data").html("<tr></tr>")
                for(let i=0; i<Board.length; i++){
                    let title = Board[i]['title'];
                    let date = Board[i]['date'];
                    let writen = Board[i]['writer'];
                    let url = Board[i]['url'];
                    $(".tb_data").html($(".tb_data").html() + "<tr>" 
                                                        + "<td><a href='" + url + "' target='_blank'>" + title + "</a></td>" +
                                                        "<td>" + date + "</td>" + 
                                                        "<td>" + writen + "</td>" + 
                                                        "</tr>");
                }
            });
            break;
        case "student":
            $("#category").text("학생 소식");
            GetNotice_student(1).then(function(Board){
                $(".tb_data").html("<tr></tr>")
                for(let i=0; i<Board.length; i++){
                    let title = Board[i]['title'];
                    let date = Board[i]['date'];
                    let writen = Board[i]['writer'];
                    let url = Board[i]['url'];
                    $(".tb_data").html($(".tb_data").html() + "<tr>" 
                                                        + "<td><a href='" + url + "' target='_blank'>" + title + "</a></td>" +
                                                        "<td>" + date + "</td>" + 
                                                        "<td>" + writen + "</td>" + 
                                                        "</tr>");
                }
            });
            break;
        case "executive":
            $("#category").text("행정 소식");
            GetNotice_executive(1).then(function(Board){
                $(".tb_data").html("<tr></tr>")
                for(let i=0; i<Board.length; i++){
                    let title = Board[i]['title'];
                    let date = Board[i]['date'];
                    let writen = Board[i]['writer'];
                    let url = Board[i]['url'];
                    $(".tb_data").html($(".tb_data").html() + "<tr>" 
                                                        + "<td><a href='" + url + "' target='_blank'>" + title + "</a></td>" +
                                                        "<td>" + date + "</td>" + 
                                                        "<td>" + writen + "</td>" + 
                                                        "</tr>");
                }
            });
            break;
        case "work":
            $("#category").text("행사 안내");
            GetNotice_work(1).then(function(Board){
                $(".tb_data").html("<tr></tr>")
                for(let i=0; i<Board.length; i++){
                    let title = Board[i]['title'];
                    let date = Board[i]['date'];
                    let writen = Board[i]['writer'];
                    let url = Board[i]['url'];
                    $(".tb_data").html($(".tb_data").html() + "<tr>" 
                                                        + "<td><a href='" + url + "' target='_blank'>" + title + "</a></td>" +
                                                        "<td>" + date + "</td>" + 
                                                        "<td>" + writen + "</td>" + 
                                                        "</tr>");
                }
            });
            break;
        case "career":
            $("#category").text("취업 소식");
            GetNotice_career(1).then(function(Board){
                $(".tb_data").html("<tr></tr>")
                for(let i=0; i<Board.length; i++){
                    let title = Board[i]['title'];
                    let date = Board[i]['date'];
                    let writen = Board[i]['writer'];
                    let url = Board[i]['url'];
                    $(".tb_data").html($(".tb_data").html() + "<tr>" 
                                                        + "<td><a href='" + url + "' target='_blank'>" + title + "</a></td>" +
                                                        "<td>" + date + "</td>" + 
                                                        "<td>" + writen + "</td>" + 
                                                        "</tr>");
                }
            });
            break;
    }
});