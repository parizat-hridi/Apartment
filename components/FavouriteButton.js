import { useState } from "react";
const FavoriteBtn = () => {
  const handleFavorite = () => {
    setFavoriteBtn(!favoriteBtn);
  };
  const [favoriteBtn, setFavoriteBtn] = useState(false);
  return (
    <div>
      <button
        className="bg-pink-700 text-white font-bold ml-4 py-2 px-5 mt-5 rounded-full"
        onClick={handleFavorite}
      >
        {favoriteBtn ? "Remove From Favorites" : "Add to favorites"}
      </button>
    </div>
  );
};
export default FavoriteBtn;
