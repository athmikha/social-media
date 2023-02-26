import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';

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

  const handleDelete = async (postnumber) => {
    try {
        console.log('delete')

      //await axios.delete(`http://localhost:8000/books/${postnumber}`);
      fetch(`http://localhost:8000/delete`,{
        method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({postnumber}),
                                    
                                  
      })
      console.log('delete')
      console.log({postnumber})
      
    } catch (err) {
      console.log(err);
    }
  };
  
  function Card(props) {
    return (
        <tr>
              <td className="postnumber">{props.postnumber}</td>
             
              <td className="title">{props.title}</td>
              <td className="detail">{props.detail}</td>
              <td className="date1">{props.date1}</td>
             
        </tr>
    );
  }
  function createCard(data){
          
    return (
        <Card
          key={data.postnumber}
          postnumber={data.postnumber}
          title={data.title}
          detail={data.detail}
          date1={data.date1}
         
          />
      );
  }
  function getProducts(){
    console.log('gp called')
   const root = ReactDOM.createRoot(document.getElementById('billList'));
              // Simple GET request using fetch
              fetch('http://localhost:8000/viewdetails').then(response=>response.json())
              .then(data => {
                  console.log(data);
                  root.render(
                      <div className="billList">
                          
                          <table >
                  <tr>
                  <th className="postnumber">postnumber</th>
                  <th className="title">title </th>
                  <th className="detail">detail</th>
                  <th className="date1">date1</th>
                  
                  
              </tr>
              {data.map(createCard)}
              
              </table>
                      </div>)
              });
    
            }

  return (
    <div>
      <h1 className="books text-center" >delete post</h1>
      <div className="books text-center pb-70">
      
        {books.map((book) => (
          <div key={book.postnumber} className="book text-center">
            <img src={book.detail} alt="" />
            <h2>{book.detail}</h2>
      
            <button className="btn btn-primary add  pb-70" onClick={() => handleDelete(book.postnumber)}>Delete</button>
            
          </div>

        ))}
        
          <button type="button" className="btn btn-primary add text-center" onClick={getProducts}>View </button>
      </div>
      <div className="adbillList" id="billList">
           
           </div>
      
    </div>
  );
};

export default Delete;