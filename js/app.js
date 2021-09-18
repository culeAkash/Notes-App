console.log('notes-app');

showNotes();

//If user adds a note, add it to the local storage
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';
    console.log(notesObj);

    showNotes();

})


function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
        <div class=" notesCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">
              ${element}
            </p>
            <a href="#" class="btn btn-primary">Delete Note</a>
          </div>
        </div>
        `
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML= `Nothing to show! Add a note `
    }


}