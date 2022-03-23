import React,{useState} from 'react'

import styles from "./addnewbook.module.css"

function Addnewbook() {
    const [bookname, setBookname] = useState("")
    const [authorname, setAuthoename] = useState("")
    const [bookimage, setBookimage] = useState("")
    const [noofcopies, setNoofcopies] = useState("")
    const [publicationyear, setPublicationyear] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8000/api/addbook",{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookname: bookname, author:authorname, image:bookimage, noofcopies:noofcopies, publicationstartyear:publicationyear })
        })
        .then(() => alert("Book Added Successfully"))
        .catch(() => alert("An error Occured"))
    }

    return (
    <div className={styles.admin_con}>
        <div className={styles.admin_inputfield_con}>
            <h3 className={styles.admin_inputlabel}>Add New Book : </h3>
            <input 
                className={styles.admin_input} 
                type="text" 
                placeholder="Name of the book" 
                value={bookname}
                onChange={(e)=>setBookname(e.target.value)}
            />
        </div>
        <div className={styles.admin_inputfield_con}>
            <h3 className={styles.admin_inputlabel}>Author Name: </h3>
            <input 
                className={styles.admin_input} 
                type="text" 
                placeholder="Author Name" 
                value={authorname}
                onChange={(e)=>setAuthoename(e.target.value)}
            />
        </div>
        <div className={styles.admin_inputfield_con}>
            <h3 className={styles.admin_inputlabel}>Url of Image cover: </h3>
            <input 
                className={styles.admin_input} 
                type="text" 
                placeholder="Cover Image of book" 
                value={bookimage}
                onChange={(e)=>setBookimage(e.target.value)}
            />
        </div>
        <div className={styles.admin_inputfield_con}>
            <h3 className={styles.admin_inputlabel}>No of Copies: </h3>
            <input 
                className={styles.admin_input} 
                type="text" 
                placeholder="Available copies"
                value={noofcopies}
                onChange={(e)=>setNoofcopies(e.target.value)}
            />
        </div>
        <div className={styles.admin_inputfield_con}>
            <h3 className={styles.admin_inputlabel}>Publication year: </h3>
            <input 
                className={styles.admin_input} 
                type="text" 
                placeholder="Publication year (yyyy-mm-dd format)"
                value={publicationyear}
                onChange={(e)=>setPublicationyear(e.target.value)}
            />
        </div>
        <button onClick={handleSubmit} className={styles.addbook_btn}>Add Book +</button>
    </div>
    )
}

export default Addnewbook