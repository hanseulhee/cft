# Login

#### username 유효성 검사

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


#### username 기억하기

[local storage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
[setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

```js
localStorage.setItem("Key(이름)", 값);
```

유저정보가 local storage에 없다면 local storage는 null을 반환한다.
```js
const savedUsername = localStorage.getItem(USERNAME_KEY);
```

#### 코드 정리

local storage 확인 후 if문에 따라 savedUsername이 null 이라면 loginForm으로부터 HIDDEN_CLASSNAME를 제거한다.
loginForm에 addEventListener을 더하고 submit을 기다린다.  submit event가 발생하면 onLoginSubmit함수가 실행된다.

null이 아니라면 paintGreetings 함수를 실행한다. paintGreetings 함수가 local storage에 저장된 값을 인자로 받는다.


**onLoginSubmit 함수**

event의 기본 동작을 막아준다. (페이지 새로고침)

form을 숨긴다.

loginInput.value를 username이라는 변수로 저장한다.

setItem을 이용해 username 값을 username이라는 key와 함께 local storage에 저장한다.

paintGreetings함수를 실행한다. paintGreetings함수는 하나의 인자를 가지고 있는데 이는 user가 form안에 있는 input에 입력한 유저명을 받고 있다.


**paintGreetings 함수**

h1 요소 안에 텍스트를 추가한다.

h1 요소로부터 "hidden"이라는 클래스 명을 제거한다.

