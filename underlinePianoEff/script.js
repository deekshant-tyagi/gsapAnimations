var path = `M 10 100 Q 250 100 490 100`
var finalPath = `M 10 100 Q 250 100 490 100`

var string = document.querySelector('#string');
console.log(string)

string.addEventListener('mousemove',function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    gsap.to('svg path',{
        attr:{d: path},
        duration:0.5,
        ease: 'power3.out',
    })
})

string.addEventListener('mouseleave',function(){
    gsap.to('svg path',{
        attr:{d: finalPath},
        duration:0.5,
        ease: 'elastic.out(1,0.2)'
    })
})