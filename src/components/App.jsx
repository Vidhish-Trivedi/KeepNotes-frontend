import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    // pass a note object up from child.
    function addNote(note) {
        setNotes((prev) => {
            return([...prev, note])
        })
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote} num={notes.length} />
            {notes.map((note) => {
                return(
                    <Note key={note.id} title={note.title} content={note.content}/>
                );
            })}
            <Footer />
        </div>
    );
};

export default App;
