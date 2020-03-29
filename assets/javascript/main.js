var fconfig = {
  apiKey: "AIzaSyDrUaHf9hr1GQEEmi6WKWgR6B197XQUZ_M",
  authDomain: "form-application-640ec.firebaseapp.com",
  databaseURL: "https://form-application-640ec.firebaseio.com",
  projectId: "form-application-640ec",
  storageBucket: "form-application-640ec.appspot.com",
  messagingSenderId: "486904912418",
  appId: "1:486904912418:web:73fdf990a918087e9a087b",
  measurementId: "G-94RDJ8WL3J"
};

firebase.initializeApp(fconfig);

var usersRef = firebase.database().ref('users');

  document.getElementById('contactMe').addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();

      var name = getInputVal('name');
      var email = getInputVal('email');
      var phone = getInputVal('phone');
      var message = getInputVal('message');

      saveUser(name, email, phone, message);

      document.querySelector('.alert').getElementsByClassName.display = 'block';

      setTimeout(function() {
          document.querySelector('.alert').getElementsByClassName.display = 'none';
      }, 3000);

      document.getElementById('contactMe').reset();
  }


  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  function saveUser(email, name, phone, message) {
      var newUsersRef = usersRef.push();
      newUsersRef.set({
          email: email,
          name: name,
          phone: phone,
          message: message
      });
  }



  // function validation() {
  //   email = document.getElementById('email').value;
  //   name = document.getElementById('name').value;

  //   if((email == email) && (name == name)) {
  //     swal("Good job!", "Form Submitted", "Thank You!")
  //   } 
  //   else {
  //     sweetAlert("Oops...", "Something went wrong!", "error");
  //   }
  // }