import React from "react";
import BookObject from "./BookObject";
import { book } from '../BookData.js';

export default function BookObjectList(){
    return (
        <div className="book-container">
            {book.map((bookData) =>(
                <BookObject key={bookData.id} book={bookData}/>
            ))}
        </div>
    );
};
