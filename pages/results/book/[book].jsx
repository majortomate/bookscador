import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Book({data}) {
  const seoTitle = `${data.volumeInfo?.title} - Bookscador`;

  return (
    <div className='single__container'>
      {data ?
          <>
          <Head>
              <title>
                {seoTitle}
              </title>
              <meta name="description" content={seoTitle} />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='left__column'>
          <div className='single__details'>
            <h2>{data.volumeInfo?.title}</h2>
            <div className="image__container">
              <Image src={data.volumeInfo?.imageLinks ? data.volumeInfo.imageLinks?.thumbnail : "https://res.cloudinary.com/knowhere/image/upload/v1668641466/Bookscador/static/no_cover_cm8hua.jpg"} alt={data.volumeInfo?.title ? data.volumeInfo?.title : "alttext"} width={150} height={200} />
            </div>
          </div>
          <div className="details__container">
            <div className="info__container">
              <p><strong>Author:</strong> {data.volumeInfo?.authors?.map(author => (author))} </p>
              <p><strong>Publisher:</strong> {data.volumeInfo?.publisher}</p>
              <p><strong>Published Date:</strong> {data.volumeInfo?.publishedDate}</p>
              <p><strong>Number of Pages:</strong> {data.volumeInfo?.pageCount}</p>
            </div>
          </div>
        </div>
        <div className='right__column'>
            <div className='single__details'>
              <h2>Book Description</h2>
              <div className="info__container">
                <p>{data.volumeInfo?.description} </p>
              </div>
              <div className="search__button">
                <Link href={data.volumeInfo?.previewLink} target="_blank">
                  <button>But This Book</button>
                </Link>
              </div>
            </div>
        </div>
          </> : null  
    }
      </div>
  )
}
// This gets called on every request
export async function getServerSideProps(context) {
  const { book } = context.params;
  // Fetch data from external API
  const response = await fetch(`${process.env.NEXT_PUBLIC_SINGLE_BOOK}${book}?key=${process.env.NEXT_PUBLIC_KEY}`);
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Book
