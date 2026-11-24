
const container = document.querySelector(".container");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () {
    container.innerHTML = `
        <div class="heart">♡</div>
        <p class="subtitle">LET'S MAKE A PLAN</p>
        <h1>Wonderful!</h1>
        <p class="message">
            Where would you prefer us to go, Angel?
        </p>

        <div class="buttons">
            <button onclick="choosePlace('Restaurant')">🍽️ Restaurant</button>
            <button onclick="choosePlace('Beach')">🌊 Beach</button>
            <button onclick="choosePlace('Cinema')">🎬 Cinema</button>
            <button onclick="choosePlace('Picnic')">🧺 Picnic</button>
            <button onclick="choosePlace('Somewhere else')">✨ Somewhere else</button>
        </div>

        <footer>You can choose what feels comfortable for you ❤️</footer>
    `;
});

noBtn.addEventListener("click", function () {
    container.innerHTML = `
        <div class="heart">♡</div>
        <h1>That's okay.</h1>
        <p class="message">
            Thanks for taking the time to read my invitation.
            No pressure at all. Wishing you a lovely day, Angel.
        </p>
    `;
});

function choosePlace(place) {
    container.innerHTML = `
        <div class="heart">🌹</div>
        <p class="subtitle">THE NEXT LITTLE DETAIL</p>
        <h1>Lovely choice!</h1>
        <h2>${place}</h2>
        <p class="message">Which date would you prefer?</p>

        <label for="date">Your preferred date</label>
        <input type="date" id="date">

        <label for="time">Your preferred time</label>
        <select id="time">
            <option value="">Choose a time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
        </select>

        <div class="buttons">
            <button onclick="confirmChoice('${place}')" class="yes-button">
                Review my choice ❤️
            </button>
            <button onclick="goBack()" class="no-button">
                Go back
            </button>
        </div>
    `;
}

function confirmChoice(place) {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Please select both a date and time 😊");
        return;
    }

    const selectedDate = new Date(date + "T12:00:00");
    const formattedDate = selectedDate.toLocaleDateString(
        "en-GB",
        { day: "numeric", month: "long", year: "numeric" }
    );

    container.innerHTML = `
        <div class="heart">💗</div>
        <p class="subtitle">YOUR PREFERENCE</p>
        <h1>Thank you, Angel!</h1>

        <div class="invitation">
            <h3>Here's what you selected:</h3>
            <p>📍 Place: ${place}</p>
            <p>📅 Date: ${formattedDate}</p>
            <p>🕒 Time: ${time}</p>
        </div>

        <p class="message">
            These are your preferences, not a confirmed booking.
            We can discuss the details together.
        </p>

        <button class="yes-button" onclick="shareChoice()">
            Share my preference ❤️
        </button>

        <button class="no-button" onclick="goBack()">
            Start again
        </button>
    `;

    window.currentChoice = { place, date, time };
}

function shareChoice() {
    const choice = window.currentChoice;

    if (!choice) return;

    const message =
        `Hi! My date invitation preference is:\n` +
        `Place: ${choice.place}\n` +
        `Date: ${choice.date}\n` +
        `Time: ${choice.time}`;

    const whatsappURL =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}

function goBack() {
    location.reload();
}
