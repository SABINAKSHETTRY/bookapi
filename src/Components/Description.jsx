import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

export default function Description(props) {
    const location = useLocation();
    let singleBook = location.state.book;

    return (
        <div className="descriptionhold">
            <div className="imageholder">
                <img src={singleBook.image_url} alt="" />
            </div>
            <div className="title">Name of the Book: {singleBook.title}</div>
            <div className="author">Author: {singleBook.authors}</div>
            <div className="ratings">Rating : {singleBook.rating}</div>
            <div className="descriptions">Description : {singleBook.description}</div>
            
        </div>
);
}
