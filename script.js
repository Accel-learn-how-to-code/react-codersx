const test = React.createElement('h1', null, 'First time testing React!');
const root = document.getElementById('root');
ReactDOM.render(test, root);

const list = [
    'Go to market',
    'Buy food',
    'Make dinner'
];
//const listMap = list.map(x => '<li>' + x +'</li>');
const listMap = list.map(x => React.createElement('li', null, x));
const toDo = document.getElementById('toDo');
let toDoList = React.createElement('ul', null, listMap);
ReactDOM.render(toDoList, toDo);
//ReactDOM.render(<ul>{listMap}</ul>, toDo);