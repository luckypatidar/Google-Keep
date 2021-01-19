import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const App = (props) => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (title) => {
    // alert("added successfully!");
    setAddItem((preData) => {
      return [...preData, title];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currData, index) => {
        return index !== id;
      })
    });
  };

  return (
    <>
      <Header />
      <CreateNote
        passNote={addNote}
      />

      { addItem.map((val, index) => {
        return (<Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
        );
      })
      };
      <Footer />
    </>
  );
};

export default App;