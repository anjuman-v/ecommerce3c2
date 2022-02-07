let main_div = document.getElementById("container");
   
let shopdata = JSON.parse(localStorage.getItem("prodData")) || [];
let show = document.getElementById("show")
            show.textContent = shopdata.length;
display(shopdata)

function display(shopdata){
   
    shopdata.map(function (elem,index){
    

    let div1 = document.createElement("div");

    let image = document.createElement("img");

    image.src = elem.image;

    let p = document.createElement("p");
    p.innerText = elem.price;
    p.setAttribute("id", "price")
    p.style.marginLeft="30px"

    let btn = document.createElement("button")
    btn.setAttribute("id", "addtocart")
    btn.addEventListener("click",function (){
        remove()
    })
    btn.textContent= "remove";
    div1.append(image,btn,p)
    main_div.append(div1)

});
function remove(index){
    shopdata.splice(index,1)
    localStorage.setItem("prodData", JSON.stringify(shopdata))
   
}
}