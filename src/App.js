import { useEffect, useState } from 'react'
import './App.css';
import { Auth } from './components/Auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Header from './components/Header';

function App() {
  const [images, setImages] = useState([]);

  const imagesCollectionRef = collection(db, 'images')

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
  }, [])

  return (
    <div className="App">
      <Header />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
