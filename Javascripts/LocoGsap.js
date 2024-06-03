function alpha(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
    }
    alpha()
    
    
    function introani(){
      gsap.from(".nav", {
        y: -100,
        opacity:1,
        duration: 2,
        ease: "back.out",
      
      })
      gsap.from(".page1 h3", {
        y: 100,
        opacity:1,
        duration: 2,
        ease: "back.out"
      
      })
      gsap.from(".page1", {
        y: 300,
        opacity:1,
        duration: 1.5,
        ease: "back.out"
      })
    
      gsap.to(".page1 img", {
        width: "20vw",
        duration: 1,
        ease: "back.out"
      })
    
    }
    introani()
    
    var tl = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".page1 img",
          scroller:".main",
          start: "top 30%",
          end: "top: 0%",
          scrub: 3,
      }
    })
    var tl2 = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".page2",
          scroller:".main",
          start: "top: 30%",
          end: "top: 20%",
          scrub: 3,
      }
    })
    var tl3 = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".page3",
          scroller:".main",
          start: "top: 60%",
          end: "top: 20%",
          scrub: 3,
      }
    })
    
    var tl4 = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".scroll",
          scroller:".main",
          start: "top: 70%",
          end: "top: 20%",
          scrub: 3,
      }
    })
    
    
    function timeline1(){
      tl.to(".page1 h3", {
        duration: 2,
        scale: 3,
         y:-200,
        opacity: 0.7,
        ease: "back.out",
      },"anime")
      
      tl.to(".page1 img", {
        y:-100,
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.5,
        yoyo: true,
      
      },"anime")
      
      tl.to(".nav", {
        y: -100,
        duration: 2,
        opacity: 0.7,
        ease: "back.out"
      },"anime")
      
    }
    
    function timeline2(){
      tl2.to(".main", {
        backgroundColor: "#0F0D0D",
        color: "white",
        duration: 1,
      },"anime")
      
      tl2.from(".right video", {
        x: 400,
        duration: 2,
        opacity: 0.7,
      },"anime")
      
      tl2.from(".page2 h3", {
        x: -400,
        duration: 2,
        opacity: 0.7,
      },"anime")
      
      tl2.from(".right h1", {
        x: 400,
        duration: 2,
        opacity: 0.7,
      },"anime")
    }
    
    function timeline3() {
      tl3.from(".right3 h1", {
        y: 200,
        duration: 2,
        opacity: 0.7,
      },"anime")
    }
    
    function timeline4(){
    
      tl4.from(".footer", {
        y: 150,
        duration: 1,
        opacity: 0.7,
      },"anime")
    
    
    }
    
    function marquee(){
      window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0) {
          gsap.to(".marquee", {
            transform:'translateX(-200%)',
            duration: 4,
            repeat:"-1",
            ease:"none"
          })
          
          gsap.to(".marquee img", {
            rotate: 180,
            duration: 2,
            ease:"none"
          })
        }
    
        else{
          gsap.to(".marquee", {
            transform:'translateX(0%)',
            duration: 4,
            repeat:"-1",
            ease:"none"
          })
     
        gsap.to(".marquee img", {
          rotate: 0,
          duration: 2,
          ease:"none"
        })
        }
    
    })
    
    }
    marquee()
    
    
    function responsiveGsap(){
      if(screen.width > 1024){
    
        timeline1()
        timeline2()
        timeline3()
        timeline4()
      }
      
      else{
        console.log("no");
      }
      
    }
    responsiveGsap()
    
    
    var tl2resmobile = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".page1",
          scroller:".main",
          start: "top: 0%",
          end: "top: 20%",
          scrub: 3,
      }
    })
    
    var tl3resmobile = gsap.timeline({
        
      scrollTrigger: {
          trigger: ".page3",
          scroller:".main",
          start: "top: 25%",
          end: "top: 20%",
          scrub: 3,
      }
    })
    
    function resmobile(){
    
      if(screen.width < 700) {
    
        gsap.to(".page1 img", {
          width: "65vw",
          duration: 1,
          ease: "back.out"
        })
    
        
      tl2resmobile.to(".main", {
        backgroundColor: "#0F0D0D",
        color: "white",
        duration: 1,
      },"anime")
    
    
        
      tl2resmobile.from(".page2 h3", {
        x: -400,
        duration: 2,
        opacity: 0.7,
      },"anime")
      
      tl2resmobile.from(".right h1", {
        x: 400,
        duration: 2,
        opacity: 0.7,
      },"anime")
    
      tl2resmobile.from(".right3 h1", {
        y: 200,
        duration: 2,
        opacity: 0.7,
      },"anime")
    
      tl2resmobile.from(".left3 img", {
        y: 200,
        duration: 2,
        opacity: 0.7,
      },"anime")
    
      tl3resmobile.from(".footer", {
        y: 150,
        duration: 1,
        opacity: 0.7,
      },"anime")
    
    }
    else{
      console.log("no");
    }
    
    }
    
    resmobile()
    
    