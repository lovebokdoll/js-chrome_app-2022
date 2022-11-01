const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//2초마다 실핼시키고 싶음

getClock();
//get clock 즉시! --> 1초의 딜레이가 사라짐

setInterval(getClock, 1000);
//첫번째 argument: 실행하고자 하는 function
//두번째 argument: 호출되는 function 간격을 몇 ms 로 할 지 쓴다

//setTimeout(sayHello, 5000);
//첫번째 argument: 실행하고자 하는 function
//두번째 argument: 얼마나 기다릴지 ms 로 쓴다
