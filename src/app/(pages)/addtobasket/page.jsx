"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import {
  getBasket,
  removeBasket,
  updateQty,
  getBasketLength,
} from "@/Redux/features/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function AddToBasketPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { basketData } = useSelector((state) => state.basket);

  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  const increaseQty = (item, e) => {
    e.stopPropagation();
    const newQty = item.qty + 1;
    const base = item.discountPrice || item.price;
    const newFinal = (base * newQty).toFixed(2);

    dispatch(updateQty({ id: item.id, qty: newQty, finalPrice: newFinal }));
    dispatch(getBasket());
    dispatch(getBasketLength());
  };

  const decreaseQty = (item, e) => {
    e.stopPropagation();
    if (item.qty === 1) return;

    const newQty = item.qty - 1;
    const base = item.discountPrice || item.price;
    const newFinal = (base * newQty).toFixed(2);

    dispatch(updateQty({ id: item.id, qty: newQty, finalPrice: newFinal }));
    dispatch(getBasket());
    dispatch(getBasketLength());
  };

  const handleBuyNow = () => {
    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
    }, 3000);
  };

  return (
    <main>
      {showGif && (
        <div className="gif-overlay">
          <img
            src="https://www.icegif.com/wp-content/uploads/2023/11/icegif-139.gif"
            className="gif-image"
          />
        </div>
      )}

      <section className="basket-section">
        <h1 className="basket-title">Your Cart</h1>

        {basketData.length === 0 ? (
          <p className="empty-basket-text">Your basket is empty.</p>
        ) : (
          <div className="basket-list">
            {basketData.map((item) => (
              <div key={item.id} className="basket-item">
                {item.discountPrice &&
                  (item.category?.toLowerCase() === "drinks" ? (
                    <span className="sale-badge-drinks sale-basket">SALE</span>
                  ) : (
                    <span className="sale-badge-food sale-basket">SALE</span>
                  ))}

                <img
                  src={item.image}
                  alt=""
                  className="basket-img"
                  onClick={() => router.push(`/home/${item.id}`)}
                  style={{ cursor: "pointer" }}
                />

                <div className="basket-info">
                  <h3>{item.name}</h3>

                  {item.category === "DRINKS" && item.size && (
                    <h5 className="basket-size-text">Size: {item.size}</h5>
                  )}

                  <h4 className="basket-title-sm">{item.title}</h4>

                  <div className="basket-qty-box">
                    <button onClick={(e) => decreaseQty(item, e)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={(e) => increaseQty(item, e)}>+</button>
                  </div>

                  <div className="basket-prices">
                    {item.discountPrice ? (
                      <>
                        <span className="price">$ {item.finalPrice}</span>
                        <span className="old-price">$ {item.price}</span>
                      </>
                    ) : (
                      <span className="price">$ {item.finalPrice}</span>
                    )}
                  </div>
                  <button className="buy-btn" onClick={handleBuyNow}>
                    BUY NOW
                  </button>
                </div>

                <div className="trash">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeBasket(item.id));
                      dispatch(getBasket());
                      dispatch(getBasketLength());
                    }}
                    className="bin-button"
                  >
                    <svg
                      className="bin-top"
                      viewBox="0 0 39 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="5"
                        x2="39"
                        y2="5"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <line
                        x1="12"
                        y1="1.5"
                        x2="26.0357"
                        y2="1.5"
                        stroke="white"
                        strokeWidth="3"
                      />
                    </svg>

                    <svg
                      className="bin-bottom"
                      viewBox="0 0 33 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1" fill="white">
                        <path d="M0 0H33V35C33 37.2 31.2 39 29 39H4C1.7 39 0 37.2 0 35V0Z" />
                      </mask>

                      <path
                        d="M0 0H33H0ZM37 35C37 39.4 33.4 43 29 43H4C-0.4 43 -4 39.4 -4 35H4H29H37ZM4 43C-0.4 43 -4 39.4 -4 35V0H4V35V43ZM37 0V35C37 39.4 33.4 43 29 43V35V0H37Z"
                        fill="white"
                        mask="url(#path-1-inside-1)"
                      />

                      <path d="M12 6L12 29" stroke="white" strokeWidth="4" />
                      <path d="M21 6V29" stroke="white" strokeWidth="4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
