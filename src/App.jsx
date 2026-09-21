import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Mar Olas, tranquilidad en cada ola!" />
      <hr style={{ margin: '2rem 0' }} />
      <ItemDetailContainer />
    </>
  );
}

export default App;