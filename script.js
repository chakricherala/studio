var timeout;

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
});

// let circle = document.querySelector("#circle")

// window.addEventListener("mousemove", function(dets){
//     circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
// })

// let hover = document.querySelectorAll(".sec")

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#circle").style.transform = `translate(${dets.clientX - 15}px, ${dets.clientY - 15}px) scale(1, 1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circle").style.transform = `translate(${dets.clientX - 15}px, ${dets.clientY - 15}px) scale(${xscale}, ${yscale})`;
    });
}

circleChaptaKaro();
circleMouseFollower();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".sec").forEach(function (sec) {
    var rotate = 0;
    var diffrot = 0;

    sec.addEventListener("mouseleave", function () {
        gsap.to(sec.querySelector(".sec img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    sec.addEventListener("mousemove", function (dets) {
        // Idhar changes
        var diff = dets.clientY - sec.getBoundingClientRect().top - sec.querySelector("img").clientHeight / 2;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(sec.querySelector(".sec img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            // Idhar changes
            left: dets.clientX - sec.querySelector("img").clientWidth / 2,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});

// let tl = gsap.timeline()

gsap.to(".load", {
    y: "-100vh",
    duration: 1,
    delay: 0.5,
});

gsap.from(".navbar a, .navbar button", {
    y: -50,
    opacity: 0,
    delay: 1.5,
});

gsap.from("#hero h1", {
    y: 20,
    opacity: 0,
    stagger: 0.5,
    delay: 1.5,
});

gsap.from("#hero h5", {
    y: -10,
    opacity: 0,
    delay: 1.5,
});

gsap.from("#hero .a h6", {
    y: -10,
    opacity: 0,
    delay: 1.5,
});
