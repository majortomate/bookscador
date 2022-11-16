import Image from "next/image"

function BookCard({book}) {
  return (
    <>
      <div>
        <Image src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} width={150} height={200}/>
      </div>
      <div>
        <h2>{book.volumeInfo.title}</h2>
      </div>
    </>
  )
}

export default BookCard
