let user,comp;
let won=0, lost=0,draw=0, trial=0;
function rock(){
    document.getElementById("youbox").innerHTML="<img src='../image/rock.png'>";
    user=1;
    comp=1+Math.floor(Math.random()*(3-1+1));
    if (comp == 1) {
        document.getElementById("compbox").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="Its a Draw!";
        draw++;
    }
    else if (comp == 2) {
        document.getElementById("compbox").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Better Luck Next Time. You Lost!";
        lost++;
    }
    else if (comp == 3) {
        document.getElementById("compbox").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="Great Luck Buddy. You Won!";
        won++;
    }
    trial++;
    document.getElementById("won").innerHTML="Won: "+won;
    document.getElementById("lost").innerHTML="Lost: "+lost;
    document.getElementById("draw").innerHTML="Draw: "+draw;
    document.getElementById("trial").innerHTML="Total Trials: "+trial;
}
function paper(){
    document.getElementById("youbox").innerHTML="<img src='../image/paper.png'>";
    user=2;
    comp=1+Math.floor(Math.random()*(3-1+1));
    if (comp == 1) {
        document.getElementById("compbox").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="Great Luck Buddy. You Won!";
        won++;
    }
    else if (comp == 2) {
        document.getElementById("compbox").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Its a Draw!";
        draw++;
    }
    else if (comp == 3) {
        document.getElementById("compbox").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="Better Luck Next Time. You Lost!";
        lost++;
    }
    trial++;
    document.getElementById("won").innerHTML="Won: "+won;
    document.getElementById("lost").innerHTML="Lost: "+lost;
    document.getElementById("draw").innerHTML="Draw: "+draw;
    document.getElementById("trial").innerHTML="Total Trials: "+trial;
}
function scissor(){
    document.getElementById("youbox").innerHTML="<img src='../image/scissor.png'>";
    user=3;
    comp=1+Math.floor(Math.random()*(3-1+1));
    if (comp == 1) {
        document.getElementById("compbox").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="Better Luck Next Time. You Lost!";
        lost++;
    }
    else if (comp == 2) {
        document.getElementById("compbox").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Great Luck Buddy. You Won!";
        won++;
    }
    else if (comp == 3) {
        document.getElementById("compbox").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="Its a Draw!";
        draw++;
    }
    trial++;
    document.getElementById("won").innerHTML="Won: "+won;
    document.getElementById("lost").innerHTML="Lost: "+lost;
    document.getElementById("draw").innerHTML="Draw: "+draw;
    document.getElementById("trial").innerHTML="Total Trials: "+trial;
}