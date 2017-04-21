
function calendar(){
    var d = new Date();
    var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+d.getFullYear());
   
};


function setText(id, val){
    if(val < 10){
        val = '0' + val;    
    }
    document.getElementById(id).innerHTML = val;
};



function clockDisplay(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if(h < 10){
        h = '0'+h;
    }
    if(m < 10){
        m = '0'+m;
    }
    if(s < 10){
        s = '0'+s;
    }

    document.getElementById('clock').innerHTML= h+':'+m+':'+s;
    setTimeout(clockDisplay,1000);
}


function start(){
    calendar();
    clockDisplay();
}

window.onload = start;

