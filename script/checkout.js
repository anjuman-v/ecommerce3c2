document.querySelector("#myForm").addEventListener("submit", formsubmit)

function formsubmit(){
    let add = document.getElementById("add").value;
    let shopdata = JSON.parse(localStorage.getItem("addData")) || [];

    let obj = {
       address : add,
    }
    shopdata.push(obj);
    localStorage.setItem("addData", JSON.stringify(shopdata))
  setTimeout(alert("Your order is accepted"),10000)
  setTimeout(alert(" Your order is being cooked "),30000)
  setTimeout(alert("Your order is ready"),80000)
  setTimeout(alert("Order out for delivery"),100000)
  setTimeout(alert("Order delivered"),120000)

}