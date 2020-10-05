import React, { useState } from 'react';

interface Props {
    onSubmitForm: (label: string) => void
}

function AddTodoForm({ onSubmitForm }: Props) {

    const [label, setLabel] = useState("");

    function handleChangeLabel(event: React.ChangeEvent<HTMLInputElement>) {
        const newLabel = event.target.value;
        setLabel(newLabel)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(label) {
            onSubmitForm(label);
            setLabel("");
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Add todo" value={label} onChange={handleChangeLabel} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodoForm