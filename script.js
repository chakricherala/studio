gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

let circle = document.querySelector("#circle")

window.addEventListener("mousemove", function(dets){
    // console.log(dets.clientX, dets.clientY)
    circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    // gsap.to("circle",{
    //     x: "dets.clientX",
    //     y: "dets.clientY",
    //     duration: 2,
    //     ease: Expo
    // })
})




// let tl = gsap.timeline()

gsap.to(".load",{
    y:"-100vh",
    duration: 1,
    delay:0.5
})

gsap.from(".navbar a, .navbar button",{
    y: -50,
    opacity: 0,
    delay: 1.5
})

gsap.from("#hero h1",{
    y:20,
    opacity: 0,
    stagger: 0.5,
    delay: 1.5
})

gsap.from("#hero h5",{
    y: -10,
    opacity: 0,
    delay: 1.5
})

gsap.from("#hero .a h6",{
    y: -10,
    opacity: 0,
    delay: 1.5
})



