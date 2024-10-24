function saveNotes() {
    const notesInput = document.getElementById('notes-input');
    const notesList = document.getElementById('notes-list');

    if (notesInput.value.trim() !== "") {
        const noteText = notesInput.value;
        const li = document.createElement('li');
        li.textContent = noteText;

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'; 
        editButton.onclick = function() {
            notesInput.value = noteText; 
            li.remove(); 
            removeNoteFromStorage(noteText); 
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; 
        deleteButton.onclick = function() {
            li.remove(); 
            removeNoteFromStorage(noteText); 
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        notesList.appendChild(li);

        let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(savedNotes));

        notesInput.value = '';
    }
}

function removeNoteFromStorage(noteText) {
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes = savedNotes.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
}

window.onload = function() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const notesList = document.getElementById('notes-list');
    savedNotes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'; 
        editButton.onclick = function() {
            document.getElementById('notes-input').value = note; 
            li.remove(); 
            removeNoteFromStorage(note); 
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = function() {
            li.remove(); 
            removeNoteFromStorage(note); 
        };

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        notesList.appendChild(li);
    });
};
