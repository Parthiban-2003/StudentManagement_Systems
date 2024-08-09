let elPlayersName = document.getElementById("playersName");
let elPlayersGenderMale = document.getElementById("genderMale");
let elPlayersGenderFemale = document.getElementById("genderFemale");
let elPlayersAge = document.getElementById("playersAge");
let elPlayersEmail = document.getElementById("playersEmail");
let elPlayersFavCricket = document.getElementById("Cricket");
let elPlayersFavFootball = document.getElementById("Football"); 
let elPlayersFavKabadi = document.getElementById("Kabadi"); 
let elPlayersFavVolleyball = document.getElementById("Volleyball"); 
let elPlayersFavHockey = document.getElementById("Hockey"); 

let AddPlayersMethods = {};

AddPlayersMethods.AddPlayers = function () 
{
    let lstPlayersList = JSON.parse(localStorage.getItem("Players_register"));

    if (lstPlayersList == null) 
    {
        lstPlayersList = {};
    }

    if (!AddPlayersMethods.ValidatePlayers()) 
    {
        alert("Player details already registered.");
        return;
    }

    AddPlayersMethods.SavePlayersDetails();
}

AddPlayersMethods.ValidatePlayers = function () 
{
    let lstPlayersList = JSON.parse(localStorage.getItem("Players_register"));
    let email = elPlayersEmail.value;

    if (lstPlayersList) 
    {
        for (let i = 0; i < lstPlayersList.length; i++) 
        {
            if (lstPlayersList[i].PlayersEmail === email) 
            { 
                alert("Player already registered.");
                return false;
            }
        }
    }

    return true;
}

AddPlayersMethods.SavePlayersDetails = function () 
{
    let current_Players = JSON.parse(localStorage.getItem("current_Players"));
    let current_Players_email = current_Players.userEmail;

    let users_data = JSON.parse(localStorage.getItem("Players_register"));

    if (users_data == null) 
    {
        users_data = {};
    }

    let newPlayers = 
    {
        playersName: elPlayersName.value,
        playersGender: elPlayersGenderMale.checked ? "Male" : "Female",
        playersAge: elPlayersAge.value,
        playersEmail: elPlayersEmail.value,
        playersSports: 
        {
            cricket: elPlayersFavCricket.checked,
            football: elPlayersFavFootball.checked,
            kabadi: elPlayersFavKabadi.checked,
            volleyball: elPlayersFavVolleyball.checked,
            hockey: elPlayersFavHockey.checked
        },
    };

    if (users_data[current_Players_email] == null)
    {
        users_data[current_Players_email] = [newPlayers];
    } 
    else
    {
        users_data[current_Players_email].push(newPlayers);
    }

    localStorage.setItem("Players_register", JSON.stringify(users_data));

    alert("Player details added successfully..!!");


    window.location.href = "ShowStudents.html";
}
