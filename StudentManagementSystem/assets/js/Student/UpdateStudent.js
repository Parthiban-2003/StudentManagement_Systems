let UpdatePlayersMethods = {};

UpdatePlayersMethods.UpdatePlayersDataToForm = function() 
{
    let current_Players = JSON.parse(localStorage.getItem("current_Players"));
    let playersData = JSON.parse(localStorage.getItem("Players_register"));
    let PlayersIndexNeedToUpdate = JSON.parse(localStorage.getItem("players_need_to_edit_index"));

    let current_Players_players = playersData[current_Players.userEmail];
    let playersToEdit = current_Players_players[PlayersIndexNeedToUpdate];

    document.getElementById('playersName').value = playersToEdit.playersName;
    if (playersToEdit.playersGender === "Male") 
    {
        document.getElementById("genderMale").checked = true;
    } 
    else 
    {
        document.getElementById("genderFemale").checked = true;
    }
    document.getElementById('playersAge').value = playersToEdit.playersAge;
    document.getElementById('playersEmail').value = playersToEdit.playersEmail;
    document.getElementById('Cricket').checked = playersToEdit.playersSports.cricket;
    document.getElementById('Football').checked = playersToEdit.playersSports.football;
    document.getElementById('Kabadi').checked = playersToEdit.playersSports.kabadi;
    document.getElementById('Volleyball').checked = playersToEdit.playersSports.volleyball;
    document.getElementById('Hockey').checked = playersToEdit.playersSports.hockey;
}

UpdatePlayersMethods.UpdateplayersData = function() 
{
    let current_Players = JSON.parse(localStorage.getItem("current_Players"));
    let playersData = JSON.parse(localStorage.getItem("Players_register"));
    let PlayersIndexNeedToUpdate = JSON.parse(localStorage.getItem("players_need_to_edit_index"));

    let elPlayersName = document.getElementById('playersName');
    let elPlayersGenderMale = document.getElementById("genderMale");
    let elPlayersAge = document.getElementById('playersAge');
    let elPlayersEmail = document.getElementById('playersEmail');
    let elPlayersFavCricket = document.getElementById('Cricket');
    let elPlayersFavFootball = document.getElementById('Football');
    let elPlayersFavKabadi = document.getElementById('Kabadi');
    let elPlayersFavVolleyball = document.getElementById('Volleyball');
    let elPlayersFavHockey = document.getElementById('Hockey');

    let UpdatePlayers = 
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
    let current_Players_player = playersData[current_Players.userEmail];
    current_Players_player[PlayersIndexNeedToUpdate] = UpdatePlayers;

    playersData[current_Players.userEmail] = current_Players_player;

    localStorage.setItem("Players_register", JSON.stringify(playersData));

    window.location.href = "ShowStudents.html";
}

document.addEventListener("DOMContentLoaded", function() 
{
    UpdatePlayersMethods.UpdatePlayersDataToForm();
});
