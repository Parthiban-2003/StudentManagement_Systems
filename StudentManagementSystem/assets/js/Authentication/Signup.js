let elUserName = document.getElementById("userName");
let elUserEmail = document.getElementById("userEmail");
let elUserPassword = document.getElementById("userPassword");
let elUserConfirmPassword = document.getElementById("confirmPassword");

let SignupMethods = {};

let lstPlayersList = [];

SignupMethods.RegisterPlayers = function () {
	lstPlayersList = JSON.parse(localStorage.getItem("staffPlayers_register"));

	if (lstPlayersList == null) 
	{
		lstPlayersList = [];
	}
    	
	
    if (elUserName.value === '' || elUserEmail.value === '' || elUserPassword.value === '' || elUserConfirmPassword.value === '') 
	{
        alert("Please fill that..!!");
        return;
    }
		
	
    if(elUserPassword.value !== elUserConfirmPassword.value)
	{
		alert("Enter correct password..!!")
		return;
	}

	SignupMethods.ValidateAndSaveStaffPlayers()
}

SignupMethods.ValidateAndSaveStaffPlayers = function () 
{
	let email = elUserEmail.value;

	let bIsPlayersAlreadyThere = false;

	if(lstPlayersList)
	{
		for (let i = 0; i < lstPlayersList.length; i++)
		{
			if (lstPlayersList[i].userEmail === email)
			{
				bIsPlayersAlreadyThere = true;
			}
		}
	}

	if(bIsPlayersAlreadyThere)
	{
		alert("Players is already there..!!");
	}
	else
	{
		let newPlayersStaff = 
		{
			userName: elUserName.value,
			userEmail: elUserEmail.value,
			userPassword: elUserPassword.value,
			confirmPassword: elUserConfirmPassword.value
		};

		lstPlayersList.push(newPlayersStaff);
		localStorage.setItem("staffPlayers_register", JSON.stringify(lstPlayersList));

		alert("Signup successfully..!!");

		window.location.href="Login.html";
	}
}
