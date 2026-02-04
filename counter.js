function createCounter(){
    let count = 0 ; 
    return ()=>{
        count++;
        console.log("Counter value is " , count)
    }
}
let counter = createCounter();
counter(); //1
counter();// 2
