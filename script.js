function button(){const cbtn=document.getElementById("submit-btn");
cbtn.addEventListener("click",()=>{
    alert("Thank you for your feedback!");
})}

button();

function grow(){const doo = document.querySelector("#loo");
    
const hii =document.querySelector("#game")
const rev=document.querySelector("#btn");
const open1=document.getElementById("submit-btnn");
open1.addEventListener("click",()=>{
    doo.style.display="none";
    if (window.innerWidth < 600) {
            // Mobile
            hii.style.marginTop = "-480px";
        } 
        else if (window.innerWidth < 1024) {
            // Tablet
            hii.style.marginTop = "-100px";
        } 
        else {
            // Desktop
            hii.style.marginTop = "-80px";
        }
    alert("thankyou you for your review🙏");

    
})

rev.addEventListener("click",()=>{
  doo.style.display="block";
  rev.style.display="none";
  
})}

grow();

// Initialize Lenis

function heat(){
 const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => t,
    smooth: true,
  });
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

}
heat();

function count(){const win=document.querySelectorAll(".count")
win.forEach((btn)=>{
let a=0;

btn.addEventListener("click",()=>{
   
 a++;
btn.innerHTML=`Vote : ${a}`;


})
})}

count();

const no=document.querySelector("#nhi");
const facts=document.querySelectorAll(".fact")



let b=0


no.addEventListener("click",()=>
{
  facts.forEach(f=>f.classList.remove("show"));
  facts[b].classList.add("show");
  b++;
  if(b>=facts.length){
    b=0;
  };
});

const hide=document.querySelectorAll("#gallary img")
const hy=document.querySelectorAll("#gallary h4")

hide.forEach((im,index)=>{

  im.addEventListener("mouseenter",()=>{
    hy[index].classList.add("show")
  })

  im.addEventListener("mouseleave",()=>{
    hy[index].classList.remove("show")
  })
})