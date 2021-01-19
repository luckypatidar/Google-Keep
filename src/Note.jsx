import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './App.css';

const Note = (props) => {

    const deleteNote = (e) => {
        props.deleteItem(e.id);
    }
    return (
        <>
            <div className="main_div">
                <div className="added_note">
                    <h1 className="heading_add">{props.title}</h1>
                    <p className="paragraph">{props.content}</p>
                    <Fab className="delete_icon"
                        onClick={deleteNote}>
                        <DeleteOutlineIcon
                            style={{ color: '#fcba03' }}
                        />
                    </Fab>
                </div>
            </div>
        </>
    )
}
export default Note;