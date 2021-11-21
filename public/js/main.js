AOS.init();
let submitbtn =document.getElementById('submitbtn');
let mydate=document.getElementById('date');
let myday=document.getElementById('day');

        let currtime=new Date();
        const days = ["Sun", "Mon", "Tues", "Wed ", "Thu", "Fri", "Sat"];
        let day =  days[currtime.getDay()];

        const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dece"];
        let month = months[currtime.getMonth()];

        let dates=currtime.getDate();
        mydate.innerHTML=`${dates} ${month}`;
        myday.innerHTML=`${day}`;




let getdata = async()=>{
    let cityname=document.getElementById('cityname').value;
    let answer=document.querySelector('.generatecity');
    let temperatue=document.querySelector('.temp');
    let tempstatus=document.querySelector('.tempstatus');
    let hide_box=document.querySelector('.hide_box');
    
        if(cityname===""){
        answer.innerHTML="please enter city name";
    }else{
        try{
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=da9562106938af5a8a9d5638cbefdb88`);
        let data=await response.json();
        let arrData=[data]
        answer.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
        temperatue.innerHTML=`${arrData[0].main.temp}`;
        hide_box.style.visibility="visible";
        let tempmood=arrData[0].weather[0].main;
        if (tempmood=='Smoke') {
            tempstatus.innerHTML=`<i class="fas fa-smog fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        else if (tempmood=='Thunderstorm') {
            tempstatus.innerHTML=`<i class="fas fa-stroopwafel fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        else if (tempmood=='Drizzle') {
            tempstatus.innerHTML=`<i class="fas fa-cloud-rain fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        else if (tempmood=='Rain') {
            tempstatus.innerHTML=`<i class="fas fa-cloud-showers-heavy fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        else if (tempmood=='Clouds') {
            tempstatus.innerHTML=`<i class="fas fa-cloud fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        else {
            tempstatus.innerHTML=`<i class="fas fa-sun fa-3x"></i> <br> ${arrData[0].weather[0].main}`;
        }
        }catch{
            answer.innerHTML="Enter city name correctly";
        hide_box.style.visibility="hidden";

        }
    }
}
submitbtn.addEventListener('click',getdata);
