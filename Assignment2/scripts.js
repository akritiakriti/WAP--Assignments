// const { use } = require("react")

//DOM selection
const Name=  document.getElementById("name")
const roll=  document.getElementById("roll")
const address=  document.getElementById("address")
const submit_button= document.getElementById("btn_submit")
const form= document.getElementById("entryform")
const transcript= document.querySelector(".transcript")

//to show the data
const showbtn= document.querySelector(".btn_output")
const show_data= document.querySelector(".show_data")

//---------DOM Events----------

//get user:
function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || []
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", function() {
    const users = getUsers()
    if (users.length > 0) {
        // Initialize counter if not exists
        if (!localStorage.getItem("userCounter")) {
            localStorage.setItem("userCounter", users.length.toString())
        }
        updateTranscript(users)
    }
})

//save data
function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users))
    // Update user counter
    localStorage.setItem("userCounter", users.length.toString())
}


//Form ko submit button->save data
form.addEventListener("submit",function(event)
{
    event.preventDefault()
    if(Number(roll.value) < 0)   //form validation ->.txt
    {
        alert("Invalid input, try again!")
        return
    }

    const user = {
        name: Name.value,
        roll: roll.value,
        address: address.value
    }

    const users = getUsers()
    users.push(user)
    saveUsers(users)

    updateTranscript(users)
    form.reset()

})

//show the data - displays in grid layout (row-wise, then columns)
showbtn.addEventListener("click", function () {
    const stored_users = getUsers()
    const userCounter = localStorage.getItem("userCounter") || "0"

    if (!stored_users || stored_users.length === 0) {
        show_data.innerHTML = "<p>No data found</p>"
        return
    }

    let outputHTML = `<h3>Total Users: ${userCounter}</h3><div class="users-grid">`
    
    stored_users.forEach((user, index) => {
        outputHTML += `
            <div class="user-card">
                <h4>User ${index + 1}</h4>
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Roll:</b> ${user.roll}</p>
                <p><b>Address:</b> ${user.address}</p>
            </div>
        `
    })

    outputHTML += `</div>`
    show_data.innerHTML = outputHTML
})

//Update transcript - shows only the last given data
function updateTranscript(users) {
    if (!users || users.length === 0) {
        transcript.innerHTML = "<p>No entries yet</p>"
        return
    }

    const lastUser = users[users.length - 1] // Get the last entry

    let transcriptHTML = "<h3>Last Entry</h3>"
    transcriptHTML += `
        <dl>
            <dt>Name: </dt>
            <dd>${lastUser.name}</dd>
        </dl>
        <dl>
            <dt>Roll: </dt>
            <dd>${lastUser.roll}</dd>
        </dl>
        <dl>
            <dt>Address: </dt>
            <dd>${lastUser.address}</dd>
        </dl>
    `

    transcript.innerHTML = transcriptHTML
}

// Legacy function (keeping for reference)
function UpdateUI()
{
    transcript.innerHTML = 
    `
        <h1>Transcript working</h1> 

    <dl>
        <dt>Name: </dt>
        <dd>${Name.value}</dd>
    </dl>

    <dl>
        <dt>roll: </dt>
        <dd>${roll.value}</dd>
    </dl>
    <dl>
        <dt>address: </dt>
        <dd>${address.value}</dd>
    </dl>
    `
}

