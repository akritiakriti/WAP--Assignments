//ES6+ Import and modules
import{
    add as funAdd, sub as funSub,
    mul as funMul,
    div as funDiv
} from './calculator.js'
/*
the functions are imported ad funAdd.. bc same name is used in the dom hence. To remove the conflict
*/

// Dom selection by id
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operator = document.getElementById('symbol')

const add = document.getElementById('add_btn')
const sub = document.getElementById('sub_btn')
const mul = document.getElementById('mul_btn')
const div = document.getElementById('div_btn')

const resultBtn= document.getElementById('result_btn')
const display_res= document.getElementById('result')

// operatoe selection
add.addEventListener('click',function(){
    operator.value = '+'
})
sub.addEventListener('click',function(){
    operator.value = '-'
})
mul.addEventListener('click',function(){
    operator.value = '*'
})
div.addEventListener('click',function(){
    operator.value = '/'
})


//Calculate result
resultBtn.addEventListener('click',function(){
    let x= parseInt(num1.value) 
    let y= parseInt(num2.value)

    if(!x && x!== 0)
    {
        alert("Enter the number please!")
        return
    }
    /*
    !x is true for empty, null, undefined, AND 0.
    But 0 is a valid number, so you don’t want the alert for 0.
    Hence,Adding x !== 0 makes the condition false for 0, so the alert won’t show
    and only shows when input is truly empty or missing.
    -------Super simplified analogy------------
    !x → “is empty?”
    x !== 0 → “but not zero 
    */

    if ( !y && y!=0)
    {
        alert("Enter the number Please!")
        return
    }

    if(!operator.value)
    {
        alert("Please select the operation.")
        return
    }

    //Perform calc.
    switch(operator.value)
    {
        case '+' :
             display_res.value = funAdd(x,y)
             break;
    
        case '-' : 
            display_res.value = funSub(x,y)
            break;
    
        case '*' :
            display_res.value = funMul(x,y)
            break;
        case '/' : 
            display_res.value = funDiv(x,y)
            break;
        default:
            alert("invalid operation!")
    }
})

