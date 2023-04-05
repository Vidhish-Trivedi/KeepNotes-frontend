import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isExpanded, setExpanded] = useState(false);

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleContent(event) {
        setContent(event.target.value);
    }

    function handleAdd(event) {
        props.onAdd({
            key: props.num + 1,
            id: props.num,
            title: title,
            content: content,
        });
        setTitle("");
        setContent("");
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? (
                    <input
                        onChange={handleTitle}
                        name="title"
                        placeholder="Title"
                        value={title}
                    />
                ) : null}
                <textarea
                    onChange={handleContent}
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    value={content}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleAdd}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
