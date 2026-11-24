
// YES BUTTON
function acceptDate() {
    showDatePlanning();
}

// MAYBE LATER BUTTON
function maybeLater() {
    document.getElementById("responseMessage").innerHTML = `
        <h2>Take your time, beautiful ❤️</h2>
        <p>Think about it. I'll be waiting for your response, beautiful.</p>
        <p>No pressure. Take all the time you need 😊</p>
        <button onclick="showHome()">Back to invitation</button>
    `;
}

// NO BUTTON
function sayNo() {
    document.getElementById("responseMessage").innerHTML = `
        <h2>Wait a minute, Angel! 😂❤️</h2>
        <p>Can I make one little case for this date?</p>
        <p>Good company, lovely conversations and a memorable time together.</p>

        <button onclick="acceptDate()">Okay, let's go! ❤️</button>
        <button onclick="finalNo()">My answer is still no</button>
    `;
}

// FINAL NO
function finalNo() {
    document.getElementById("responseMessage").innerHTML = `
        <h2>No worries, Angel ❤️</h2>
        <p>Thank you for being honest. I respect your decision.</p>
    `;
}

// DATE PLANNING
function showDatePlanning() {
    document.getElementById("responseMessage").innerHTML = `
        <h2>Yay! Let's plan our date 🥰</h2>
        <p>Where would you like us to go?</p>

        <select id="location">
            <option value="">Choose a location</option>
            <option value="Restaurant">🍽️ Restaurant</option>
            <option value="Beach">🏖️ Beach</option>
            <option value="Cinema">🎬 Cinema</option>
            <option value="Picnic">🌳 Picnic</option>
            <option value="Somewhere else">💕 Somewhere else</option>
        </select>

        <br><br>

        <label>Choose your preferred date:</label>
        <br>
        <input type="date" id="date">

        <br><br>

        <label>Choose your preferred time:</label>
        <br>
        <input type="time" id="time">

        <br><br>

        <button onclick="submitDate()">Submit ❤️</button>
    `;
}

// SUBMIT DATE PREFERENCES
function submitDate() {
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!location || !date || !time) {
        alert("Please select a location, date and time 😊");
        return;
    }

    document.getElementById("responseMessage").innerHTML = `
        <h2>Thank you, Angel! ❤️</h2>
        <p>Your preferred plans:</p>
        <p>📍 Location: ${location}</p>
        <p>📅 Date: ${date}</p>
        <p>⏰ Time: ${time}</p>
        <p>I'll look forward to discussing our plans with you! 🥰</p>
    `;
}

// BACK TO INVITATION
function showHome() {
    document.getElementById("responseMessage").innerHTML = "";
}
