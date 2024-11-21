async function checkTeacherLocation() {
    const teacherName = document.getElementById('teacher-name').value.trim();
  
    if (!teacherName) {
      document.getElementById('result').innerText = 'Please enter a teacher\'s name.';
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/search-teacher/${encodeURIComponent(teacherName)}`);
      if (response.ok) {
        const teacher = await response.json();
        const resultMessage = `
          <strong>Teacher Details:</strong><br>
          Name: ${teacher.name}<br>
          Current Location: ${teacher.currentLocation || 'Not available'}<br>
          Staffroom: Room ${teacher.staffroom.roomNumber}, Floor ${teacher.staffroom.floor}<br>
          Email: ${teacher.email}<br>
          Contact: ${teacher.contactNumber}
        `;
        document.getElementById('result').innerHTML = resultMessage;
      } else {
        document.getElementById('result').innerText = 'Teacher not found.';
      }
    } catch (error) {
      document.getElementById('result').innerText = 'Error fetching teacher data.';
    }
  }
  