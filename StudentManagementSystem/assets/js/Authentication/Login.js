let elLoginEmail = document.getElementById("loginUserEmail");
let elLoginPassword = document.getElementById("loginPassword");

let LoginMethods = {};

LoginMethods.Login = function () 
{
    let strLoginEmail = elLoginEmail.value;
    let strLoginPassword = elLoginPassword.value;

    let lstPlayersList = JSON.parse(localStorage.getItem("staffPlayers_register"));
    
    for (var i = 0; i < lstPlayersList.length; i++) 
    {

        if (lstPlayersList[i].userEmail == strLoginEmail && lstPlayersList[i].userPassword == strLoginPassword) 
        {
            localStorage.setItem("current_Players", JSON.stringify(lstPlayersList[i]));
            
            alert("login SuccessFully..!");

            let url = window.location.href.replace("Authentication/Login.html", "Student/AddStudent.html");
            
            window.location.href = url;

            break;
        }
    }
     
}
