import { useState } from "react"

function BookEdit({ book, onEdit, onShowEdit }) {

    const [title, SetTitle] = useState(book.title)

    const handleChange = (e) => {
        SetTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onEdit(book.id, title)
        onShowEdit()
    }

    return (
        <div>
            <form className="book-edit" onSubmit={handleSubmit} >
                <label>Title</label>
                <input className="input" onChange={handleChange} value={title} />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit