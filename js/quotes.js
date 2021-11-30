const quotes = [
  {
    quote:
      "실패하는 사람은 거친 파도를 보고 성공하는 사람은 그 너머의 대륙을 본다.",
    author: "문상진/서범석",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "행복은 습관이다, 그것을 몸에 지니라.",
    author: "허버드",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라. ",
    author: "제임스 딘",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
