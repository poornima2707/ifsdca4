import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {book.map((item) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                const amount = item.saleInfo.listPrice?.amount;

                if (thumbnail && amount) {
                    return (
                        <div
                            className="card"
                            onClick={() => { setShow(true); setItem(item); }}
                            key={item.id}
                        >
                            <img src={thumbnail} alt={item.volumeInfo.title} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            {show && <Modal show={show} item={bookItem} onClose={() => setShow(false)} />}
        </>
    );
};

export default Card;
