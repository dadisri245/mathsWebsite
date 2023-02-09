var playing=false;
var score;
var timeremaining;
var correctanswer;
document.getElementById("startreset").onclick=function(){
    if(playing==true) //clicked reset button
        location.reload();
    else{ //clicked start button
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("startreset").innerHTML="Reset game";
        hide("gameOver");
        show("timeremaining");
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        countDown();
        generateQA();
    }
}
//clicking on options
for(var i=1;i<=4;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            //correct answer
            if(this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct")
                },1000);
                generateQA();
            }
            //wrong answer
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");   
                }, 1000);
            }
        }
    }
}
function countDown(){
    var action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            clearInterval(action);
            show("gameOver");
            document.getElementById("gameOver").innerHTML="<p>Game over!</p><p>Your score is "+score+".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000)
}
function hide(Id){
    document.getElementById(Id).style.display = "none";   
}
function show(Id){
    document.getElementById(Id).style.display = "block";   
}
function generateQA(){
    var x=1+Math.round(19*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctposition=1+Math.round(3*Math.random());
    //for correct option
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    for(var i=1;i<=4;i++){
        if(i!=correctposition){
            var ans;
            do{
            ans=(1+Math.round(19*Math.random()) )* (1+Math.round(9*Math.random()));
            }while(ans==correctanswer);
            document.getElementById("box"+i).innerHTML=ans;
        }
    }
}