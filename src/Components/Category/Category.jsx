"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./category.css";
import { useDispatch } from "react-redux";

const ProductCategory = ({ item, props }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    // { // ?-----------------------Categgory Component----------------------- */}
    <div
      className="menu-item"
      onClick={() => router.push(`/home/${item.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="menu-item-img">
        <img src={item.image} />
      </div>

      <div className="menu-item-info">
        <div className="menu-item-header">
          <h2 className="menu-item-title">{item.name}</h2>

          <div className="menu-item-line"></div>

          <div className="menu-item-prices">
            {item.discountPrice ? (
              <>
                <span className="discount-price">{item.discountPrice} $</span>

                <span className="old-price">{item.price} $</span>
              </>
            ) : (
              <span className="single-price">{item.price} $</span>
            )}
          </div>
        </div>

        <h3 className="menu-item-desc">
          {(item.title.length > 50 ? item.title.slice(0, 50) : item.title) +
            "..."}
        </h3>
      </div>
    </div>
  );
};

export default ProductCategory;
