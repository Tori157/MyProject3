// document.getElementById - Single Node
// document.getElementsByClassName - HTMLCollection
// document.getElementsByTagName - HTMLCollection
// document.querySelector - First match Single Node
// document.querySelectorAll -All match (NodeList Collection)
// children - get child element node types (HTMLCollection)
// childNodes - get child node (every node type) (NodeList)

//Array Like - NodeList implement forEach
//Array Like - HTMLCollection does not implement forEach, using Array.from(HTMLColloction) when use forEach

// 1.query <div><p>...</p></div>
const divElementV1 = document.getElementsByTagName("div");
console.log(divElementV1);
console.log(divElementV1[1]);

const divV1Children = divElementV1[1].children;
console.log(divV1Children);

Array.from(divV1Children).forEach((element) => {
  console.log(element);
});

const divElementV2 = document.querySelectorAll("div");
console.log(divElementV2);

Array.from(divElementV2[1].children).forEach((element) => {
  console.log(element);
});

const divElementV3 = document.querySelector("div.faculty");
// . class name
console.log(divElementV3);

const divElementV4 = document.querySelector("div#div-faculty");
// # id
console.log(divElementV3);

Array.from(divElementV4.children).forEach((element) => {
  console.log(element);
});

// 2.query <p> under

const pElement = document.querySelectorAll("div.faculty>p");
console.log(pElement);

pElement.forEach((element) => {
  console.log(element);
});

const courseElement = document.getElementById("courses");
console.log(courseElement);

const lecturerElement = document.getElementsByClassName("lecturer");
console.log(lecturerElement);

// 5.
const buttleElement = document.getElementsByTagName("button");
console.log(buttleElement);

// 6.
const couresliElemnet = document.querySelectorAll("ul#courses>li");
console.log(couresliElemnet);

// couresliElemnet.forEach((element) => {
//   console.log(element);
// });

// const couresliElemnet = document.querySelectorAll("ul#courses>li");
// console.log(couresliElemnet);

// Array.from(couresliElemnet).forEach((element) => {
//   console.log(element);
// });

// 7.
// const firstliElement = document.querySelector("ul>li");
// console.log(firstliElement);

console.log(couresliElemnet[0]);
