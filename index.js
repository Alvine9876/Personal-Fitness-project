// Select page sections and navigation links
const homeSection = document.getElementById('home');
const workoutSection = document.getElementById('workout');
const mealSection = document.getElementById('meal');
const contactSection = document.getElementById('contact');
const profileSection = document.getElementById('profile');

const homeLink = document.getElementById('home-link');
const workoutLink = document.getElementById('workout-link');
const mealLink = document.getElementById('meal-link');
const contactLink = document.getElementById('contact-link');
const profileLink = document.getElementById('profile-link');

// Hide all sections
const hideAllSections = () => {
  homeSection.style.display = 'none';
  workoutSection.style.display = 'none';
  mealSection.style.display = 'none';
  contactSection.style.display = 'none';
  profileSection.style.display = 'none';
};

// Show the selected section
homeLink.addEventListener('click', () => {
  hideAllSections();
  homeSection.style.display = 'block';
});

workoutLink.addEventListener('click', () => {
  hideAllSections();
  workoutSection.style.display = 'block';
});

mealLink.addEventListener('click', () => {
  hideAllSections();
  mealSection.style.display = 'block';
});

contactLink.addEventListener('click', () => {
  hideAllSections();
  contactSection.style.display = 'block';
});

profileLink.addEventListener('click', () => {
  hideAllSections();
  profileSection.style.display = 'block';
});

// Profile Setup Form
const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const fitnessGoal = document.getElementById('fitness-goal').value;

  // Save profile to localStorage (for simplicity)
  localStorage.setItem('profile', JSON.stringify({ name, age, gender, fitnessGoal }));

  alert('Profile saved successfully!');
});

// Track user progress
const tasksCompleted = localStorage.getItem('tasksCompleted') || 0;
const dailyGoals = 5; // Example goal for daily tasks

document.getElementById('tasks-completed').innerText = tasksCompleted;
document.getElementById('daily-goals').innerText = dailyGoals;

document.getElementById('complete-task').addEventListener('click', () => {
  const updatedTasksCompleted = parseInt(tasksCompleted) + 1;
  localStorage.setItem('tasksCompleted', updatedTasksCompleted);
  document.getElementById('tasks-completed').innerText = updatedTasksCompleted;

  alert('Good job! Keep it up!');
});

// Notification Reminder (this is just an example, you can enhance it further)
setInterval(() => {
  alert("Reminder: Don't forget to complete today's workout task!");
}, 86400000); // Reminds the user once a day (24 hours in milliseconds)

const beginnerButton = document.getElementById('beginner-btn');
const intermediateButton = document.getElementById('intermediate-btn');
const advancedButton = document.getElementById('advanced-btn');

// Define workout content for each program
const beginnerContent = `
  <h2>Beginner Program</h2>
  <p>This is a beginner-friendly program designed for newcomers to fitness. Focus on learning proper form and consistency.</p>
  <ul>
    <li>5-minute warm-up</li>
    <li>Bodyweight exercises: squats, lunges, push-ups</li>
    <li>10-minute cool-down stretch</li>
  </ul>
`;

const intermediateContent = `
  <h2>Intermediate Program</h2>
  <p>This program is designed for individuals with some fitness experience. It will challenge you to build strength and endurance.</p>
  <ul>
    <li>10-minute warm-up with light cardio</li>
    <li>Compound exercises: deadlifts, squats, bench press</li>
    <li>3-4 sets per exercise</li>
    <li>10-minute cool-down with stretching</li>
  </ul>
`;

const advancedContent = `
  <h2>Advanced Program</h2>
  <p>This program is for advanced athletes who want to take their fitness to the next level. Expect high-intensity workouts.</p>
  <ul>
    <li>15-minute high-intensity cardio warm-up</li>
    <li>Heavy lifting and compound movements</li>
    <li>Explosive exercises like burpees, box jumps</li>
    <li>5-6 sets per exercise, max effort</li>
    <li>15-minute cooldown with stretching and foam rolling</li>
  </ul>
`;

// Event listeners for the workout buttons
beginnerButton.addEventListener('click', () => {
  workoutSection.innerHTML = beginnerContent;
});

intermediateButton.addEventListener('click', () => {
  workoutSection.innerHTML = intermediateContent;
});

advancedButton.addEventListener('click', () => {
  workoutSection.innerHTML = advancedContent;
});