

/////// js modules///////////////////

var fs = require('fs');
var mkdirp = require('mkdirp');
var workspaceRoot = '/electron/pos/workspaces/';
var workspaces = [];

function anyWorkspaceExist() {
  if (workspaces.length > 0) {
    return true;
  } else {
    return false;
  }
}

function createDirectory() {
  var folder_name = document.getElementById("workspace_name").value;

  mkdirp(workspaceRoot + folder_name, function(err) {
    if (err) console.error(err)
    else console.log('Directory Created')
    location.reload();  // instead of doing full reload do something else
  });

}

function getAllWorkspaces(dirPath) {
  workspaces = fs.readdirSync(dirPath);  //need to convert this to async
}

getAllWorkspaces(workspaceRoot);
