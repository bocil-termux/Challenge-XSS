import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMzwpLlykf9ZqvWDos0IGPwPxyvuNXM1Q",
  authDomain: "database-xss.firebaseapp.com",
  databaseURL: "https://database-xss-default-rtdb.firebaseio.com",
  projectId: "database-xss",
  storageBucket: "database-xss.firebasestorage.app",
  messagingSenderId: "951126262122",
  appId: "1:951126262122:web:476a79d88bdd0b16d0a513"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const page24 = "page24";

window.displayComments = function () {
  const commentOutput = document.getElementById("commentOutput");
  const commentRef = ref(db, 'comments/' + page24);

  get(commentRef).then((snapshot) => {
    if (snapshot.exists()) {
      const comments = snapshot.val();
      commentOutput.innerHTML = '';

      const allowedPattern = /document\.body\.innerHTML/;

      if (allowedPattern.test(comments)) {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = comments;
        commentOutput.appendChild(commentElement);
      } else {
        commentOutput.innerHTML = '';
      }
    } else {
      commentOutput.innerHTML = '';
    }
  }).catch(error => console.error("Error fetching comments:", error));
};

document.addEventListener("DOMContentLoaded", window.displayComments);