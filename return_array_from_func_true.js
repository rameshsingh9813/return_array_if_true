//returning all tho array after function being true
function dropElements(arr, func) {
  let nvar=[];//defining new variable
  let k=0;
  for(let j in arr){ //looping through out array
     k+=1         // update k by 1
    if(func(arr[j])){ //check true condition of array
      break;
     }
    }
    if(k==arr.length){
    return nvar;
    }
    else{
       for(let i=k-1;i<arr.length;i++){
        nvar.push(arr[i])   //finally appending all those array  which satisfiy condition
        }
    }
       return nvar;
}

console.log(dropElements([3, 9, 00900, 4,2,3], function(n) {return n > 90;}));