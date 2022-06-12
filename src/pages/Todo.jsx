import React from "react";

function Todo(props) {

    const style = {
        width: '85vw',
        maxWidth: '400px',
        height: '200px',
        fontSize: '7rem',
        border: '2px dotted gray',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
    }

    const margin = {
        marginTop: '-20px'
    }

    return(
        <div style={style}>
            <i className={props.icon} style={margin}/>
            <h5 style={margin}>{props.value}</h5>
        </div>
    );
}

export default Todo;