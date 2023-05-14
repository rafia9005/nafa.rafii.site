const Box = document.querySelector("#box");
const Btn = document.querySelector("#btn");
const BtnClose = document.querySelector("#btn-cls");

Btn.onclick = () => {
  Box.classList.toggle("active");
};
BtnClose.onclick = () => {
  Box.classList.remove("active");
};