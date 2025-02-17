function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive();

// Animation for the video
gsap.to("#page>video", {
    scrollTrigger: {
        trigger: "#page>video",
        start: "2% top", // Adjust as needed
        end: "bottom top", // Adjust as needed
        scroller: "#main", // Corrected scroller
        onEnter: () => {
            document.querySelector("#page>video").play(); // Corrected selector
        },
    },
});

// Pin the #page section
gsap.to("#page", {
    scrollTrigger: {
        trigger: "#page",
        start: "top top", // Adjust as needed
        end: "bottom top", // Adjust as needed
        scroller: "#main", // Corrected scroller
        pin: true, // Pin the #page section
    },
});

// Fade out #page-bottom
gsap.to("#page-bottom", {
    scrollTrigger: {
        trigger: "#page-bottom",
        start: "3% top", // Adjust as needed
        end: "bottom top", // Adjust as needed
        scroller: "#main", // Corrected scroller
    },
    opacity: 0, // Fade out
});

var t1 = gsap.timeline({

    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})

t1.to("#page1>h1" , {
    top:`-50%`
})


var t2 = gsap.timeline({

    scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        scrub: 1,
        scroller: `#main`,
        pin: true
    }
})

t2.to("#page2>h1", {
    top: `-50%`
})

document.querySelector('.watch-film').addEventListener('click', function () {
    this.classList.toggle('clicked');
});

var t3 = gsap.timeline({

    scrollTrigger: {
        trigger: `#page4`,
        start: `top top`,
        scrub: 1,
        scroller: `#main`,
        pin: true
    }
})

t3.to("#page4>#center-page4", {
    top: `-50%`
})

var t3 = gsap.timeline({

    scrollTrigger: {
        trigger: `#page6`,
        start: `top top`,
        scrub: 1,
        scroller: `#main`,
        pin: true
    }
})

t3.to("#page6>#center-page6", {
    top: `-50%`
})