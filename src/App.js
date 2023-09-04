import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <Navbar navHead='TextUtils' />
      <TextForm textarea = 'Enter your text here' />

    </>
  );
}

export default App;
