let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

let main_div = document.getElementById("container");

getData(url)
async function getData(url){

    let res = await fetch(url);

    let data = await res.json();

    // console.log(data.meals[0].idMeal)
    console.log(data)

    showData(data)

}

function showData(data){

data.meals.map(function (elem){
    

    let div1 = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("id", "images")
    image.src = elem.strMealThumb;

    let p = document.createElement("p");

    function  getRandom(max){
        return Math.floor(Math.random()*(max+100))
    }

    p.textContent = "price : " + getRandom(100)
    p.setAttribute("id", "price")
    p.style.marginLeft="30px"

    let btn = document.createElement("button")
    btn.setAttribute("id", "addtocart")
    btn.setAttribute("onclick", "addItem()")
    btn.textContent= "Add to cart";


        


    div1.append(image,btn,p)

    main_div.append(div1)

});


}

// document.querySelector("#addtocart").addEventListener("click",addItem)

let shopdata = JSON.parse(localStorage.getItem("prodData")) || [];
        let show = document.getElementById("show")
        show.textContent = shopdata.length;
   function addItem()
    {

       let images = document.getElementById("images").src;
       let price = document.getElementById("price").textContent;
        let shopdata = JSON.parse(localStorage.getItem("prodData")) || [];
        let show = document.getElementById("show")
        show.textContent = shopdata.length+1;
        let obj = {
            image : images,
            price : price,
        }
        shopdata.push(obj);
        localStorage.setItem("prodData", JSON.stringify(shopdata))
    }
