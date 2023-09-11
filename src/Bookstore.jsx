import Book from "./Book"

export default function Bookstore({books}) {
  return (
    <div style={{border: '2px solid purple',borderRadius:'8px', padding: '15px', margin: '15px'}}>
      <h3>Books: {books.length}</h3>
      {
        books.map(book => <Book book={book}></Book>)
      }
    </div>
  )
}