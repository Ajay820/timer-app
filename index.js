
let seconds =0
let minutes =0
let hour= 0
let count =0

let start =document.getElementById("start")
let stops = document.getElementById("stop")
let reset =document.getElementById("reset")

start.addEventListener("click",startf)
stops.addEventListener("click",stopf)
reset.addEventListener("click",resetf)


function startf(){
   seconds = seconds + 1

   if(seconds==60){
    minutes = minutes +1
    seconds = 0
  }


id = setTimeout(startf,1000)

let s = seconds< 10 ? 0 + ""+seconds:seconds

let m = minutes < 10 ? 0 +""+minutes:minutes

let h = hour < 10 ? 0 +""+hour:hour

document.getElementById("test").textContent= h+":" + m +":"+s

startf.disabled =true
    
}

function stopf(){
    clearTimeout(id)
}

function resetf(){
  clearTimeout(id)
  seconds =0
  minutes =0
  hour =0
  document.getElementById("test").textContent= 0+""+hour+":"+0 +""+minutes+":"+0+""+seconds

}