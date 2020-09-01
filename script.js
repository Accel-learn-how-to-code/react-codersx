//const test = React.createElement('h1', null, 'First time testing React!');
const root = document.getElementById('root');
const test = <h1>First time testing React!</h1>;

//Render một danh sách todo sử dụng ul, li React elements bao gồm các todo trong array sau:
const list = [
    'Go to market',
    'Buy food',
    'Make dinner'
];
const listMap = list.map(x => <li>{x}</li>);
const toDo = document.getElementById('toDo');
let toDoList = <ul>{listMap}</ul>
ReactDOM.render([test, toDoList], root);

