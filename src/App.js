import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        // console.log(note);
        setNotes(prevState => {
            return [...prevState, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevState => {
            return prevState.filter((noteItem,index)=>{
                return index!==id;
            });
        });
    }

    return (
        <div className="App">
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem, index) => {
                return <Note id={index} key={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
            })}
            <Footer/>
        </div>
    );
}

export default App;
