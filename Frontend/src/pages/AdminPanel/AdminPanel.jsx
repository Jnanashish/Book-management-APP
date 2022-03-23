import React,{useState, useEffect} from 'react'
import Addnewbook from '../../components/AddNewBook/Addnewbook'
import AdminBookCard from '../../components/AdminBookCard/AdminBookCard'

// import css
import styles from "./adminpanel.module.css"

import {getBooks} from "../../pages/Homepage/Helper"

function AdminPanel() {
    const [books, setBooks] = React.useState([]); 

    useEffect(() => {loadBookData()}, [])
    const loadBookData = () => {
        getBooks().then(result => {
            setBooks(result);
        }).catch(err => console.log(err));
    }
     return (
        <div className={styles.admin_con}>
        <Addnewbook/>
        {books.map(book => {
            return <AdminBookCard key={book.id} book={book}/>
        })}
        </div>
    )
}

export default AdminPanel