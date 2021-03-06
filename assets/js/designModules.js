(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    $('#workspace_name').focus();
    console.log('new workspace modal ready');
  },
  complete: function() {
    console.log('new workspace modal Closed');
  } // Callback for Modal close
});



$(document).ready(function(){
    $('.carousel').carousel();
  });





tags=
[
  {text: "My Computer", icon: "computer"},
  {text: "Football", icon: "fa fa-futbol-o",type:"font"},
  {text: "Building software", icon: "developer_mode"},
  {text: "Mathematics", icon: "functions"},
  {text: "Movies", icon: "movie"},
  {text: "Anime", icon: "movie_filter"},
  {text: "Philosophy", icon: "account_balance"},
  {text: "BATMAN", icon: "^~^"},
  {text: "Learning New Things", icon: "language"},
  {text: "Puzzles", icon: "extension"},
  {text: "Teaching", icon: "import_contacts"},
  {text: "Git Hub", icon: "fa fa-github", type:"font"},
  {text: "Paradoxes", icon: "all_inclusive"},
  {text: "Chess", icon: "fa fa-braille", type:"font"},
  {text: "Physics", icon: "fa fa-flask", type:"font"},
  {text: "Taoism ", icon: "cached"}
];


function populate_tags(){

  for (tag of tags) {
    if(tag.type === 'font'){
      addFontTag(tag.text,tag.icon);
    }else{
      addMaterial(tag.text,tag.icon);
    }

  }

}


function addFontTag(text,icon){
  var newtag = '<div class="chip">'+text+'<i class="'+icon+'"></i>  </div>';
  $('#things_tags').append(newtag);
}


function addMaterial(text,icon){
  var newtag = '<div class="chip">'+text+' '+'<i class="material-icons">'+icon+'</i>  </div>';
  $('#things_tags').append(newtag);
}

function hide(tbar){
  $("#"+tbar.id).removeClass('active');
}

function show_things() {
    document.getElementById('things').style.display = 'block';
    document.getElementById('stuff').style.display = 'none';
}

function show_stuff() {
  document.getElementById('things').style.display = 'none';
  document.getElementById('stuff').style.display = 'block';  
}



populate_tags();
