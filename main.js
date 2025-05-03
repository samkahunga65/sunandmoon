import { createDivWithId } from "./utils.js";

class World {
  static app_elem = document.querySelector("#app");
  static sun_elem = createDivWithId("sun");
  static moon_elem = createDivWithId("moon");
  static toffset = 200;
  static spinT = 2;
  spinT = 2;

  static play() {
    const pageWidth = this.app_elem.getBoundingClientRect().width;
    const pageLength = this.app_elem.getBoundingClientRect().height;

    for (let i = 1; i < 13; i++) {
      setTimeout(
        () => {
          let elem1 = createDivWithId("zodiak_" + i);
          elem1.className = "zodiak";
          elem1.innerText = i;
          this.app_elem.appendChild(elem1);
          gsap.to(elem1, {
            x: pageWidth / 2 - this.toffset,
            y: pageLength / 2 - this.toffset,
          });
          gsap.set(elem1, {
            transformOrigin: "" + this.toffset + "px " + this.toffset + "px",
          });
          gsap.to(elem1, {
            rotate: (360 / 12) * i + 45,
            duration: this.spinT / i,
            // repeat: 2, // Repeat indefinitely
            ease: "linear",
          });
        },
        83 * this.spinT * i,
      );
    }
    setTimeout(() => {}, this.spinT * 1000);

    this.sun_elem.className = "zodiak";
    this.moon_elem.className = "zodiak";
    this.app_elem.appendChild(this.sun_elem);
    this.app_elem.appendChild(this.moon_elem);

    gsap.to(this.sun_elem, {
      x: pageWidth / 2 - this.toffset,
      y: pageLength / 2 - this.toffset,
    });
    gsap.to(this.moon_elem, {
      x: pageWidth / 2 - this.toffset,
      y: pageLength / 2 - this.toffset,
    });
    gsap.set(this.sun_elem, {
      transformOrigin: "" + this.toffset + "px " + this.toffset + "px",
    });
    gsap.to(this.sun_elem, {
      rotate: 360,
      duration: 108,
      repeat: -1, // Repeat indefinitely
      ease: "linear",
    });
    gsap.set(this.moon_elem, {
      transformOrigin: "" + this.toffset + "px " + this.toffset + "px",
    });
    gsap.to(this.moon_elem, {
      rotate: 360,
      duration: 9,
      repeat: -1, // Repeat indefinitely
      ease: "linear",
    });
  }
}

World.play();
