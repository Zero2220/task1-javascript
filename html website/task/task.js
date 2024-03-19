let numList1 = [1,2,3,4,5];

function findSum(numList){
let sum1=0;

   for(let i=0;i<numList.length;i++){
     
        sum1 += numList[i];
   }
   return sum1;

}



let numList2 = findSum(numList1)

console.log(numList2);

function findBig(numList3){
let big=0
    for(let i=0;i<numList3.length;i++){
     
        if(big<numList3[i]){
            big=numList3[i];
        }

    }
    return big
}

console.log(findBig([1,2,3,13,4,5]))

function digitSum(eded){
    var ededString = eded.toString();
    var cem = 0;
    
    for (var i = 0; i < ededString.length; i++) {
        cem += parseInt(ededString[i], 10); 
    }

    return cem;
}

console.log(digitSum(1239));