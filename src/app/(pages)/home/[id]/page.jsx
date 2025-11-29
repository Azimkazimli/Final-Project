"use client";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { IoCloseSharp, IoStar } from "react-icons/io5";
import { getCallApi } from "@/Redux/features/product/coffeeProductSlice";
import "./page.css";
import { getBasketLength } from "@/Redux/features/basket/basketSlice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const sizes = {
  tall: { label: "Tall", oz: "12 fl oz", extra: 0 },
  grande: { label: "Grande", oz: "16 fl oz", extra: 1.2 },
  venti: { label: "Venti", oz: "24 fl oz", extra: 2.4 },
};

export default function DetailPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { myBigData, loading } = useSelector((s) => s.coffeeProduct);

  const [size, setSize] = useState("tall");
  const [qty, setQty] = useState(1);

  const [newComment, setNewComment] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [localComments, setLocalComments] = useState([]);

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("success");

  useEffect(() => {
    if (!myBigData.length) {
      dispatch(getCallApi());
    }
  }, [myBigData.length, dispatch]);

  const item = myBigData.find((x) => x.id == id);

  useEffect(() => {
    if (item) setLocalComments(item.comments || []);
  }, [item]);

  const isDrink = item?.category?.toLowerCase() === "drinks";

  useEffect(() => {
    if (!item) return;

    try {
      const saved = localStorage.getItem(`detail-${item.id}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.qty) setQty(Number(parsed.qty));
        if (parsed.size && sizes[parsed.size]) setSize(parsed.size);
      }
    } catch (err) {
      console.log("restore detail state error:", err);
    }
  }, [item]);

  useEffect(() => {
    if (!item) return;

    const payload = {
      qty,
      size: isDrink ? size : null,
    };

    try {
      localStorage.setItem(`detail-${item.id}`, JSON.stringify(payload));
    } catch (err) {
      console.log("save detail state error:", err);
    }
  }, [item, qty, size, isDrink]);

  const finalPrice = useMemo(() => {
    if (!item) return "0.00";

    const base = Number(item.discountPrice || item.price) || 0;
    const q = Number(qty) || 1;

    if (isDrink) {
      return ((base + sizes[size].extra) * q).toFixed(2);
    }

    return (base * q).toFixed(2);
  }, [item, size, qty, isDrink]);

  const handleAddComment = async () => {
    const hasText = newComment.trim().length > 0;
    const hasRating = userRating > 0;
    if (!hasText && !hasRating) return;

    const newObj = {
      id: Date.now(),
      userName: "User",
      userImage:
        "data:image/png;base64,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",
      comment: newComment.trim(),
      date: new Date().toLocaleDateString("az-AZ"),
      rating: userRating,
    };

    const updatedComments = [...localComments, newObj];

    try {
      await axios.put(
        `https://691ae3342d8d7855757091d4.mockapi.io/myproducts/${id}`,
        { ...item, comments: updatedComments }
      );

      setLocalComments(updatedComments);
      setNewComment("");
      setUserRating(0);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    const updatedComments = localComments.filter((c) => c.id !== commentId);

    try {
      await axios.put(
        `https://691ae3342d8d7855757091d4.mockapi.io/myproducts/${id}`,
        { ...item, comments: updatedComments }
      );
      setLocalComments(updatedComments);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "40px" }}
      >
<div>Loading...</div>
      </div>
    );

  if (!item) return <p>Məhsul tapılmadı.</p>;

  return (
    <main>
      <section className="detail-section">
        <div className="detail">
          <div className="detail-page-img">
            {item.discountPrice && <span className="sale-badge">SALE</span>}
            <img src={item.image} alt="" />
          </div>

          <div className="detail-info">
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <div className="product-prices">
              {item.discountPrice ? (
                <>
                  <span className="discount-price">$ {finalPrice}</span>
                  <span className="old-price">$ {item.price}</span>
                </>
              ) : (
                <span className="single-price">$ {finalPrice}</span>
              )}
            </div>

            {isDrink && (
              <div className="sizes">
                {Object.entries(sizes).map(([key, s]) => (
                  <div
                    key={key}
                    data-size={key}
                    className="size-box"
                    onClick={() => setSize(key)}
                  >
                    <div
                      className={`icon-circle ${size === key ? "active" : ""}`}
                    >
                      <div className="cup-icon" />
                    </div>

                    <p>{s.label}</p>
                    <p>{s.oz}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="wishlist-box">
              <button
                className="wishlist-btn"
                onClick={() => {
                  let wishlist =
                    JSON.parse(localStorage.getItem("wishlist")) || [];
                  const exists = wishlist.find((p) => p.id == item.id);

                  if (exists) {
                    setAlertType("warning");
                    setAlertMsg("This product is already in your wishlist.");
                  } else {
                    wishlist.push(item);
                    localStorage.setItem("wishlist", JSON.stringify(wishlist));

                    setAlertType("success");
                    setAlertMsg("Product added to wishlist.");
                  }

                  setTimeout(() => setAlertMsg(""), 2500);
                }}
              >
                ❤️ ADD TO WISHLIST
              </button>
            </div>

            <div className="basket-box">
              <button
                className="basket-btn"
                onClick={() => {
                  let basket = JSON.parse(localStorage.getItem("basket")) || [];
                  const exists = basket.find((p) => p.id == item.id);

                  if (exists) {
                    setAlertType("warning");
                    setAlertMsg("This product is already in your cart.");
                  } else {
                    const toAdd = {
                      ...item,
                      qty,
                      size: isDrink ? size : null,
                      finalPrice,
                    };

                    basket.push(toAdd);
                    localStorage.setItem("basket", JSON.stringify(basket));

                    setAlertType("success");
                    setAlertMsg("Product successfully added to your cart.");
                  }

                  dispatch(getBasketLength());
                  setTimeout(() => setAlertMsg(""), 3000);
                }}
              >
                ADD TO CART
              </button>

              {alertMsg && (
                <Stack sx={{ width: "100%", marginTop: "15px" }}>
                  <Alert variant="filled" severity={alertType}>
                    {alertMsg}
                  </Alert>
                </Stack>
              )}
            </div>

            <div className="comments-wrapper">
              <h3 className="comments-title">Customer Reviews</h3>

              <div className="comments-list">
                {localComments.map((c) => (
                  <div className="comment-card" key={c.id}>
                    <div className="comment-top">
                      <div className="comment-user">
                        <img src={c.userImage} className="comment-avatar" />
                        <div>
                          <h4 className="comment-username">{c.userName}</h4>
                          <span className="comment-date">{c.date}</span>
                        </div>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteComment(c.id)}
                      >
                        <IoCloseSharp size={20} />
                      </button>
                    </div>

                    <p className="comment-text">{c.comment}</p>

                    {c.rating > 0 && (
                      <div className="comment-stars">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <IoStar
                            key={n}
                            className={n <= c.rating ? "star active" : "star"}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="write-comment">
                <div className="select-stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <IoStar
                      key={n}
                      className={n <= userRating ? "star active" : "star"}
                      onClick={() => setUserRating(userRating === n ? 0 : n)}
                    />
                  ))}
                </div>

                <textarea
                  placeholder="Comments..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="comment-area"
                ></textarea>

                <button className="send-btn" onClick={handleAddComment}>
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




