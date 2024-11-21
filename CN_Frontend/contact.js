const root = document.getElementById('root');

// Create the main container
const container = document.createElement('div');
container.className = 'container';

// Add a header
const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Contact Us';
header.appendChild(title);

// Add content
const content = document.createElement('div');
content.innerHTML = `
  <ul>
    <li><strong>Email:</strong> info@pes.edu</li>
    <li><strong>Phone:</strong> +91 123 456 7890</li>
    <li><strong>Address:</strong> PES University, Ring Road, Bengaluru, India</li>
  </ul>
  <p>Feel free to reach out to us for any queries or assistance!</p>
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
