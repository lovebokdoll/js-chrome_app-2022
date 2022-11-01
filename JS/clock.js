const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //string으로 해준 이유 : padStart에 숫자가 들어가야하는데 (-->그러려면 문자 수로 변환되어야함)
  //getHours는 숫자임
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//2초마다 실핼시키고 싶음

getClock();
//get clock 즉시! --> 1초의 딜레이가 사라\

setInterval(getClock, 1000);
//첫번째 argument: 실행하고자 하는 function
//두번째 argument: 호출되는 function 간격을 몇 ms 로 할 지 쓴다

//setTimeout(sayHello, 5000);
//첫번째 argument: 실행하고자 하는 function
//두번째 argument: 얼마나 기다릴지 ms 로 쓴다

//padStart(maxlength,maxlength가 아니라면...)
