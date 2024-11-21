const root = document.getElementById('root');

// Create the main container
const container = document.createElement('div');
container.className = 'container';

// Add a header
const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'About Us';
header.appendChild(title);

// Add content
const content = document.createElement('p');
content.innerHTML = `
  <strong>PES University</strong> is one of the most prestigious institutions in the region, offering a wide range of academic programs and fostering innovation and creativity.
  <br><br>
  Our campus is equipped with state-of-the-art facilities, including modern labs, libraries, and collaborative spaces designed to inspire students and staff alike.
`;

// Add back button
const backButton = document.createElement('button');
backButton.textContent = 'Back to Home';
backButton.onclick = () => {
  window.location.href = 'tea.html';
};

// Append elements to the container
container.appendChild(header);
container.appendChild(content);
container.appendChild(backButton);

// Append container to the root
root.appendChild(container);
