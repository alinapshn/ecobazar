import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/money";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Socials } from "../../components/Socials";
import CloseIcon from "../../assets/img/icons/close-circle.svg";
import ArrowWhiteIcon from "../../assets/img/icons/arrow-right-white.svg";
import "./wishlistPage.scss";

export function WishlistPage() {
  const { wishlist, handleToggleWishlist } = useWishlist();

  const { addToCart } = useCart();

  return (
    <section className="wishlist">
      <div className="container">
        <div className="wishlist__wrapper">
          <h5>My Wishlist</h5>
          {wishlist.length > 0 ? (
            <div className="wishlist__grid">
              <div className="wishlist__grid-header">
                <p className="wishlist__grid-category">Product</p>
                <p className="wishlist__grid-category">Price</p>
                <p className="wishlist__grid-category">Stock Status</p>
                <p className="wishlist__grid-category"></p>
              </div>

              <div className="wishlist__grid-products">
                {wishlist.map((product) => (
                  <div key={product.id} className="wishlist__item">
                    <div className="wishlist__item-product">
                      <img src={product.image} alt={product.name} />
                      <span>{product.name}</span>
                    </div>

                    <div className="wishlist__item-price">
                      {!product.discountPriceCents ? (
                        <p>{formatCurrency(product.priceCents)}</p>
                      ) : (
                        <p>
                          {formatCurrency(product.priceCents)}
                          <span>
                            {formatCurrency(product.discountPriceCents)}
                          </span>
                        </p>
                      )}
                    </div>

                    {product.inStock ? (
                      <div className="wishlist__item-status wishlist__item-status--true">
                        In stock
                      </div>
                    ) : (
                      <div className="wishlist__item-status wishlist__item-status--false">
                        Out of Stock
                      </div>
                    )}

                    <div className="wishlist__item-actions">
                      {product.inStock ? (
                        <button
                          className="wishlist__item-btn button"
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          className="wishlist__item-btn button button--disabled"
                          onClick={() => {
                            addToCart(product);
                          }}
                          disabled
                        >
                          Add to Cart
                        </button>
                      )}

                      <button className="remove-btn">
                        <img
                          src={CloseIcon}
                          alt="remove"
                          onClick={() => handleToggleWishlist(product)}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wishlist__grid-socials">
                <Socials />
              </div>
            </div>
          ) : (
            <div className="wishlist__grid--empty">
              <p>Your wishlist is empty. Start shopping to add favorites!</p>
              <Link to={"/shop"}>
                <button className="button">
                  Shop Now
                  <img src={ArrowWhiteIcon} />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
