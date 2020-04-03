let GetNoticeHot = require("../libs/notice_hot.js");
let GetNoticeStudent = require("../libs/notice_student.js");
let GetNoticeExecutive = require("../libs/notice_executive.js");
let GetNoticeWork = require("../libs/notice_work.js");
let GetNoticeCareer = require("../libs/notice_career.js");

(async ()=>{
    let parm = location.href.split("#")[1];
    console.log(parm);
    switch (parm){
        case "hot":
	        console.log(await GetNoticeHot(1))
            break;
        case "student":
	        console.log(await GetNoticeStudent(1))
            break;
        case "executive":
	        console.log(await GetNoticeExecutive(1))
            break;
        case "work":
	        console.log(await GetNoticeWork(1))
            break;
        case "career":
	        console.log(await GetNoticeCareer(1))
            break;
    }
})()
