import React, { useState } from 'react';

function InputCreate({ onTaskCreate }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async () => {
    if (task.trim()) {
      try {
        const urlApi = 'http://localhost:5000/create'; // Asegúrate de que la URL es correcta
        const payload = { title: task };
        const response = await fetch(urlApi, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setTask('');
          onTaskCreate();
        }
      } catch (error) {
        console.error('Error al enviar la tarea:', error);
      }
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleInputChange} placeholder="Add a new task" />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default InputCreate;