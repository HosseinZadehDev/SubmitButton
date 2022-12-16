const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    btn.classList.toggle("active");
    setTimeout(()=>{
        this.classList.remove("active");}, 3000)
})