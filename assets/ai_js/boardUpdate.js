
var ref;

function drawboard(gamestring,winner,delay,game) {
  //Initializations

 if(ref!=null)
	  clearInterval(ref);

gamestring+="";
winner=parseInt(winner);
delay =parseInt(delay);
//alert(delay+"of"+gamestring+"with"+winner);
  var canvas = document.getElementById('myCanvas');

//var firstchance = document.getElementById("firstchance").value;

  var offsetx;
  var offsety;
  var size;
  var imageoffset;
  if(game=="tictactoe") 
  {
	  size=3;
      offsetx=0;
	  offsety=0;
	  imageoffset=0;
	   var sources=["assets/images/zero.png","assets/images/cross.png"];
  }
  else if(game=="gomoku")
  {
	  size=9;
	  offsetx=6;
	  offsety=6;
      imageoffset=5;	  
	  var sources=["assets/images/white.png","assets/images/black.png"];
		
  }
  
  
  var winner_text = document.getElementById('winner_text');

  var cheight = canvas.height;
  var cwidth = canvas.width;

  var context = canvas.getContext('2d');
  var board = new Array(size);

 


  for(i=0;i<size;i++)
     {
     board[i]=new Array(size);

     }


//reset canvas board
context.clearRect(0,0,canvas.width,canvas.height);
  for(i=0;i<size;i++)
   {
    for(j=0;j<size;j++)
    {

	  board[i][j]=-1;

	 // document.write(board[i][j]);
     }
   }

 //document.write(gamestring+" ");


  //First drawing
  var k=0;
  draw(board);

 ref=setInterval(function (){
		  if(k<gamestring.length-1)
	   {
		  // document.write(k+" ");
		   if(gamestring.charAt(k)=='1')
		       board[gamestring.charAt(k+1)][gamestring.charAt(k+2)]=0;
	       else if(gamestring.charAt(k)=='2')
		       board[gamestring.charAt(k+1)][gamestring.charAt(k+2)]=1;

           draw(board);
		   k+=3;

	   }

  },delay);



  //Finding The Winner
  if(winner==3)
    winner_text.innerHTML = "Draw";
  else
        winner_text.innerHTML = "Winner is Player "+ winner;




  //Board	Drawing Function
  function draw(b)
  {
    for(i=0;i<size;i++)
     for(j=0;j<size;j++)
        if(b[i][j]!=-1)
         {
           image=new Image();
             image.src=sources[b[i][j]];
             image.setAtX = j*((cwidth-2*offsetx)/size)+offsetx;
             image.setAtY = i*((cheight-2*offsety)/size)+offsety;
             image.style.zIndex=0;
             image.onload=function(){
                 context.drawImage(this,this.setAtX,this.setAtY,((cheight-2*offsety)/size),((cwidth-2*offsetx)/size));
                 
              };


       }

  }



return true;
}
