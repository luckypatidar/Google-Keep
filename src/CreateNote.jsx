import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './App.css';

const CreateNote = (props) => {

    const [title, setTitle] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.value;

        const { name, value } = event.target;

        setTitle((preData) => {
            return {
                ...preData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(title);
        setTitle({
            title: '',
            content: '',
        });
    };

    return (
        <>
            <div className="note_div">
                <form>
                    <input type="text"
                        placeholder="Title"
                        name="title"
                        value={title.title}
                        onChange={InputEvent}
                        autoComplete="off" />
                    <textarea rows="" column="" className="textarea"
                        placeholder='Write a note...'
                        name="content"
                        value={title.content}
                        onChange={InputEvent}
                        contentEditable="true"></textarea>
                    <Fab
                        className="plus_btn"
                        color="extended"
                        onClick={addEvent} >
                        <AddIcon style={{ color: '#fcba03' }} />
                    </Fab>
                </form>
            </div>
        </>
    );
};

export default CreateNote;