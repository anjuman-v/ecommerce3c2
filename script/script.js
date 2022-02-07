

const allFood = document.querySelectorAll('.food');
allFood.forEach(food => {
    food.querySelector('.food-total').textContent = '$ 0.00';
});

allFood.forEach((food, index) => {
    food.addEventListener('click', (event) => {
        if(event.target.classList.contains('order-dec') || event.target.parentElement.classList.contains('order-dec')){
            changeOrder(food, 'dec');
        }

        if(event.target.classList.contains('order-inc') || event.target.parentElement.classList.contains('order-inc')){
            changeOrder(food, 'inc');
        }
    });
});

function changeOrder(food, changeType){
    let foodQuan = parseInt(food.querySelector('.order-val').textContent);
    let foodPrice = parseFloat(food.querySelector('.food-rate').textContent.replace(/[^\d.-]/g, '')); // replacing all non-digit characters

    if(changeType === 'dec' && foodQuan > 0) foodQuan--;
    if(changeType === 'inc') foodQuan++;

    food.querySelector('.order-val').textContent = foodQuan;
    food.querySelector('.food-total').textContent = `$ ${(foodQuan * foodPrice).toFixed(2)}`;
}