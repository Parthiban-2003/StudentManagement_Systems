let DisplayPlayersMethods = {};

let playersData = JSON.parse(localStorage.getItem("Players_register"));
let current_Players = JSON.parse(localStorage.getItem("current_Players"));

let viewplayersDetails = document.getElementById("playersDetails");



DisplayPlayersMethods.DisplayPlayers = function() 
{
    let current_Players_email = current_Players.userEmail;
    viewplayersDetails.innerHTML = '';
    let lstPlayersRecords = playersData[current_Players_email];

    if (playersData && lstPlayersRecords) 
    {
        for (let i = 0; i < lstPlayersRecords.length; i++)
        {
            let playeruser = lstPlayersRecords[i];

            viewplayersDetails.innerHTML += `
                <tr>
                    <td>
                        ${playeruser.playersName}
                    </td>

                    <td>
                        ${playeruser.playersGender}
                    </td>

                    <td>
                        ${playeruser.playersAge}
                    </td>

                    <td>
                        ${playeruser.playersEmail}
                    </td>

                    <td>
                        ${playeruser.playersSports.cricket}
                    </td>

                    <td>
                       ${playeruser.playersSports.football}
                    </td>

                    <td>
                       ${playeruser.playersSports.kabadi}
                    </td>

                    <td> 
                       ${playeruser.playersSports.volleyball}
                    </td>

                    <td>
                       ${playeruser.playersSports.hockey}
                    </td>
                     <td>
                     <button onclick="DisplayPlayersMethods.Edit('${current_Players_email}',${i})">Edit</button> 
                     <button onclick="DisplayPlayersMethods.Delete('${current_Players_email}', ${i})">Delete</button>
                    </td>

                 
                </tr>`;
        }
    } 

};

DisplayPlayersMethods.Delete = function (current_Players_email, index)
{
    if(playersData && playersData[current_Players_email])
    {
        playersData[current_Players_email].splice(index,1);

        localStorage.setItem("Players_register", JSON.stringify(playersData));

        DisplayPlayersMethods.DisplayPlayers();
    }
 }



 DisplayPlayersMethods.Edit = function(_email, index)
{
    localStorage.setItem("players_need_to_edit_index", index);

   window.location.href = "AddStudent.html";

};

DisplayPlayersMethods.AddDetails = function()
{
    window.location.href = "AddStudent.html";
}

document.addEventListener("DOMContentLoaded", function()
{
    DisplayPlayersMethods.DisplayPlayers();
});
