import React from 'react'

import styles from "./bookcard.module.css"

function BookCard(props) {
    const {bookname, author, image, noofcopies} = props.book;
    return (
        <div className={styles.bookcard}>
            <img className = {styles.book_coverimg} src={image} alt="" />
            <div className = {styles.book_details}>
                <h3 className = {styles.book_name}>{bookname}</h3>
                <h6 className={styles.book_author}>Author : {author}</h6>
   
                <p className={styles.book_count}><b>{noofcopies}</b> Copies avaiable</p>
                {/* <p className={styles.book_count}>Not avaiable</p> */}
                <button className = {styles.bookcard_btn}>Buy Now</button>
            </div>
        </div>        
    )
}

export default BookCard