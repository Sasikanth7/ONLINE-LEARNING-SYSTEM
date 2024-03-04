// Dummy data for course listing
const courses = [
    { id: 1, title: 'FRONT END', instructor: 'John Doe' },
    { id: 2, title: 'BACK END', instructor: 'Jane Smith' },
    { id: 3, title: 'JavaScript Fundamentals', instructor: 'Alice Johnson' }
  ];
  
  // Function to populate course list
  function populateCourseList() {
    const courseList = document.getElementById('courseList');
    courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = `${course.title} - ${course.instructor}`;
      courseList.appendChild(li);
    });
  }
  
  // Event listener for form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login authentication here
  });
  
  // Populate course list on page load
  window.onload = populateCourseList;
  