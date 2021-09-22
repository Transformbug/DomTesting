// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(e){
//   console.log('card title');
  
//   console.log(this)
 
// });

// document.querySelector('.card-content').addEventListener('click', function(e){   // najgornji element je onaj na kojim je Travesty kliknuo, a ovi doli su njegovi ancestori i kad
//                                                                                   //ovako postaviš Listenere onda možeš vidijti da se i oni aktiviraju iako na njih nismo izravno klinuli
//   console.log('card content');
 
//   console.log(this)                                            //prvo se ovaj obavi c.log ovog selektora na koji je kliknut pa onda otac,djed itd.
// });                                                                    // ako kliknemo na neki nested element tj. child koji nema EventListenr za taj event onda će se aktivirati
//                                                                       //eventListenr parent elementa ako ima Listener za taj kilik dom event dok se child element neće aktivirati

// document.querySelector('.card').addEventListener('click', function(e){
//   console.log('card');
  
//   console.log(this)
// });

// document.querySelector('.col').addEventListener('click', function(e){       //svaki this bude zaseban, svoj, bezveze zac gordon komplicira, jasno je da je property event.target
//   console.log('col');                                                       // predstavlja u svakoj aktivranoj funkiji doslovno element na koji je kliknut.
//                                                                             //wes bos je odlično sve objasnio u videu, a samo sam o zac i tehchsith skpio da je se može
//                                                                               //ubaciti samo true ako hoćemo capuring faze order, bez objekta true 
//   console.log(this)
 
// });


//ovo sam je kopirao ovdje

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');                                                        //ovo je taj slučaj kad kliknemo na nested element koji nema neki Listenr onda ako
// });                                                                               //se taj nested element ne aktivira, ali se aktiivra parent listener
                             




// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');  //event delgation se događa kad postavio event listener na neki ancestor element i onda korisitmo 
       //target property event objekta da dobijemo nested elementa koji je zapravo klilnut da obavimo neku radnju sa tim nested elementumo, sve to unutar Ancestor callback funckije 

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);  //na cijli body je postavljen listener

// function deleteItem(e){                                                       // PAŽNJA. doli skroz je relevatni html 
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){   //smotani trevesty je zaboravio da se treba popeti još jedan put gore u Domu do grandad <i>
//   //   console.log('delete item');                                //className uvijek vrati cijeli string klasa koji su postvljeni na html class atribute. 
//   // }                                                           //znači ako ima neki od <li> elementa ima dodatnu klasu za razliku od ostalih onda ga ne bi izbrisali
                                                                    // zato je bolje koristit arraylike objekt koji dobijimo kad pristpimo .classList i njegovu metodu contains() 
//   if(e.target.parentElement.classList.contains('delete-item')){  // anchor tag ima ovu klasu što izbacit true, i onda se opet penje do <li> elementa kojeg treba izbrisat
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();         
//   }
// }

// OVO DOLI JE MOJRA VERZIJA
// EVENT LISTERNER JE NA ANCHOR TAGOVIMA, KLIKAMO NA <i> tag tj.to je e.target i onda se penjemo do ancestor elementa na koji treba primjeniti remove() da bi nestalo iz UI ono što
//želimo.

const delItem = document.querySelectorAll('.delete-item');   

for(let i=0; i<delItem.length; i++){
 delItem[i].addEventListener('click', deleteItem);

}



function deleteItem(e){
                                                                     //kad kliklnemo ne križić kliknemo na <i></i>,zato se 'penjemo' u DOM dva puta.
   
  
  
  console.log(e.target.parentElement.parentElement.remove())                        // <li class="collection-item"> List Item
                                                                    // <a href="#" class="delete-item secondary-content">
                                                                                           // <i class="fa fa-remove"></i>
                                                                                                     //</a>
                                                                                         //</li>
}