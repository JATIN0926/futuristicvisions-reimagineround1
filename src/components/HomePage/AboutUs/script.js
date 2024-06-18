import { gsap } from "gsap";

function cursorEffect() {
var AboutUs = document.querySelector("#aboutUs")
var cursor = document.querySelector("#aboutUs #cursor")
AboutUs.addEventListener("mousemove", function (dets) {
gsap.to(cursor, {
x: dets.x,
y: dets.y
})
})
AboutUs.addEventListener("mouseenter", function () {
gsap.to(cursor, {
scale: 1,
opacity: 1
})
})
AboutUs.addEventListener("mouse leave", function () {
  
gsap.to(cursor, {
    scale:0,
    opacity:0})})
}
cursorEffect()