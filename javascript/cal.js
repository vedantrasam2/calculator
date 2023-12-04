let inputbox1= document.getElementsByClassName('bg-dark')[1];
let inputbox2= document.getElementsByClassName('bg-dark')[0];
let eq=[],ans=[];
let flag = true;
function getval(num) {

if(inputbox1.value=='0')
{
   inputbox1.value=num;
}
else
{
    inputbox1.value+=num;
}


}
function getans(){

    let answer=eval(inputbox1.value)
    equation=inputbox1.value;

    inputbox1.value=answer;
    
    inputbox2.value=equation +'=';
     
    eq.push(equation + '=');
    ans.push(answer);
    console.log(eq,ans);
}
function ac(){
 
    inputbox1.value='0';
    inputbox2.value='';
}

function backSpace(){

    equation=inputbox1.value
    inputbox1.value=equation.slice(0,-1);
}

function history(){

    
    // console.log(eq,answer)
    for(let i=0;i<eq.length;i++)
    {
           document.querySelector('.History').innerHTML +='<h2>'+eq[i]+'</h2><h1>'+ans[i]+'</h1>'
    }




}