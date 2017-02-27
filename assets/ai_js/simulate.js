
function simulate(_move,game){


if(_move.length>1){

  var delay = document.getElementById('move_delay').value;
  _move = _move.trim();
  var winner = parseInt(_move[_move.length-1]);
  _move =_move.substring(0,_move.length-1);
  //alert(_move+"this");
  drawboard(_move,winner,delay,game);

  }

}

function updatescorecard(score_array,game){
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
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "Match "+match;
  if(winner==1)
  {cell2.innerHTML = "Winner"; p1++;}
  else if(winner==2)
  {cell3.innerHTML = "Winner"; p2++;}
  else{
    cell2.innerHTML = "Draw";
    cell3.innerHTML = "Draw";
  }
cell4.innerHTML="<button class=\"mbr-buttons__btn btn  btn-success\" " + "\" id=\"" + score_array[x] + "\"  onclick =\"simulate(this.id,\'"+game+"\');\" > Run </button> ";

}




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




function createscorecard(_moves,game){

if(_moves==null || _moves.length<2)
  alert("No matches to simulate");
else{
  var move_arr = _moves.split(";");
  updatescorecard(move_arr,game);

localStorage.setItem("simulation_moves","");

}


}
