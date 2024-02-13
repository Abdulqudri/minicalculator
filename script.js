const displayField = document.querySelector('input[type="text"]')

const buttons = document.querySelectorAll('input[type="button"]')

const display = e => {

  switch(e.target.value){
    case "AC":
      displayField.value ="";
      break;
    case "DE":
      displayField.value = displayField.value.toString().slice(0,-1);
      break;
    case "=":
      if(displayField.value == ""){
        displayField.value=0
      }else{
        displayField.value = eval(displayField.value)
      }
      break;
    default:
      displayField.value += e.target.value
  }
}

buttons.forEach(button => {
  button.addEventListener('click', display)

})



