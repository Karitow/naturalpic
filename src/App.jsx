import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import PhotoContext from "./context/PhotoContext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const PHOTO_URL = '/photos.json'

const App = () => {
  const [photos, setPhotos] = useState([])
  const getPhotos = async () => {
    const response = await fetch(PHOTO_URL)
    let { photos } = await response.json()
    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      alt: photo.alt,
      liked: false
    }))
    setPhotos(photos)
  }

  const setFavorito = (id) => {
    const photoIndex = photos.findIndex((f) => f.id === id)
    photos[photoIndex].liked = !photos[photoIndex].liked
    setPhotos([...photos])
  }

  useEffect(() => {
    getPhotos()
  }, [])
  return (
    <>
      <PhotoContext.Provider value={{ photos, setFavorito }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoContext.Provider>
    </>
  );
};
export default App;