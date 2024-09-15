
var url_string = window.location.href
var url = new URL(url_string);
var nameValue = url.searchParams.get("name");

if(nameValue == null){
    nameValue = 'TTV'
}    

setInterval(() => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var discordId = url.searchParams.get("discordid");
    if(discordId == null){ document.getElementById('songTitle').innerText = 'No Discord Id Given'; return }
    if(discordId.length != 18){ document.getElementById('songTitle').innerText = 'Invaild Discord Id'; return }
    var url = `https://api.lanyard.rest/v1/users/1169111190824308768`
    fetch(url)
        .then(res => res.json())
        .then(out => {
            console.log(out)
            if(out.data.listening_to_spotify == true){
                document.getElementById('songTitle').innerText = out.data.spotify.song;
                document.getElementById('songArtist').innerText = out.data.spotify.artist;
                document.getElementById('songArt').setAttribute('src', out.data.spotify.album_art_url)
            }else if(out.data.listening_to_spotify == false){
                document.getElementById('songArtist').innerText = "You're not currently listeing to anything";
                document.getElementById('songTitle').innerText = " ";
                document.getElementById('songArt').setAttribute('src', ' ')
            }
        })
        .catch(err => console.log(err));
}, 2000);

function dispalyGreetings(today){
    var hrs = today.getHours();
    if (hrs < 12)
        greet = 'Good Morning  '+nameValue;
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon '+nameValue;
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening  '+nameValue;
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
