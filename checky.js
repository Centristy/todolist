
let form = document.querySelector('#additem')
let list = document.querySelector('ul');
let input = document.getElementById('addlist');

let boxArray = localStorage.getItem('box') ?
JSON.parse(localStorage.getItem('box')) : [];

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];



itemsArray.forEach(addTask);
function addTask(text){
    
    let newItem = document.createElement('li');
    let newCheck = document.createElement('input');
     newCheck.setAttribute("type", "checkbox");
     newCheck.setAttribute("id", "box");
     newItem.innerText = text;
     newItem.appendChild(newCheck)
    list.appendChild(newItem);
    
}

const constarray = itemsArray.length;
document.querySelectorAll('box');

for (i=0 ; i < constarray ; i++){

    if (boxArray[i] === true){

        document.querySelectorAll('#box')[i].checked = true;
        document.querySelectorAll('#box')[i].parentElement.setAttribute("class", "checked");

    }

}



function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }




list.addEventListener('dblclick', function(ev) {

if(ev.target.tagName ==='INPUT'){

    console.log(ev.target.parentElement.innerText);
    console.log(itemsArray)
    removeItemOnce(itemsArray, ev.target.parentElement.innerText)
    console.log(itemsArray)

    localStorage.setItem('items', JSON.stringify(itemsArray));
    ev.target.parentElement.remove();
}
   
  }
, false);

list.addEventListener('dblclick', function(ev) {

    if(ev.target.tagName ==='LI'){

        console.log(ev.target.innerText);
        console.log(itemsArray)
        removeItemOnce(itemsArray, ev.target.innerText)
        console.log(itemsArray)
        localStorage.setItem('items', JSON.stringify(itemsArray));
        ev.target.remove();
     
    }
       
      }
    , false);

list.addEventListener('click', function(ev) {


    if(ev.target.tagName ==='INPUT'){
    
        ev.target.parentElement.classList.toggle('checked');
        console.log(ev.target.checked)

        let lengthofchecks = document.querySelectorAll("#box").length
        boxArray = [];
        ;
        
            for(i=0; i < lengthofchecks; i++){
        
            boxArray.push(document.querySelectorAll("#box")[i].checked);
            localStorage.setItem('box', JSON.stringify(boxArray)); 
            }

    console.log (boxArray)
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
    newCheck.setAttribute("id", "box");
    newItem.innerText = input.value;
    newItem.appendChild(newCheck)
    list.appendChild(newItem);
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    input.value = '';
}


    
)

