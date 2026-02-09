import { useState, useEffect } from "react";
import { WishlistContext } from "./WishlistContext";

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleToggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isExist = prevWishlist.find((item) => item.id === product.id);

      if (isExist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });

    console.log("yass", product);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, handleToggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
