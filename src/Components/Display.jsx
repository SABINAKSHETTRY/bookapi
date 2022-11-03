import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

export default function Display() {
    // jaile pani react function bhtra hook use garne
    const [store, setStore] = useState([]);

    async function getBook() {
        try {
            let result = await axios.get(
                "https://example-data.draftbit.com/books?_limit=18"
            );
            //   console.log(result.data)
            setStore(result.data);
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        getBook();
    }, []);
    // useEffect bhaneko eauta function ho jasle duita parameter linxa;  eauta function use garxa ani dependency array use garxa

    return (
        <div className="booksholder">
            {store.map((book) => {
                return (
                    <div className="displays">
                        <div className="bookholder">
                            <div className="images">
                                <img src={book.image_url} alt="" />
                            </div>
                            <div className="bookname">
                                <h3>{book.title}</h3>
                            </div>

                            <Link
                                to={{
                                    pathname: "/description",
                                }}
                                state={{
                                    book: book,
                                }}
                            >
                                <button>Description</button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
