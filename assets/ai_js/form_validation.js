function validatesignup(){
	
var _username =document.forms["signupform"]["name"];
var _password =document.forms["signupform"]["password"];
var _repassword =document.forms["signupform"]["repassword"];
var _email =document.forms["signupform"]["email"];

if(_username.value.length<4)
{
  alert("please enter atleast 4 characters in username");
   return false;
}

else if(_password.value.length<5)
{
  alert("password too short!!");
   return false;
}


else if(_password.value!=_repassword.value)
{
  alert("passwords do not match");
   return false;
}
else if(_email.value.length<4)
{
  alert("please enter valid email address");
   return false;
}


return true;

}


function checkUser(str) {
    if (str == "") {
        
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
				if(this.responseText=="success Exist")
				{
					//Code When Username Exist
					alert("Username ALready Exist");
				}            
			}
        };
        xmlhttp.open("GET","include/getUser.php?username="+str,true);
        xmlhttp.send();
    }
}


function validatesignin(){
var _username =document.forms["signinform"]["name"];
var _password =document.forms["signinform"]["password"];

if(_username.value.length<4 || _password.value.length<5)
{
  alert("please enter valid username and password");
   return false;
}


return true;

}
