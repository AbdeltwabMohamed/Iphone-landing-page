let allimages= document.querySelectorAll(".options img")
let plac=document.querySelector(".middle img")
allimages.forEach(el=>{
    el.addEventListener("click",(e)=>{
        
        plac.src=e.target.src;
        
        document.body.style.backgroundColor= e.target.dataset.img


    })
})