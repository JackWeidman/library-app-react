import React from "react";
import BookObject from "./BookObject";
import { books } from '../BookData.js';

export default function BookObjectList(){
    return (
        <div className="book-container">
            {books.map((bookData) =>(
                <BookObject key={bookData.id} book={bookData}/>
            ))}
        </div>
    );
};
