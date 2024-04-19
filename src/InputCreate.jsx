import { useState } from 'react'

function InputCreate () {
  const [title, setTitle] = useState('')
  const [res, setRes] = useState('Por ahora no')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const urlApi = import.meta.env.VITE_APP_API_URL+'create'
    const payload = { title }

    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      setRes(data.title)
      setTitle('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='añade tu tarea'
        value={title}
        onChange={handleChange}
        required
      />
      <button type="submit">Añade tarea</button>
    </form>
    <div>{`Se ha enviado: ${res}`}</div>

    </>
  )
}

export default InputCreate