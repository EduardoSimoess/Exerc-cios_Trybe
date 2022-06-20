// import logo from './logo.svg';
import './App.css';
const array = ['Comer', 'Dormir', 'Limpar a casa', 'Tirar o lixo', 'Cozinhar'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  const valor = array.map((item) => Task(item));
  return <ul>{valor}</ul>;
}

export default App;
