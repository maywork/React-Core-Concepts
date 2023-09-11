import './Book.css'

export default function Book({book}) {
  const {name, author, price} = book;
  return (
    <div className='book'>
      <h3>Book Name: {name}</h3>
      <h3>Written By: {author}</h3>
      <h3>Costs: {price}</h3>
    </div>
  )
}