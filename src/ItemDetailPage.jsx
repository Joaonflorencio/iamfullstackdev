import { Link } from 'react-router-dom';

const ItemDetailPage = ({ item }) => {
  // Función para formatear el estado de completado
  const renderCompletedStatus = (completed) => {
    return completed ? "Sí" : "No";
  };

  return (
    <>
      <h3>{item.title}</h3>
      <p>Completada: {renderCompletedStatus(item.completed)}</p>
      {/* Asumiendo que el objeto 'item' puede tener una descripción */}
      {item.description && <p>Descripción: {item.description}</p>}
      {/* Botón de regreso (asumiendo que tienes una ruta principal que muestra todas las tareas) */}
      <Link to="/">Volver a la lista de tareas</Link>
    </>
  );
};

export default ItemDetailPage