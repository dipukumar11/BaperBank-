// document.getElementById('btn-submit').addEventListener('click', function(){
//    const withDrowElement = document.getElementById('withDrow-value')
//    const withDrowValue = withDrowElement.value;
//    const setWidthDrowValue = parseFloat(withDrowValue)
//   const withDrow = document.getElementById('withDrow-balcance')
  
//   withDrow.innerText=(setWidthDrowValue)



// })


document.getElementById('btn-submit').addEventListener('click', function(){
    const inputElement = document.getElementById('withDrow-value')
    const inputElementValue = inputElement.value;
    const inputStringValue = parseFloat(inputElementValue)
   
  const prveasInputElemet = document.getElementById('withDrow-balcance')
  const prveasInputElemetStringValue = prveasInputElemet.innerText;
 const prveasInputElemetvalue = parseFloat(prveasInputElemetStringValue)
 
 const withTotalBalance= prveasInputElemetvalue + inputStringValue;
 const setWithDrowBrd= prveasInputElemet.innerText=withTotalBalance;



const withDrowTotalBalce = document.getElementById('total-Balance')
const withDrowTotalBalcevalueString = withDrowTotalBalce.innerText;
const withDrowTotalBalcevalue =parseFloat(withDrowTotalBalcevalueString)
const withDrowValue = withDrowTotalBalcevalue - inputStringValue
const setWidthDrowValue = withDrowTotalBalce.innerText=withDrowValue


 inputElement.value=' ';


 if(setWidthDrowValue < setWithDrowBrd){
    Swal.fire({
        icon: "error",
        title: "দুক্ষিত আপনার কিছু সমস্যা হয়েছে।...",
        text: "অপনার পযাপ্ত টকাকা নেই।",
        footer: 'টাকা রিচার্জ করুন ...!'
      });
      return
 }


})
























