
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const number = document.querySelector('.number')

let value = parseInt(number.textContent);

increase.addEventListener(('click'),()=>{

    if(value>=-1){
        number.classList.remove('red')
    }
    value=+value+1;
    number.textContent=value
})

decrease.addEventListener('click', () => {
  value = value - 1
  if(value<0){
    number.classList.add('red');
  }
  number.textContent = value

})
reset.addEventListener('click', () => {
    value =0
  number.textContent=value
})
