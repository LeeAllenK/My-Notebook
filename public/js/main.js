const deleteBtn = document.querySelectorAll('.fa-trash');
const noteIncomplete = document.querySelectorAll('span.not');
const noteComplete = document.querySelectorAll('span.completed');

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteNote);
})

Array.from(noteIncomplete).forEach((el)=>{
    el.addEventListener('click', markComplete);
})

Array.from(noteComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete);
})

async function deleteNote(){
    const noteId = this.parentNode.dataset.id;
    try{
        const response = await fetch('notes/deleteNote', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'noteIdFromJSFile': noteId
            })
        })
        const data = await response.json();
        location.reload();
       return data;
    }catch(err){
       return err;
    }
}

async function markComplete(){
    const noteId = this.parentNode.dataset.id;
    try{
        const response = await fetch('notes/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'noteIdFromJSFile': noteId
            })
        })
        const data = await response.json();
        location.reload();
        return data;
    }catch(err){
        return err;
    }
}

async function markIncomplete(){
    const noteId = this.parentNode.dataset.id;
    try{
        const response = await fetch('notes/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'noteIdFromJSFile': noteId
            })
        })
        const data = await response.json();
        location.reload();
        return data;
    }catch(err){
        return err;
    }
}