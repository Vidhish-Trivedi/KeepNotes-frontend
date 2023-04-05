import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    function handleTitle(event){
        setTitle(event.target.value);
    }

    function handleContent(event){
        setContent(event.target.value);
    }

    function handleAdd(event){
        props.onAdd({
            key: props.num + 1,
            title: title,
            content: content
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleTitle} name="title" placeholder="Title" value={title} />
                <textarea
                    onChange={handleContent}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={content}
                />
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
