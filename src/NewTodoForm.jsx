import React, { useState } from 'react'

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() === '') return

    addTodo(newItem)
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item-name">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id='item-name'
        />
      </div>
      <button className='btn' type='submit'>Add</button>
    </form>
  )
}

export default NewTodoForm
