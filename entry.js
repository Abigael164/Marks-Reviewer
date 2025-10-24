const username = document.getElementById("username")
const marks = document.getElementById("marks")
const grade = document.getElementById("grade")
const btn1 = document.getElementById("btn1")
let mymark;

//btn.onclick = function(){}
btn1.addEventListener("click",function(){
    mymark = marks.value;
    mymark = Number(mymark);

    if(mymark>=70 && mymark<=100){
        grade.textContent = "A,Excellent!!"
    }
    else if(mymark>=40 && mymark <=69){
        grade.textContent = "B,Very good!!"
    }
    else if(mymark>=0 && mymark <=39){
        grade.textContent = "C,Good trial!!"
    }
    else{
        grade.textContent = `${marks} is INVALID!!`
    }

})