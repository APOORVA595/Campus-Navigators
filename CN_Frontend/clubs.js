fetch('clubs.json')
  .then(response => response.json())
  .then(clubsData => {
    const clubListContainer = document.getElementById('club-list');
    clubsData.forEach(club => {
      const clubElement = document.createElement('div');
      clubElement.innerHTML = `
        <h3>${club.name}</h3>
        <p>${club.description}</p>
        <p>Meeting Times: ${club.meetingTimes}</p>
        <p>Location: ${club.location}</p>
        <a href="${club.registrationForm}">Register</a>
      `;
      clubListContainer.appendChild(clubElement);
    });
  })
  .catch(error => {
    console.error("Error fetching clubs data:", error);
  });