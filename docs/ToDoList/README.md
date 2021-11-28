# ToDoList

#### 브라우저에 저장하기

localStorage를 이용한다.

toDo 저장 > toDo 불러오기

saveToDos 함수는 toDos array를 localStorage에 저장한다.

```js
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
```

#### JSON.stringify

Javascript object나 array 등 어떤 코드건 간에 string으로 바꿔준다.

#### JSON.parse

parse 메소드는 string 객체를 json 객체로 변환시켜준다.

#### forEach

array의 각 item에 대해 function을 실행한다.

각각의 item에 대해 sayHello를 실행시킨다. (Arrow function으로 변경해도 기능이 똑같다.)

```js
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(sayHello);
}
```


#### delete 후 local storage 업데이트

newTodoObj 의 id로 각각의 li item을 구별한다.

