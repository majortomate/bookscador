import Image from "next/image"
import Link from "next/link"

function BookCard({book}) {
  return (
    <>
      <div className="image__container">
        <Image src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks?.thumbnail : "https://res.cloudinary.com/knowhere/image/upload/v1668641466/Bookscador/static/no_cover_cm8hua.jpg"} alt={book.volumeInfo.title} width={150} height={200}/>
      </div>
      <div className="details__container">
        <div className="title__container">
          <h2>{book.volumeInfo.title}</h2>
        </div>
        <div className="info__container">
          <p><strong>Author:</strong> {book.volumeInfo.authors?.map(author => ( author))} </p>
          <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
        </div>
        <div className="search__button">
          <Link href={`/results/book/${book.id}`}>
              <button>More Details</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookCard
