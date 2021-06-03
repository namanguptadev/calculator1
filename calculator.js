let arr =[2,5,4,6];
function subtraction(arr){
    let total =0;
    arr.forEach((item,index)=>{
        if(index != 0){
            total -=item;
        }else{
            total = item;
        } ;
    });
    console.log(total);
};
subtraction(arr);