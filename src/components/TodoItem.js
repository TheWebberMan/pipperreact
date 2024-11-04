function TodoItem({ key, title, username }) {

    const todoItemStyle = {
        color: 'black',
        padding: '1.5em',
        border: '1px solid black', 
        borderRadius: '5px',
        marginBottom: '1em',
        marginTop: '1em',
        maxWidth: 'fit-content',
     }

    return (
        <div id={key} style={todoItemStyle}>{username} <br/> {title}</div>
    )
}

export default TodoItem;