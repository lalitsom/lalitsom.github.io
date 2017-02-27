function copymoves(_allmoves){

var allmoves = document.getElementById('hidden_moves');

allmoves.value = ""+_allmoves;

var move_arr = _allmoves.split(";");
scorecard(move_arr);
}

function gotosimulate(game){
localStorage.setItem("simulation_moves",document.getElementById('hidden_moves').value);
window.open("simulation.php?gameName="+game);
}

function scorecard(score_array){
//var score_table = document.getElementById('score_table');
var table = document.getElementById("score_table");

var match = 0;
var winner =3;
var p1=0;
var p2=0;
var fwinner =3;

score_array.pop();

for(x in score_array){
match++;

  var mstring = score_array[x];
  winner = parseInt(mstring[mstring.length-1]);
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  
  cell1.innerHTML = "Match "+match;
  if(winner==1)
  {cell2.innerHTML = "Winner"; p1++;}
  else if(winner==2)
  {cell3.innerHTML = "Winner"; p2++;}
  else{
    cell2.innerHTML = "Draw";
    cell3.innerHTML = "Draw";
  }


}
//document.getElementById('score_table').innerHtml ="<tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>";



if(p1>p2)
  fwinner =1;
if(p2>p1)
 fwinner = 2;


if(fwinner==3)
  winner_text.innerHTML = "Draw";
else
      winner_text.innerHTML = "Winner is Player "+ fwinner;




      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = "Final result";

      cell2.innerHTML = p1 + " Wins";
      cell3.innerHTML = p2 + " Wins";

}
