const cartArr = [];
let size;
console.log(size);
function listToDisplay(cartProduct){
    console.log(cartProduct)
    const tableBody = document.getElementById("add-player");
    tableBody.innerHTML = "";
    
    size = cartProduct.length;
    if(size>5){
        alert('You can not add more than 5 players');
    }else{    
    for(i=0;i<size;i++){
        const name = cartArr[i];
        // console.log(name)
        const tr = document.createElement("tr");
        tr.innerHTML =`
        <th>${i+1}</th>
        <td>${name}</td>
        `;       
        tableBody.appendChild(tr);
     }           
    }
    
}







function addToCart(element){
    // console.log(element.parentNode.children[1].innerText);
    // productName
    const playerName = element.parentNode.children[1].innerText;
// produict cost
    const playerCost = element.parentNode.children[2].children[0].innerText;
    const playerCostNumber = parseInt(playerCost)
    // console.log(typeof(playerCostNumber))
    // cartArr.push(playerName)
    const playerTotalValue = cartArr.length;
    // return playerTotalValue;


    // 222222
        // const playerObj ={
        //     playerName : playerName
        // }


        const pushing =  cartArr.push(playerName)
// 11111111111
    // bad dilam
    //    const pushing =  cartArr.push(playerObj)
        // if (cartArr.length === 5){
        //     pushing break;
        // }
        


    document.getElementById('total-added-product').innerText = playerTotalValue +1 ;


    console.log(playerTotalValue)
    
    // hide button
    element.style.display = 'none'
    // return playerTotalValue;
    // next calling fucntion
    listToDisplay(cartArr)
}
    // done from input tk per player
document.getElementById('btn-per-player').addEventListener('click',function(){
    const perPlayer = document.getElementById('per-player')
    const price = perPlayer.value;
    console.log(price);
    // from 69
    console.log("size from funcition", size);
    const amountFirst = price * size;
    console.log(amountFirst)
    
    const playerExpensesCall =document.getElementById('player-expenses')
    playerExpensesCall.innerText= amountFirst;

    const amountFirstNumber = parseInt(amountFirst);
    // 6666666666
    // last(amountFirstNumber)
    // return amountFirstNumber;
})
// manager expenses

document.getElementById('btn-manager-coach').addEventListener('click',function(){
    const managerExpensesCall = document.getElementById('manager-cost')
    const managerAmount = managerExpensesCall.value;
    const managerAmountNumber = parseInt(managerAmount)
    const coachExpensesCall = document.getElementById('coach-cost')
    
    console.log(managerAmount)
    const coachAmount = coachExpensesCall.value;
    const coachAmountNumber = parseInt(coachAmount)
    const sum = managerAmountNumber + coachAmountNumber;
    console.log(sum)


    const mCCost =document.getElementById('m-c-expenses')

    mCCost.innerText = sum;

    // return sum;
    // console.log(coachAmount)
})

// function totalCost(total){
    // const totalAmount = sum + mountFirst;
    // console.log(totalAmount)
// }
// function last(amountFirstNumber){
document.getElementById('calculate-total').addEventListener('click',function(){
    const playerTotalCostString = document.getElementById('player-expenses').innerText;
    const playerTotalCostNumber = parseInt(playerTotalCostString);
    const mCTotalCostString = document.getElementById('m-c-expenses').innerText;
    const mCTotalCostNumber = parseInt(mCTotalCostString)
    const totalAmount = mCTotalCostNumber + playerTotalCostNumber;
    // total
    const totalValue =document.getElementById('total-final');

    totalValue.innerText = totalAmount;
})
