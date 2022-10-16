const buttons = document.querySelectorAll('.btn');
const input = document.getElementById('inputText');
const equal =  document.querySelector('.equal');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del')

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        input.value += e.target.id;
    })
})
equal.addEventListener('click', (e) => {
    try{
        input.value = eval(input.value)
    }
    catch(err){
        alert('please enter the valid character')
    }
})
clear.addEventListener('click',(e) => {
    input.value = ''
})
del.addEventListener('click', (e) => {
    input.value = input.value.slice(0,-1)
})