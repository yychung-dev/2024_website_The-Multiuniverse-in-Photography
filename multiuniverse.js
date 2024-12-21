"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modalContent = document.querySelector(".modal-content");

// 函數(打開視窗)
const openModal = function (content) {
  modalContent.textContent = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// 函數(關閉視窗)
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 打開視窗
btnsOpenModal.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const content = btn.getAttribute("data-content");
    openModal(content);
  });
});

// 關閉視窗
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (s) {
  if (s.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// RWD_漢堡選單
const hamburger = document.querySelector(".hamburger");
const normalMenu = document.querySelector(".normalmenu");

// 點擊漢堡圖示時，四橫槓圖示與叉叉圖示的轉換、menu滑出或隱藏
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  normalMenu.classList.toggle("active");
});

//點擊menu任一項目時，叉叉圖示變為四橫槓圖示、menu隱藏、打開modal。
btnsOpenModal.forEach((y) =>
  y.addEventListener("click", () => {
    hamburger.classList.remove("active");
    normalMenu.classList.remove("active");
    const content = n.getAttribute("data-content");
    openModal(content);
  })
);
