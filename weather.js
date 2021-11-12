//Complete the Weather API Backend part using openweathermap api
var apikey = '03a0a1b3bb6f32b7fc192d04149c94a3';
var date = new Date;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var button = document.getElementById('button');
// button.addEventListener('click', getData);
var search = document.getElementsByClassName('search-box')[0]
                .addEventListener('keyup',getData);

function getData(){
if(event.keyCode === 13) {
    var cityname = document.getElementById('cityname').value;
    //declare url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
    fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            //First Temp
            document.getElementsByClassName('date')[0].innerHTML = days[date.getDay()]+' '+date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();
            document.getElementsByClassName('city')[0].innerHTML = data.name+' ,'+data.sys.country;
            document.getElementsByClassName('temp')[0].innerHTML = `<span>${Math.round(data.main.temp)} °c</span>`;
            document.getElementsByClassName('weather')[0].innerHTML = data.weather[0].main;
            document.getElementsByClassName('hi-low')[0].innerHTML = Math.round(data.main.temp_max)+' °c/ '+Math.round(data.main.temp_min)+' °c';
        })

    .catch(() => {
        document.getElementById('error-msg').textContent = 'Please Press Enter Or Enter Valid City Name';
    })
}
}