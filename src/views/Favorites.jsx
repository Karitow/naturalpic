import { useContext } from "react";
import PhotoContext from "../context/PhotoContext";
import NotFound from "../components/NotFound";

const Favorites = () => {
  const { photos } = useContext(PhotoContext)
  const favPhotos = photos.filter((photo) => photo.liked).length
  return (
    <div className="App">
      <h1>📸 Fotografías favoritas 📸 </h1>
      <div className="gallery grid-columns-5 p-3">
        {favPhotos === 0
          ? (<NotFound/>)
          : (
              photos
                .filter((photo) => photo.liked)
                .map((photo, i) => <img src={photo.src} alt={photo.alt} key={i}/>)
            )}
      </div>
    </div>
  );
};
export default Favorites;