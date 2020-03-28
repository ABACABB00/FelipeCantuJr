var firebaseConfig = {
    apiKey: "AIzaSyC-57Lpi7xBvb7cxUUiTO2Iwa-Ft25HjoQ",
    authDomain: "port-form.firebaseapp.com",
    databaseURL: "https://port-form.firebaseio.com",
    projectId: "port-form",
    storageBucket: "port-form.appspot.com",
    messagingSenderId: "1002529863476",
    appId: "1:1002529863476:web:682291f6ba6a841a9e9761",
    measurementId: "G-JVW4WWDRVG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}