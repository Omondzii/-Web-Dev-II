// Get the form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const destinationSelect = document.querySelector('#destination');
const travelDatesInput = document.querySelector('#travel-dates');
const numTravelersInput = document.querySelector('#num-travelers');
const accommodationRadio = document.querySelectorAll('input[name="accommodation"]');
const activitiesCheckbox = document.querySelectorAll('input[name="activities"]');
const fileUploadInput = document.querySelector('#file-upload');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the user input values
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const destination = destinationSelect.value;
    const travelDates = travelDatesInput.value;
    const numTravelers = numTravelersInput.value;
    const accommodation = Array.from(accommodationRadio).find((radio) => radio.checked).value;
    const activities = Array.from(activitiesCheckbox).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
    const fileUpload = fileUploadInput.files[0];

    // Create a trip object
    const trip = {
        name,
        email,
        phone,
        destination,
        travelDates,
        numTravelers,
        accommodation,
        activities,
        fileUpload,
    };

    // Generate trip recommendations
    const recommendations = generateRecommendations(trip);

    // Display trip recommendations
    const recommendationsList = document.querySelector('#recommendations-list');
    recommendationsList.innerHTML = '';
    recommendations.forEach((recommendation) => {
        const li = document.createElement('li');
        li.textContent = recommendation;
        recommendationsList.appendChild(li);
    });

    // Generate trip details
    const tripDetails = generateTripDetails(trip);

    // Display trip details
    const tripName = document.querySelector('#trip-name');
    const tripDescription = document.querySelector('#trip-description');
    const itineraryList = document.querySelector('#itinerary-list');
    const accommodationText = document.querySelector('#accommodation');
    const activitiesText = document.querySelector('#activities');

    tripName.textContent = tripDetails.name;
    tripDescription.textContent = tripDetails.description;
    itineraryList.innerHTML = '';
    tripDetails.itinerary.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        itineraryList.appendChild(li);
    });
    accommodationText.textContent = tripDetails.accommodation;
    activitiesText.textContent = tripDetails.activities;
});

// Function to generate trip recommendations
function generateRecommendations(trip) {
    // TO DO: implement logic to generate recommendations based on user input
    return ['Recommendation 1', 'Recommendation 2', 'Recommendation 3'];
}

// Function to generate trip details
function generateTripDetails(trip) {
    // TO DO: implement logic to generate trip details based on user input
    return {
        name: 'Trip Name',
        description: 'Trip Description',
        itinerary: ['Itinerary Item 1', 'Itinerary Item 2', 'Itinerary Item 3'],
        accommodation: 'Accommodation',
        activities: 'Activities',
    };
}