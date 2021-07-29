var op1=0;
var op2=0;
var ch="+";
var res=0;
var inp = "";
function asign(i){
    if(op1==0 || !inp.includes(ch)){
        op1 = op1*10 + i;
        inp = inp+i;
        document.getElementById("infield").innerHTML = inp;
    }

    else{
        op2 = op2*10 + i;
        inp = inp+i;
        document.getElementById("infield").innerHTML = inp;
    }
}
function oper(j){
    switch(j){
        case 1: ch="+";break;
        case 2: ch="-";break;
        case 3: ch="*";break;
        case 4: ch="/";break;
        default:ch=" ";
    }
    inp = inp+ch;
    document.getElementById("infield").innerHTML=inp;
}

function result(){
    switch(ch){
        case "+": res=op1+op2;break;
        case "-": res=op1-op2;break;
        case "*": res=op1*op2;break;
        case "/": res=op1/op2;break;
        default:res=0;
    }
    op1=res;
    op2=0;
    inp=""+res;
    document.getElementById("infield").innerHTML=res;
}
function clearit(){
    op1 = 0;
    op2 = 0;
    inp ="";
    document.getElementById("infield").innerHTML=" ";
}