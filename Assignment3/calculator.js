
/*Normal js function
export function add(x,y){
    return x+y
}*/

export  let add = (x,y) => x+y //No curly braces
export let sub = (x,y) => x-y
export let mul = (x,y) => x*y
export let div = (x,y) => { ///curly braces bc multiple statements
    if(y===0)
        return "can't divide by 0."
    else
        return x/y
}