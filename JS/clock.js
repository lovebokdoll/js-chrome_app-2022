const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("Hello");
}
//2초마다 실핼시키고 싶음

setInterval(sayHello, 5000);
//첫번째 argument: 실행하고자 하는 function
//두번째 argument: 호출되는 function 간격을 몇 ms 로 할 지 쓴다
