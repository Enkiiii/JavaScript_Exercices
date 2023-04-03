function findUnique2(arr){
    return arr.filter((value,index) => arr.indexOf(value) == index);
    }
    
    console.log(findUnique2([1,2,3,4,4,5]));
    console.log(findUnique2([1, -2, -2, 3, 4, -5, -6, -5]));