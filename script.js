function locoMotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locoMotive();

function cursorEffect() {
  const pageContent = document.querySelector(".page1-content");
  const cursor = document.querySelector(".cursor");

  pageContent.addEventListener("mousemove", (posi) => {
    gsap.to(cursor, {
      x: posi.x,
      y: posi.y,
    });
  });

  pageContent.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  pageContent.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();

function page2Animation() {
  gsap.from(".page2-main h2 div span", {
    y: 120,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".container",
      start: "top 80%",
      end: "top 20%",
      // markers: true,
      scrub: 2,
    },
  });
}

page2Animation();

function page4cursorEffect() {
  const pageContent = document.querySelector(".page4");
  const cursor = document.querySelector(".new-cursor");

  pageContent.addEventListener("mousemove", (posi) => {
    console.log(posi);

    gsap.to(cursor, {
      x: posi.x,
      y: posi.y,
    });
  });

  pageContent.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  pageContent.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

page4cursorEffect();

function swiPer() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

swiPer();

function loaderAnimation() {
  let t = gsap.timeline();
  t.from(".loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  t.to(".loader h3", {
    x: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  t.to(".loader", {
    opacity: 0,
  });

  t.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    delay: -0.5,
  });

  t.to(".loader", {
    display: "none",
  });
}

loaderAnimation();
