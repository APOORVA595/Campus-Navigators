const events = [
    { name: "Coding Hackathon", date: "September 20, 2024", location: "GJBC Block" },
    { name: "Robotics Workshop", date: "September 25, 2024", location: "F Block" }
];

const clubs = [
    { name: "Coding Club", description: "Join the coding club to participate in coding competitions and workshops." },
    { name: "Robotics Club", description: "Join the robotics club to build robots and participate in robotics events." }
];

// Display Upcoming Events
const upcomingEventsDiv = document.getElementById("upcoming-events");
upcomingEventsDiv.innerHTML = "<h3>Upcoming Events</h3>";
events.forEach(event => {
    upcomingEventsDiv.innerHTML += `
        <div class="event">
            <strong>${event.name}</strong><br>
            Date: ${event.date}<br>
            Location: ${event.location}
        </div>
    `;
});

// Display Clubs and Add Register Button
const clubListDiv = document.getElementById("club-list");
clubListDiv.innerHTML = "<h3>Clubs</h3>";
clubs.forEach(club => {
    clubListDiv.innerHTML += `
        <div class="club">
            <strong>${club.name}</strong><br>
            ${club.description}<br>
            <button class="register-button" onclick="registerForClub('${club.name}')">Register</button>
        </div>
    `;
});

// Function to Handle Club Registration
function registerForClub(clubName) {
    alert(`You have successfully registered for the ${clubName}!`);
}
