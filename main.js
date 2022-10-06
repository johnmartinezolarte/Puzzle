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
const btnVal=tag('validate');
const btnRes=tag('restart');
const txtResult=tag('result');

let cards=[0,1,2,3,4,5,6,7,8];
let clicks=0, firstClick=0, secondClick=0;

img0.addEventListener('click', ()=> select(0));
img1.addEventListener('click', ()=> select(1));
img2.addEventListener('click', ()=> select(2));
img3.addEventListener('click', ()=> select(3));
img4.addEventListener('click', ()=> select(4));
img5.addEventListener('click', ()=> select(5));
img6.addEventListener('click', ()=> select(6));
img7.addEventListener('click', ()=> select(7));
img8.addEventListener('click', ()=> select(8));

function select(index){
    clicks++;
    if(clicks===1){
        firstClick=index;
        tag('img'+firstClick).style.border='4px solid red';
        //Así, el usuario sabrá cuando la ficha este lista para ser intercambiada
        if(secondClick!==firstClick){      
            tag('img'+secondClick).style.border=null;
        }
    }else{
        /* let secondClick=index; */
        secondClick=index;
        let exchange=cards[firstClick];
        cards[firstClick]=cards[secondClick];
        cards[secondClick]=exchange;
        tag('img'+firstClick).src='./images/'+cards[firstClick]+'.jpg';
        tag('img'+secondClick).src='./images/'+cards[secondClick]+'.jpg';
        clicks=0;
        tag('img'+secondClick).style.border='4px solid red';
        tag('img'+firstClick).style.border=null;
        /* moveCards(); */
    }
    /* removeBorder();
    tag('img'+index).style.border='4px solid red'; */
}

/* function removeBorder(){
    for(let i=0;i<9;i++){
        tag('img'+i).style.border=null; //También funciona con =''
    }
} */

/* function moveCards(){
    for(let i=0;i<9;i++){
        tag('img'+i).src='./images/'+cards[i]+'.jpg';
    }
} */

btnVal.addEventListener('click', checkPuz);

function checkPuz(){
    let check=true;
    for(let i=0;i<9;i++){
        if(cards[i]!==i){
            check=false;
        }
    }
    txtResult.style.visibility='visible';
    if(check){
        txtResult.innerHTML='Completed Puzzle';
    }else{
        txtResult.innerHTML='Incomplete Puzzle';
    }
    setTimeout(refresh,5000,txtResult);
}

function refresh(display){
    display.style.visibility='hidden';
}

btnRes.addEventListener('click', ()=>{
    location.reload()
});

function disarray(){
    cards=cards.sort(function(){
        return Math.random() - 0.5
    });
    for(let i=0;i<9;i++){
        tag('img'+i).src='./images/'+cards[i]+'.jpg';
    }
}

window.onload=function(){
    disarray();
}