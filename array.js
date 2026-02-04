let arr = [1,2,3,4,5,6,7,8,9];
var i = 0 ;
let id = setInterval(function(){
    if(i<arr.length){
        console.log(arr[i]);
        i++;
    }
    else{
        clearInterval(id);
    }
    
},3000)
