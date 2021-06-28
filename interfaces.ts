function show(todo: {title: string, text: string}){
    console.log(todo.title + '----' + todo.text);
}

let tods = {title:'lol', text:'apex'}
show(tods);


interface Todo{
    title: string, 
    text: string,
}

function show(todo: Todo){
    console.log(todo.title + '----' + todo.text);
}

let tods = {title:'lol', text:'apex'}
show(tods);