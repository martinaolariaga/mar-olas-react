import { Link } from 'react-router-dom';

function NotFound() { 
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>404</h1>
      <p> 🌊 Uy, esta página se la llevó la marea. No la encontramos ni con binoculares...</p>
      <Link to="/">Volver a la orilla</Link>

    </div>
  )

}

export default NotFound; 
