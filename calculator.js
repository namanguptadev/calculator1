let arr =[2,5,4,6];
function addition(arr){
    let total =0;
    arr.forEach((item)=>{
        total +=item;
    });
    console.log(total);
};
addition(arr);