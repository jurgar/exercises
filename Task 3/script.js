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

fetch(ENDPOINT);

// const createUser = (user) => {
//   const id = user.id;
//   const title = user.title;
//   const due_on = user.due_on;
//   const status = user.status;

//   const tdId = document.createElement("td");
//   const tdTitle = document.createElement("td");
//   const tdDueOn = document.createElement("td");
//   const tdStatus = document.createElement("td");

//   tdId.textContent = user.id;
//   tdTitle.textContent = user.title;
//   tdDueOn.textContent = user.due_on;
//   tdStatus.textContent = user.status;

//   const trUser = document.createElement("tr");
//   trUser.append(tdId, tdTitle, tdDueOn, tdStatus);

//   return trUser;
// };

fetch("https://gorest.co.in/public/v2/todos")
  .then((resp) => resp.json())
  .then((response) => {
    //atvaizduoti pirmo elemento duomenis
    console.log(response);
  })
  .catch((error) => {
    console.error(error, ": Failed to load users");
  });
