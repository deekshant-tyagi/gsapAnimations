var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var image = document.querySelector('#main img')


main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
    })
})

image.addEventListener('mouseenter',function(){
    cursor.innerHTML = 'view more'
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"aqua"
    })
})
image.addEventListener('mouseleave',function(){
    cursor.innerHTML = ''
    gsap.to(cursor,{
        backgroundColor:"white",
        scale:1,
    })
})
