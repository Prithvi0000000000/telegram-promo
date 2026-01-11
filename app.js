const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  databaseURL: "PASTE_HERE",
  projectId: "PASTE_HERE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref("site").on("value", snap => {
  const d = snap.val();
  if (!d) return;

  document.getElementById("title").innerText = d.title;
  document.getElementById("description").innerText = d.description;
  document.getElementById("tgLink").href = d.link;
  document.getElementById("tgLinkTop").href = d.link;
  document.getElementById("members").innerText = d.members;
});

function saveData() {
  db.ref("site").set({
    title: titleInput.value,
    description: descInput.value,
    link: linkInput.value,
    members: membersInput.value
  });
  alert("Updated 🔥");
}
