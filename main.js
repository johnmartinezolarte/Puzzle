const tag=parameter=>document.getElementById(parameter);
const img=document.querySelectorAll('.img');
const btnVal=tag('validate');
const btnRes=tag('restart');
const txtResult=tag('result');

img.forEach((x,i)=>{
    x.addEventListener('click', ()=>select(i));
})

let cards=[0,1,2,3,4,5,6,7,8];
let clicks=0, firstClick=0, secondClick=0;

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