import { db } from "./firebase.js"
import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"

const form = document.querySelector("#project-form");
const list = document.querySelector("#projects-list");

async function loadProjects() {
  const snapshot = await getDocs(collection(db, "projects"));
  list.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    list.innerHTML += `
      <article>
        <h3>${data.projectName}</h3>
        <p>${data.projectDescription ?? ""}</p>
        <a href="${data.url}" target="_blank">サイトを見る</a>
      </article>
    `;
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "projects"), {
    projectName: document.querySelector("#project-name").value,
    url: document.querySelector("#project-url").value,
    githubUrl: document.querySelector("#github-url").value,
    projectDescription: document.querySelector("#project-description").value,
    createdAt: new Date()
  });

  form.reset();
  await loadProjects();
});

await loadProjects();