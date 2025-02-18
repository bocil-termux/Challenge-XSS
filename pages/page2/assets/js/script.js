import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
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

const page2 = "page2";

window.submitInput = function () {
  const userInput = document.getElementById("userInput").value;
  const safeOutput = document.getElementById("safeOutput");

  safeOutput.innerText = userInput;
};

window.submitComment = function () {
  const commentInput = document.getElementById("commentName").value;
  const commentRef = ref(db, 'comments/' + page2);

  set(commentRef, commentInput)
    .then(() => {
      console.log("Komentar berhasil disimpan!");
      if (window.displayComments) {
        window.displayComments();
      } else {
        console.error("displayComments is not defined yet.");
      }
    })
    .catch(error => console.error("Gagal menyimpan komentar:", error));
};