console.log('notes-app');

showNotes();//after reload show the cards automatically

//If user adds a note, add it to the local storage
let addBtn = document.getElementById('add-btn');

//adding notes
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addTxt');//fetch the text area from which i have to take the text
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    //notesObj is the array of the texts stored in the local storage

    notesObj.push(addText.value);//taking the text
    localStorage.setItem('notes', JSON.stringify(notesObj));// after updating the array putting the array back into the local storage
    addText.value = '';
    console.log(notesObj);

    showNotes();

})

//function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";//

    notesObj.forEach(function (element, index) {
        html += `
        <div class=" notesCard my-2 mx-2 card text-white bg-dark" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">
              ${element}
            </p>
            <a id=${index} onclick="deleteNode(this.id)" class="btn btn-outline-light">Delete Note</a>
          </div>
        </div>
        `
    });//we will have no of cards = no of text in the local storage

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;//getting the element in which there will be all the cards and then changing its innerhtml to show all the cards
    }
    else{
        notesElm.innerHTML= `Nothing to show! Add a note `
    }


}


//function to delete node
function deleteNode(index){
    console.log('I am deleting', index);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);//to delete specific elements from the array
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();

}


let search= document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal= search.value;

    let noteCards= document.getElementsByClassName('notesCard');//getting all the elements with notesCard class
    Array.from(noteCards).forEach(function(element){
        let cardTxt= element.getElementsByTagName("p")[0].innerText;//taking the paragraph element of all the noteCards
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){//if the searched value is present in the para
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})


/**
 * 1. Add Title
 * 2. 
 */