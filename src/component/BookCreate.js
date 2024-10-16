import { useState } from "react";

function BookCreate({ onCreate }) {

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title);
        setTitle('')
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Add Book</h3>
                <input className="input" onChange={handleChange} value={title} />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default BookCreate