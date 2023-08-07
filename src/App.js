import { useEffect, useState } from 'react'
import './App.css';
import  { Login }  from './components/Login';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Header from './components/Header';

function App() {
  const [images, setImages] = useState([]);
  const [login, setLogin] = useState(false);

  const imagesCollectionRef = collection(db, 'images');

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await getDocs(imagesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
      } catch (err) {
        console.log(err);
      } 
    }
    getImages();
  }, []);

  function loginState(state) {
    setLogin(state);
  }

  return (
    <div className="App">
      <Header login={login} loginState={loginState}/>
      {login ?  <Login loginState={loginState}/> : ''}
    </div>
  );
}

export default App;
