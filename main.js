const tag=parameter=>document.getElementById(parameter);
const img0=tag('img0');
const img1=tag('img1');
const img2=tag('img2');
const img3=tag('img3');
const img4=tag('img4');
const img5=tag('img5');
const img6=tag('img6');
const img7=tag('img7');
const img8=tag('img8');

let cards=[0,1,2,3,4,5,6,7,8];
let clicks=0;
let firstClick=0;

img0.addEventListener('click',select(0));

function select(index){
    clicks++;
    if(clicks===1){

    }

}

function disarray(){
    cards=cards.sort(function(){
        return Math.random() - 0.5
    });

    for(let i=0;i<9;i++){
        tag('img'+i).src='./images/'+(cards[i])+'.jpg';
    }
}

window.onload=function(){
    disarray();
}