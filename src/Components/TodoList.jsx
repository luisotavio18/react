import '../style.css';
 
function TodoList () {
    const tasks = [
        { id: 1, text: 'Aprender React'},
        { id: 2, text: 'Construir um projeto simples'},
        { id: 3, text: 'Entender Props e State'},
    ];
 
return (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>{task.text}</li>
        ))
        }
    </ul>
);
 
}
 
export default TodoList;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
