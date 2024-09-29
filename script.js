// -------Date Script-------
const dateData=new Date();
const date=dateData.getDate();
const month=dateData.getMonth();
const year=dateData.getFullYear();
const dayEl=document.querySelector(".date");
const dmy=date+"-"+month+"-"+year;
dayEl.innerHTML=dmy;

// -------API Script-------

const inputBox=document.querySelector(".inputBox");
const fas=document.querySelector(".fas");
const apiurl="https://api.openweathermap.org/data/2.5/weather?";
const apikey="4082ed8a1997d6e27d1caa732b19c30b";

const temp=document.querySelector(".Temp");
const wind=document.querySelector(".Wind");
const humidity=document.querySelector(".Humidity");
const cityName=document.querySelector(".city-name");

fas.addEventListener("click",async function weather(){
    
    const res=await fetch(apiurl+`q=${inputBox.value}`+`&appid=${apikey}&units=metric`)
    var data=await res.json();
    let t=data.main.temp;
    let w=data.wind.speed;
    let h=data.main.humidity;
    let c=data.name;
    temp.innerHTML=t;
    wind.innerHTML=w;
    humidity.innerHTML=h;
    cityName.innerHTML=c;
})


    

