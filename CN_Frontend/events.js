fetch('events.json')
  .then(response => response.json())
  .then(eventsData => {
    const upcomingEvents = eventsData.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate > new Date();
    });

    // Display upcoming events in a designated area
    const eventsContainer = document.getElementById('upcoming-events');
    upcomingEvents.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p>Date: ${event.date} - Time: ${event.time}</p>
        <p>Location: ${event.location}</p>
        <a href="${event.registrationLink}">Register</a>
      `;
      eventsContainer.appendChild(eventElement);
    });
  })
  .catch(error => {
    console.error("Error fetching events data:", error);
  });