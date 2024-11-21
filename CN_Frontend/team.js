const root = document.getElementById('root');

// Create the main container
const container = document.createElement('div');
container.className = 'container';

// Add a header
const header = document.createElement('header');
const title = document.createElement('h1');
title.textContent = 'Team Members';
header.appendChild(title);
container.appendChild(header);

// Add team member blocks
const teamMembers = [
  {
    name: "Aparajitha",
    SRN: "PES1UG23CS094"
  },
  {
    name: "Apoorva Biradar",
    SRN: "PES1UG23CS095"
  },
  {
    name: "Archana",
    SRN: "PES1UG23CS098"
  },
  {
    name: "Ankita",
    SRN: "PES1UG23CS083"
  }
];

// Create blocks for each team member
teamMembers.forEach(member => {
  const block = document.createElement('div');
  block.className = 'team-block';

  const name = document.createElement('h2');
  name.textContent = member.name;

  const rollNo = document.createElement('p');
  rollNo.textContent = `SRN: ${member.SRN}`;

  block.appendChild(name);
  block.appendChild(rollNo);

  container.appendChild(block);
});

// Add back button
const backButton = document.createElement('button');
backButton.textContent = 'Back to Home';
backButton.onclick = () => {
  window.location.href = 'tea.html';
};
container.appendChild(backButton);

// Append container to the root
root.appendChild(container);

// Add styles
const style = document.createElement('style');
style.textContent = `
  body {
    background-image: url('c.avif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }
  header h1 {
    margin-bottom: 20px;
    color: #333;
  }
  .team-block {
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid black;
    border-radius: 8px;
    padding: 15px;
    margin: 10px auto;
    max-width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .team-block h2 {
    margin: 0 0 10px;
    color: #3b1f90;
  }
  .team-block p {
    margin: 5px 0;
    color: #555;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3b1f90;
    color: white;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
`;
document.head.appendChild(style);
