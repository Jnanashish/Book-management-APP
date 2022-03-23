import React, { useEffect } from 'react'

// import components
// import Header from "../../components/Header/Header"
import BookCard from "../../components/BookCard/BookCard"

import styles from "./home.module.css"

import {getBooks} from "./Helper"

const Home = () => {
    const [books, setBooks] = React.useState([]); 
    const [authorname, setAuthorname] = React.useState("");
    const [publicationerror, setPublicationerror] = React.useState("");
    useEffect(() => {loadBookData()}, [])
    const loadBookData = () => {
        getBooks().then(result => {
            setBooks(result);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            {/* <Header/> */}
            <div className={styles.search_con}>
                <input 
                    className={styles.search_input} 
                    type="text" 
                    placeholder='Author name'
                    value={authorname}
                    onChange={(e)=>setAuthorname(e.target.value)}
                />
                <input 
                    className={styles.search_input} 
                    type="text" 
                    placeholder='Publication year (yyyy format)'
                    value={publicationerror}
                    onChange={(e)=>setPublicationerror(e.target.value)}
                />
                <button className={styles.search_btn}>Search</button>
            </div>
            <div className={styles.bookcard_con}>
                {books.length === 0 && <h1>Loading data...</h1>}
                {books.length !== 0 && books.map(book => {
                    return <BookCard key={book.id} book={book}/>
                })}
            </div>
        </div>
    )
}

export default Home