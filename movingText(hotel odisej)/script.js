// for one element only
// let h1text = document.querySelector('.page2 h1')

// let textContent = h1text.textContent;

// let splittedText = textContent.split("");

// let clutter = ""

// splittedText.forEach((elem)=>{
//   clutter += `<span>${elem}</span>`
//   h1text.innerHTML = clutter
// })

var allh1 = document.querySelectorAll("#page2 h1")

allh1.forEach(function(elem){
  var h1Text = elem.textContent;
  let clutter = ""
  let splittedText = h1Text.split("");
  splittedText.forEach((e)=>{
    clutter += `<span>${e}</span>`
  })
  elem.innerHTML = clutter
})

gsap.to('.page2 h1 span',{
  color:"#E3E3C4",
  stagger:0.1,
  duration:0.6,
  scrollTrigger:{
    body:"scroller",
    trigger:'h1 span',
    markers:true,
    start:"top 50%",
    end:"top -10%",
    scrub:2,
  }
})