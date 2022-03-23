import React, {useState} from 'react'

import styles from "./adminbookcard.module.css"


function AdminBookCard(props) {
    const [noofcopy, setNoofcopy] = useState("")
    const {bookname, image, noofcopies, author} = props.book;
    
    const id = props.book._id;

    const handleDelete = (id) =>{ 
        fetch(`http://localhost:8000/api/deletebook/${id}`, { method: 'DELETE' })
        .then(() =>
            alert('Data Deleted Successfully')
        ) 
        .catch(() => {
            alert.error("An error Occured")
        })
    }

    const addnewcopy = (id) =>{
        fetch(`http://localhost:8000/api/updateBookcount/${id}`, { 
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: noofcopy})
        })
        .then(() =>
            alert('Data Added Successfully'),
            setNoofcopy("")
        ) 
        .catch(() => {
            alert.error("An error Occured")
        })
    }

    return (   
        <div className={styles.bookcard}>
            <img className={styles.bookcard_bookimg} src={image} alt="" />
            <div className = {styles.book_details}>
                <h3 className = {styles.book_name}>{bookname}</h3>
                <h6 className={styles.book_author}>Author : {author}</h6>

                <p className={styles.book_count}><b>{noofcopies}</b> Copies avaiable</p>
            </div>
            <div className={styles.edit_details}>
                <button onClick={() => handleDelete(id)} className={styles.bookdelete_btn}>Delete</button>
                <input 
                    className={styles.bookcount_input} 
                    type="text"  
                    placeholder='Enter no of new copy'
                    value={noofcopy}
                    onChange={(e)=>setNoofcopy(e.target.value)}
                />
                <button onClick={() => addnewcopy(id)} className={styles.bookadd_btn}>Add New Copies</button>
            </div>                
        </div>      
    )
}

export default AdminBookCard