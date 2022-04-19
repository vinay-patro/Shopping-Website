
    alert("userid-vinay    password-patro")
    localStorage.username="vinay";
    localStorage.password="patro";

   

document.querySelector("#signin").addEventListener('click',function()
{
    if(((document.getElementById("name").value)==(localStorage.username))&&((document.getElementById("password").value)==(localStorage.password)))
    {
        alert("login successful");
    }
    else{
        document.write("invalid credentials");
    }
});