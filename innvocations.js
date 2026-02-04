function tracker(){
    let numInvoc = 0 ;
    let numInstances=0;

    function f(){
        numInvoc++;
        if(new.target)numInstances++;
    }
    f.getDetails = function(){
        return {"Invoked": numInvoc , "Instances" :numInstances};
        }
        return f;
}

let x= tracker();
x();
x();
new x();

console.log(x.getDetails());