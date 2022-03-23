export const getBooks = (pagenum) =>{
    return fetch("http://localhost:8000/api/books", {method : "GET"})
    .then(res => {
        return res.json()
    })
    .catch(err => {
        return err
    });
}