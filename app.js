'use strict';


let banco = [
    {'tarefa':'Estudar js', 'status': ''},
    {'tarefa': 'netflix', 'status': 'checked'}
];


// Função criar tarefa
const criarItem = (tarefa, status='') => {
    const item = document.createElement ('label');
    item.classList.add('todo_item');
    item.innerHTML= `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">
    `
    document.getElementById('todolist').appendChild(item);
    
}

const atualizarTela = () => {
    banco.forEach (item => criarItem (item.tarefa));
}

atualizarTela ()