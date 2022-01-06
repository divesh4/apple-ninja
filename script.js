let bird = document.getElementsByClassName("bird")[0];
let left = document.getElementsByClassName("divleft")[0];
let right = document.getElementsByClassName("divright")[0];
let star = document.getElementsByClassName("star")[0];
let shoot = document.getElementsByClassName("divup")[0];
let mydiv = document.getElementsByTagName("div")[6];
let head = document.getElementsByTagName("h2")[0];
let score = document.getElementsByTagName("h3")[0];
let t = 0;
let angle = 0;
let a =  440;
let count = 0;
left.addEventListener("click",()=>{
            t= t+30;
             bird.style.left =155 + t + "px";
            star.style.left = 162 + t + "px";
            push();
       
});

right.addEventListener("click",()=>{
    t = t-30;
 
        bird.style.left =155 + t + "px";
                star.style.left = 162 + t + "px";
                
        
                    
        push();

});


// setInterval(() => {
//     let r = Math.floor(Math.random()*330);
//     let t = document.createElement("div");
//     star.style.left = r+"px";
//     t.className = "star";
//     t.style.left=r +"px";
// document.body.appendChild(t);
// }, 10000);




shoot.addEventListener("click",()=>{
    count = count +1;
star.classList.add("shoot");
setTimeout(() => {
    star.classList.remove("shoot");
}, 500);
});



function push(){
if(t+155<=5){
    t+=60;
}
if(t+155>=305)
{
    t-=60;
}
}
let x,y,z;

//if touched then point = 1
let point =0;
let vanish = 100;
var touched = setInterval(() => {
  starTop=  parseInt( window.getComputedStyle(star).getPropertyValue("top"));
   starLeft= parseInt(window.getComputedStyle(star).getPropertyValue("left"));
   z = parseInt(window.getComputedStyle(mydiv).getPropertyValue("left"));
    
        if(starTop<=160&&starTop>=90&&
            z<starLeft&&z+60>starLeft
        ){
            vanish = vanish-2;
            point = point + 1;
            score.innerHTML="score : "+point;
            mydiv.style.opacity = vanish + "%";
                }
    if(vanish <=0){
        head.style.opacity = "100%";
    }
}, 10);

//if point = 6 in 15s you win
        
  

