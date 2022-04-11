// switch to if

let browser = prompt('which browser is this')
console.log(browser)
if (browser=='Edge') {
    alert('You have got the Edge !')
    
}
else if(browser=='Chrome'||browser=='Firefox'||browser=='Safari'||browser=='Opera'){
    alert('Okay we support these browsers too')
}
else{
    alert('we hope tht this page looks ok!')
}

// if to switch

let a = +prompt('a?' , '')
switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2||3:
        alert('2,3');
        break;
}