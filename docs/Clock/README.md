# Clock

#### [interval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

**setInterval**

```js
setInterval(실행하고자 하는 함수, 호출되는 함수의 간격을 몇 ms로 할 지)
```

#### [timeout](https://developer.mozilla.org/ko/docs/Web/API/setTimeout)

**setTimeout**

```js
setTimeout(실행하고자 하는 함수, 호출되는 함수의 간격을 몇 ms로 할 지)
```

#### setInterval vs setTimeout

setTimeout - 시간 간격 후에 한 번만 함수를 실행한다.


setInterval - 시간 간격 이후에 시작한 다음 해당 간격으로 계속 반복하여 함수를 반복적으로 실행할 수 있습니다.


#### [Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

getHours(), getMinutes(), getSeconds()

매 초마다 새로운 Date object를 만들고 있다.
new Date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있고 이 object를 매 초마다 생성한다.


#### [padStart](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

```js
    "string".padStart(2, "0");
```

string이 있다면 padStart에게 길이가 2가 되어야 하는 string이라고 하는 코드다. padStart를 써서 string의 앞쪽을 늘려 해당 문자열 길이가 2가 되도록 하는 코드지만 2가 안될 경우 0으로 문자를 채워 길이 2로 만든다.


#### 코드 정리

getClock 함수 안에 Date object를 생성했는데 Date object는 현재 시점의 날짜와 시간을 알려준다.
시간, 분, 초를 받아왔고 number 타입이 아닌 string으로 바꾸기 위해 String constructor로 감싸주었다.

구한 시간을 clock의 innerText로 넣어주었다.

padStart() function은 내가 가지고 있는 string 보다 더 길게 만들어야 할 때 사용하는 것이다.
시간이 한자리 수 일 때 앞에 0을 붙여주었다.

매 초 getClock을 실행하기 위해 setInterval을 이용해 1초마다 실행되도록 하였다.
