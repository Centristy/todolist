
let form = document.querySelector('#additem')
let list = document.querySelector('ul');
let input = document.getElementById('addlist');



let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text){
    let newItem = document.createElement('li');
    let newCheck = document.createElement('input');
     newCheck.setAttribute("type", "checkbox");
     newItem.innerText = text;
     newItem.appendChild(newCheck)
      list.appendChild(newItem);
}




list.addEventListener('dblclick', function(ev) {

if(ev.target.tagName ==='INPUT'){

    ev.target.parentElement.remove();
}
   
  }
, false);

list.addEventListener('dblclick', function(ev) {

    if(ev.target.tagName ==='LI'){
    
        ev.target.remove();
    }
       
      }
    , false);

list.addEventListener('click', function(ev) {

    if(ev.target.tagName ==='INPUT'){
    
        ev.target.parentElement.classList.toggle('checked');
    }
       
      }
    , false);
    

let arrayAnws = ['GO TO THE PARK','WASH YOUR DOG','SLEEP FOR TEN MINUTES','DONT STOP BELIEVING','SING-A-LONG','TOUCH GRASS','TIME TRAVEL TO 1999','EAT YOUR VEGETABLES','KEEP CODING, DONT STOP NEVER STOP','DANCE BREAK']


form.addEventListener('click', function(e){

    if (input.value === ''){
        alert("BLANK FIELD RESULTS IN RANDOM CHORE");
        input.value = arrayAnws[Math.floor(Math.random() * 10)]
    }

    let newItem = document.createElement('li');
    let newCheck = document.createElement('input');
    let allitems = document.querySelectorAll('li')
    e.preventDefault();
    newCheck.setAttribute("type", "checkbox");
    newItem.innerText = input.value;
    newItem.appendChild(newCheck)
    list.appendChild(newItem);
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    input.value = '';
}


    
)

