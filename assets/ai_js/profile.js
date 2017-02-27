function update_profile(username,tictac,gomoku,uid){


document.getElementById('_username').innerHTML = username;

document.getElementById('_userpic').src += username+'/profile_pic.png?time='+uid;

if(tictac==1)
{
  document.getElementById('tictac_uploaded_ai').innerHTML = "AI Uploaded Sucessfully";
}

if(gomoku==1)
{
  document.getElementById('gomoku_uploaded_ai').innerHTML = "AI Uploaded Sucessfully";
}

}
