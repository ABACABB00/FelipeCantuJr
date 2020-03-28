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

  var messagesRef = firebase.database().rel('messages');

  document.getElementById('contactMe').addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();

      var name = getInputVal('name');
      var email = getInputVal('email');
      var message = getInputVal('message');

      saveMessage(name, email, message);

      document.querySelector('.alert').getElementsByClassName.display = 'block';

      setTimeout(function() {
          document.querySelector('.alert').getElementsByClassName.display = 'none';
      }, 3000);

      document.getElementById('contactMe').reset();
  }

  function getInputVal(id) {
    return document.getElementById(id).Value;
  }

  function saveMessage(email, name, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          email: email,
          name: name,
          massage: massage
      });
  }
