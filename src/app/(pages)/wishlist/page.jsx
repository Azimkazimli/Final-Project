"use client";
import React, { useEffect } from "react";
import "./page.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getWishlist,
  removeWishlist,
} from "@/Redux/features/wishlist/wishlistSlice";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { wishlistData } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, []);

  return (
    <main>
      <section className="wishlist-section">
        <h1 className="wishlist-title">Your Wishlist</h1>

        {wishlistData.length === 0 ? (
          <p className="wishlist-empty">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-list">
            {wishlistData.map((item) => (
              <div key={item.id} className="wishlist-item">
                {item.discountPrice && (
                  <span className="wishlist-sale">SALE</span>
                )}

                <img
                  src={item.image}
                  alt=""
                  className="wishlist-img"
                  onClick={() => router.push(`/home/${item.id}`)}
                />

                <div className="wishlist-info">
                  <h3>{item.name}</h3>
                  <p className="wishlist-title-sm">{item.title}</p>

                  <div className="wishlist-prices">
                    {item.discountPrice ? (
                      <>
                        <span className="price">$ {item.discountPrice}</span>
                        <span className="old-price">$ {item.price}</span>
                      </>
                    ) : (
                      <span className="price">$ {item.price}</span>
                    )}
                  </div>
                </div>

                <button
                  className="wishlist-remove"
                  onClick={() => dispatch(removeWishlist(item.id))}
                >
                  REMOVE
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
