let arr = ["eat", "tea", "tan", "ate", "nat", "bat"] ;

let mp = new Map();

for(let x of arr){
    let sortedX = x.split("").sort().join("");
    if(mp.has(sortedX)){
        let a = mp.get(sortedX);
        a.push(x);    
    }
    else{
        mp.set(sortedX,[x]);
        
    }
}
for (let [key,value] of mp){
    console.log(key,value);
}
