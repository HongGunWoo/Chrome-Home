const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const month=(date.getMonth()+1);
    const toDate=date.getDate();
    const day=date.getDay();
    var arrDayStr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

    clockTitle.innerText=`${month}/${toDate}
    ${arrDayStr[day]}`;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();