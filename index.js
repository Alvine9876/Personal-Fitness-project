const workoutForm = document.getElementById('workout-form');
const workoutList = document.getElementById('workout-list');
const exerciseSelect = document.getElementById('exercise');
window.addEventListener('DOMContentLoaded', function () {
    fetchExercises();
    fetchWorkouts();
  });