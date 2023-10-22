let userName=prompt("Adınız nedir?")
let myName=document.querySelector("#myName")
myName.innerHTML=userName.charAt(0).toLocaleUpperCase("tr")+userName.slice(1).toLowerCase();

let myClock=document.querySelector("#myClock")

function time(){
    let date=new Date ();
    let hour=date.getHours().toString().padStart(2, '0');
    let minutes=date.getMinutes().toString().padStart(2, '0');
    let seconds=date.getSeconds().toString().padStart(2, '0');
    let day=date.toLocaleDateString('tr-TR',{weekday:'long'});
    let timeInfo=`${hour}:${minutes}:${seconds} ${day}`
    myClock.innerHTML=timeInfo
}
setInterval(time, 1000);

time()


