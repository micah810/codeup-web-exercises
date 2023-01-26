function getInfo(){
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
}
fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c70f7f2177b822cd129e3ff58a14a40c")
.then(response => response.json())
.then(data => {
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML="Min:"+Number(data.list[i].main.temp_min).toFixed(1)+"°"
    }
    for(i=0;i<5;i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML="Max:"+Number(data.list[i].main.temp_max).toFixed(1)+"°"
    }
} )

.catch(err => alert("Something went wrong"))
}
function defaultScreen(){
    document.getElementById("cityInput").defaultValue="Denver";
    getInfo();
const d =new Date();
const weekday= ["Monday, Tuesday, Wednesday, Thursday, Friday"]

function checkDay(day){
    if(day +d.getDay() > 5)
        return day +d.getDay()-5;
} else{
    return day +d.getDay();
}
}
for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTMLn= weekday[checkDay(i)];
 }


// MAPBOX

const MAPBOX_API_KEY = "pk.eyJ1IjoibWFkbWFyY29zIiwiYSI6ImNsNWw0YWNobTBnY3AzanN4dzdpemhpeG0ifQ.OO7BegDPBkP3SV0CaLbnyQ";
// const OPENWEATHER_API_KEY = '59e1b99e68e6d9bdb350bf932c7ac068';
const OPENWEATHER_API_KEY = 'c70f7f2177b822cd129e3ff58a14a40c'
}