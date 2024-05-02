gsap.to("#box1", {
    x: 300,
    y:200,
    duration: 1,
    delay: 1,
    opacity: 1,
    borderRadius: "100%",
    scale: 1.25,
    //repeat:3, //here we can add any value for the repeatation of the movement 
    repeat: -1, // value -1 makes the movement repeatation infinite
    yoyo: true,
    rotation: 360
})

// #staggers 

gsap.from("h1", {
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:0.5,
    repeat: -5,
    yoyo:true
})

var tl = gsap.timeline()

tl.to("#timeline1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#timeline2",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#timeline3",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})