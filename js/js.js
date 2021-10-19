// ! animation
AOS.init();
//!

let collMeStart = document.getElementById("collMeStart");
let activBody = document.querySelector("body");
let vh_vw = document.querySelector(".vh_vw");
let collMe = document.querySelector(".collMe");
let close = document.getElementById("close");
let modalBtnPos = document.getElementById("modalBtnPos");
let idBtn3 = document.getElementById("idBtn3");
let perfectSend = document.getElementById("perfectSend");
let perfCloseH3 = document.getElementById("perfCloseH3");
let dispNone = document.getElementsByClassName("dispNone");
let perfectSendOLLBtn = document.getElementsByClassName("btn_js");

// открыть модалку
collMeStart.addEventListener("click", () => {
  Array.from(dispNone).forEach((el) => {
    el.classList.add("activ");
    el.classList.remove("noActiv");
  });
  perfectSend.classList.remove("activ");
  perfectSend.classList.add("noActiv");
  activBody.classList.add("activBody");
  vh_vw.classList.add("activ");
  collMe.classList.add("activFlex");
});

// закрыть модалку
close.addEventListener("click", () => {
  fuClose();
});
let fuClose = () => {
  activBody.classList.remove("activBody");
  vh_vw.classList.remove("activ");
};
let perfectSendShowModal = () => {
  Array.from(dispNone).forEach((el) => {
    el.classList.add("noActiv");
  });
  perfectSend.classList.remove("noActiv");
  perfectSend.classList.add("activ");
  let time = 4;
  perfCloseH3.innerText = 5 + "s";
  let timeInt = setInterval(() => {
    time > 0
      ? ((perfCloseH3.innerText = time + "s"), time--)
      : (fuClose(), clearInterval(timeInt));
  }, 1000);
};

// отправить
modalBtnPos.addEventListener("click", (event) => {
  event.preventDefault();
  perfectSendShowModal();
  console.log("dsdsd");
});
// отправить c с остальных кнопок
for (let j = 0; j < perfectSendOLLBtn.length; j++) {
  perfectSendOLLBtn[j].addEventListener("click", (event) => {
    event.preventDefault();
    activBody.classList.add("activBody");
    vh_vw.classList.add("activ");
    collMe.classList.add("activFlex");
    perfectSendShowModal();
  });
}
