/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris atvaizduos TODOS korteles.
1. Išgaukite TODOS iš duoto ENDPOINT.
2. Sukurkite kiekvienam todo kortelę
3. Kortelėje atvaizduokite title ir due_on reikšmes (due_on panaudoti su Date object)
4. Kortelės spalva turi atitikti todo statusą. 
   Jeigu status = pending, kortelė orandžinė 
   Jeigu status = completed, kortelė žalia
5. Pastilizikuote kortelę
-------------------------------------------------------------------------- */

const ENDPOINT = "https://gorest.co.in/public/v2/todos";
//2 uzduotis

const renderCard = (todo) => {
  // const { title, due_on } = todo;

  const card = document.createElement("div");
  const titleEl = document.createElement("h3");
  const dueOnEl = document.createElement("span");

  titleEl.textContent = todo.title;
  //todoString(), localeString()
  dueOnEl.textContent = new Date(todo.due_on).toDateString();

  card.className = "card";
  card.style.background = todo.status === "pending" ? "orange" : "green";
  card.append(titleEl, dueOnEl);

  document.getElementById("output").append(card);
};

// 1 .uzduotis

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);

    response.forEach((todo) => renderCard(todo));
  })
  .catch((error) => {
    console.error(error);
  });
