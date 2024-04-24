console.log('Hello World From HTML')

 let arrTop4 =['Mu', 'ManCity','Liverpool', 'Cheal']

 let i = 0

 while(i < arrTop4.length){
    if(arrTop4[i].length === 7){
        console.log('Top: ', i + 1, arrTop4[i]);
    }else if(arrTop4[i].length === 2){
        console.log('Top: ', i + 1, arrTop4[i]);
    }else{
        console.log('Top: ', i + 1, arrTop4[i]);
    }
    i++;
 }