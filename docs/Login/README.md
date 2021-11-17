# Login

##### username 유효성 검사

input의 유효성 검사를 작동시키기 위해선 form 안에서 작동되어야 한다.
form이 submit되는 경우 새로고침이 된다. 이를 막기 위해 preventDefault()를 실행하였다.
preventDefault는 어떤 event의 기본동작이 발생되지 않도록 막아준다.

()을 더하면 브라우저가 보자마자 자동으로 함수를 실행한다. 

```js
loginForm.addEventListener("submit", onLoginSubmit());
```
()를 추가하면 해당 함수는 한번만 실행하고 종료된다.
```js
loginForm.addEventListener("submit", onLoginSubmit);
```
함수의 이름만 작성한다면 submit이 될 때마다 실행 가능하다. 실행 뿐 아니라 해당 event에 대한 정보는 onLoginSubmit을 위한 EventListener 함수의 첫번 째 인자로 주어지기 때문에 onLoginSubmit 함수에 매개변수를 만들어준다.