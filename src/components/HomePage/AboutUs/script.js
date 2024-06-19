import { gsap } from "gsap";

export default function cursorEffect() {
  var AboutUs = document.querySelector("#aboutUs");
  var cursor = document.querySelector("#aboutUs #cursor");

  gsap.set(cursor, { opacity: 0, scale: 0 });

  AboutUs.addEventListener("mousemove", function (event) {
    var rect = AboutUs.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      ease: "power2.out",
    });

    if (!document.body.classList.contains("hide-cursor")) {
      document.body.classList.add("hide-cursor");
    }
  });

  AboutUs.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  AboutUs.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });

    if (document.body.classList.contains("hide-cursor")) {
      document.body.classList.remove("hide-cursor");
    }
  });
}
