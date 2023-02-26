import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Delete = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/deletedetails");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

 
  return (
    <div>
      <h1>delete post</h1>
      <div className="books">
        {books.map((post) => (
          <div key={post.postnumber} className="book">
            <img src={post.detail} alt="" />
            <h2>{post.detail}</h2>
      
            <Link to="/updatedetails"><button type="submit" className="btn btn-primary" name="submit" onClick={Delete}>UPDATE</button>          
                  </Link>
            
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Delete;