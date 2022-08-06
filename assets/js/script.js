
var name = 'Dan'

function dispalyGreetings(today){
    var hrs = today.getHours();
    if (hrs < 12)
        greet = 'Good Morning  '+name;
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon '+name;
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening  '+name;
    document.getElementById('greet').innerHTML = greet;

}

function dispalyDate(today) {  
   
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

    var dayName = days[today.getDay()];
    var monthName = monthNames[today.getMonth()];
    var date = today.getDate();
    var year = today.getFullYear();
    document.getElementById('date').innerHTML =dayName+", "+monthName+" "+date+" "+year;

}


function dispalyClock(today) {

    var hour = padZeros(twelveHour(today.getHours()));
    var minutes = padZeros(today.getMinutes());
    var seconds = padZeros(today.getSeconds());
   
    if(today.getHours() >=12){
        seconds+=" pm"
    }
    else{
        seconds+=" am"
    }
   
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

function twelveHour(hour) {
    if (hour > 12) {
        return hour -= 12
    } else if (hour === 0) {
        return hour = 12;
    } else {
        return hour
    }
}
function padZeros(num) {
    if (num < 10) {
        num = '0' + num
    };
    return num;
}

function dispalyWidget() {
    var today = new Date();
    dispalyGreetings(today);
    dispalyDate(today);
    dispalyClock(today);
    setTimeout(dispalyWidget, 500);
}

dispalyWidget()
