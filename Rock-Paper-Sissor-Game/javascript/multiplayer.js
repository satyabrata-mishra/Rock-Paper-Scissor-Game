let p1=0,p2=0,round=0,score1=0,score2=0;
function rock1()
{
    p1=1;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock2()'>Rock</button> <button class='btn' onclick='paper2()'>Paper</button>  <button class='btn' onclick='scissor2()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 2 Turn...</p>";
    round++;
}
function paper1()
{
    p1=2;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock2()'>Rock</button> <button class='btn' onclick='paper2()'>Paper</button>  <button class='btn' onclick='scissor2()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 2 Turn...</p>";
    round++;
}
function scissor1()
{
    p1=3;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock2()'>Rock</button> <button class='btn' onclick='paper2()'>Paper</button>  <button class='btn' onclick='scissor2()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 2 Turn...</p>";
    round++;
}
function rock2()
{
    p2=1;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock1()'>Rock</button> <button class='btn' onclick='paper1()'>Paper</button>  <button class='btn' onclick='scissor1()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 1 Turn...</p>";
    modify(p1,p2);
}
function paper2()
{
    p2=2;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock1()'>Rock</button> <button class='btn' onclick='paper1()'>Paper</button>  <button class='btn' onclick='scissor1()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 1 Turn...</p>";
    modify(p1,p2);
}
function scissor2()
{
    p2=3;
    document.getElementById("btnbox").innerHTML="<button class='btn' onclick='rock1()'>Rock</button> <button class='btn' onclick='paper1()'>Paper</button>  <button class='btn' onclick='scissor1()'>Scissor</button>";
    document.getElementById("turn").innerHTML="<p>Player 1 Turn...</p>";
    modify(p1,p2);
}
function modify(p1,p2)
{
    if (p1==1 && p2==1)
    {
        document.getElementById("player1").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="It's a Draw!";
    }
    else if (p1==1 && p2==2)
    {
        document.getElementById("player1").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Player 2 Won!";
        score2++;  
    }
    else if (p1==1 && p2==3)
    {
        document.getElementById("player1").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="Player 1 Won!";
        score1++;
    }
    else if (p1==2 && p2==1)
    {
        document.getElementById("player1").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="Player 1 Won!";
        score1++;
    }
    else if (p1==2 && p2==2)
    {
        document.getElementById("player1").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Its a Draw!";
    }
    else if (p1==2 && p2==3)
    {
        document.getElementById("player1").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="Player 2 Won!";
        score2++;
    }
    else if (p1==3 && p2==1)
    {
        document.getElementById("player1").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/rock.png'>";
        document.getElementById("result").innerHTML="Player 2 Won!";
        score2++;
    }
    else if (p1==3 && p2==2)
    {
        document.getElementById("player1").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/paper.png'>";
        document.getElementById("result").innerHTML="Player 1 Won!";
        score1++;
    }
    else if (p1==3 && p2==3)
    {
        document.getElementById("player1").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("player2").innerHTML="<img src='../image/scissor.png'>";
        document.getElementById("result").innerHTML="It's a Draw!";
    }
    document.getElementById("ply1").innerHTML="Player 1: "+score1;
    document.getElementById("ply2").innerHTML="Player 2: "+score2;
    document.getElementById("round").innerHTML="Rounds: "+round;
}