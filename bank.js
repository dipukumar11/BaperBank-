// document.getElementById('btn-deposit').addEventListener('click', function(){
//    const depositInput = document.getElementById('deposit-total')
//    const depositValue =depositInput.value;
//    console.log(depositValue)
   
// const depositBord =document.getElementById('deposit-total')
// const setDeposit = depositBord.innerText;
// depositBord.innerText=depositValue;

// })


document.getElementById('btn-deposit').addEventListener('click', function(){
    const depoInput = document.getElementById('deposit-total')
    const stringDepoInputValue = depoInput.value;
    const depoInputValue=parseFloat(stringDepoInputValue)
    
    
    const depositBord = document.getElementById('deposit-balance');
    const stringsetValue= depositBord.innerText;
    const setValue =parseFloat(stringsetValue);

    const Totalvalue = depoInputValue+setValue;
    depositBord.innerText=Totalvalue;


const totalBalance =document.getElementById('total-Balance')
const BalanceSet = totalBalance.innerText;
const MainBalance =parseFloat(BalanceSet);


const totalMainBalance = MainBalance+depoInputValue;
totalBalance.innerText=totalMainBalance

depoInput.value=' ';










})