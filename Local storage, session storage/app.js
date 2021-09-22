// set local storage item


// localStorage.setItem('name', 'John');                                 //kad izgasimo browser, onda ovo ostane, kad pogledamo ovu stranicu sa live serverom
// localStorage.setItem('age', '30');

// // set session storage item


// sessionStorage.setItem('name', 'Beth');                            //ovo ne ostane kad zatvoirmo starnicu i ponocno otvorimo i pogledamo sa live serverom

// remove from storage
// localStorage.removeItem('name');                                   //dosta je za izbrisita uaciti samo key tj. property name

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name)
// console.log(age)

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e){    // ovo je bila prva demetracija treavesty sa from inputom, ali problme ovoga što
//   const task = document.getElementById('task').value;           //se stalno overWrita ovaj 'task' key kad se upiše novi input
//   localStorage.setItem('task',task);
//alert('task saved')  


//   e.preventDefault();
// });




// document.querySelector('form').addEventListener('submit', function(e){   
//   const task = document.getElementById('task').value;            //   znači kao i gore, uzimao value inputa i spreamamo ga na varijablu 'task' 

//   let tasks;                                            //ovdje kreiramo novi varijablu tasks unutar callback funkcije    

//   if(localStorage.getItem('tasks') === null) {     // kad prvi put se ovaj event pokrente ovo će biti true i postavit će se tasks varijabla na ovu praznu array.
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks')); //ovo će aktivirati kad aktivira drugi put ovaj event listener i svaki put kasnije. Ovdje uzimamo trenutnu
//   }                                           //vrijednost keya 'tasks' iz localStroage i pretvarmo taj string u array tasks.

//   tasks.push(task);                            //onda ćemo ubaciti taj.value koji smo upsiali u form tj. input u tu task array.

//   localStorage.setItem('tasks', JSON.stringify(tasks));  //ovdje obacujemo u local storage tu varijablu tasks sa JSON.stingifay jer local storage prima samo strings i dajemo
                                                             // drugi string 'tasks' kao key u tom key value paru koji će se spremiti u localStorage.   
//   alert('Task saved');                                   // uglavnom ovdje modificiramo key 'tasks' u localStarageu svaki put kad se eventLiestenr aktivira dok
                                                             //u gornjem primjeru smo stalno overwritali
//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//   console.log(task);
// });