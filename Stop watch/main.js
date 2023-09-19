let [milliseconds,seconds,minuts,hours]=[0,0,0,0]
let timerRef=document.querySelector('.timer-display')
let int=null;

document.getElementById("start-timer").addEventListener('click',function(){
    if(int !==null){
        clearInterval();
    }
    int=setInterval(displayTimer,10)
})

document.getElementById("pause-timer").addEventListener('click',function(){
    clearInterval(int);
})

document.getElementById("reset-timer").addEventListener('click',function(){
    clearInterval(int);
    [milliseconds,seconds,minuts,hours]=[0,0,0,0];
    timerRef.innerHTML="00 : 00 : 00 : 000 "
})

function displayTimer(){
    milliseconds+=10
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minuts++;
            if(minuts==60){
                minuts=0;
                hours++;
            }
        }
    }

    let h=hours<10 ? "0"+hours : hours;
    let m=minuts<10 ? "0"+minuts : minuts;
    let s=seconds<10 ? "0"+seconds : seconds;
    let ms= milliseconds <10 ? "00"+milliseconds :milliseconds<100 ? "0"+milliseconds : milliseconds;

    timerRef.innerHTML= `${h} : ${m} : ${s} : ${ms} `;
}
