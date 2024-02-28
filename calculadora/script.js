let button = document.getElementById("calcular");
button.addEventListener("click", calcular);
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man")

function calcular() {
    const input = document.getElementById("peso");
    peso= input.value;
    if (peso > 0 && peso <= 30) {
        let flujo = (hollidaySegar()/24);
        let man = flujo+(flujo/2);
        FLU.innerHTML = flujo.toFixed() + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = 'm+m/2' + man.toFixed() + 'cc/hr';
        MAN.style.display = 'block';

    }else if(peso > 30) {
        
        let flujo = superficieCorporal();
       
        FLU.style.display = "none";
        MAN.innerHTML =  (flujo*1500).toFixed() + 'cc/hr' + ' 1500' +'<br>'+ (flujo*2000).toFixed()  +'cc/hr ' + "2000";
        MAN.style.display = 'block';
       
    }
     else {
       ERROR.style.display = "block";
    }


    function hollidaySegar() {
        
        if (peso > 0 && peso <= 10) {
           
            p = peso * 100;}
        else if (peso > 10 && peso <= 20) {
            p = 1000 +(peso-10)*50;
        }
            else {
                p= 1500+(peso-20)*20;
            }
        

            return p;
        }
    
    function superficieCorporal() {
       let superficie = ((peso*4)+7) /(peso +90);
        return superficie;
    }
}


