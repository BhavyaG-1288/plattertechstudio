document.addEventListener("DocumentLoaded", function(){
    document.querySelector(".buy-btn").addEventListener("click",function(){
        alert("Redirecting to purchase page...");
    });
});
document.addEventListener("DOMContentLoaded", function(){
    const categoryLinks =document.querySelectorAll(".category-link");
    const products =document.querySelectorAll(".product");


    categoryLinks.forEach(link=>{
        link.addEventListener("click", function(event){
            event.preventDefault();

            const category =this.getAttribute("data-category");
            console.log("clicked category:", category);

            products.forEach(product =>{
                if(product.getAttribute("data-category")=== category){
                    product.style.display ="block";
                }else{
                    product.style.display ="none";

                }

            });
        });
    });
});