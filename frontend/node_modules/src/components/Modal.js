import React from 'react';

const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="inner-box">
                        {thumbnail && <img src={thumbnail} alt="Book thumbnail" />}
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            {item.volumeInfo.authors && item.volumeInfo.authors.map((author, index) => (
                                <h3 key={index}>{author}</h3>
                            ))}
                            <h4>
                                {item.volumeInfo.publisher}
                                <span>{item.volumeInfo.publishedDate}</span>
                            </h4>
                            <br />
                            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                <button>More</button>
                            </a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    );
};

export default Modal;
