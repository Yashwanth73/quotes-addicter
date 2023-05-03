import Head from 'next/head';
import dailyquotes from '../data/daily_quotes.json';


export default function Home() {
  // const [clicked, setclicked] = useState(false);
  const randomNum = Math.floor(Math.random() * dailyquotes.length);
  return (
    <div className=''>
      <Head>
        <title>QuotesAddicter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/quote.png" />
      </Head>
      <main>

        <div className='relative overflow-hidden bg-cover bg-indigo-200'>
          <div className="text-center tect-gray-800">
            <h1 className='text-center text-6xl font-medium tracking-tight py-5'>Welcome To <span className='text-orange-400 font-bold'> <span className='text-blue-800'> Quotes</span> Addicter</span></h1>
            <div className="block rounded-lg shadow-xl px-6 py-12 md:py-16 md:px-12 bg-white md:mt-32 md:mx-20 mt-16 mx-10 mb-10 shadow-current">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">{dailyquotes[randomNum].text}</h1>
              {dailyquotes[randomNum].author && <p className='text-4xl font-bold text-blue-600 tracking-tight'>-{dailyquotes[randomNum].author}</p>}
            </div>
          </div>
        </div>
        <div className="">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-5xl mb-2 text-gray-900">Unlimited Quotes</h1>
                  <p className="leading-relaxed text-2xl">Over 1643 Quotes and 676 Authors are available in this Quotes Addicter Website</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">1643</h2>
                  <p className="leading-relaxed">Quotes</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl text-gray-900">676</h2>
                  <p className="leading-relaxed">Authors</p>
                </div>

              </div>
              <div className="lg:w-1/2 sm:w-1/3 w-full h-2/3 rounded-lg overflow-hidden mt-6 sm:mt-0">
                <img className="object-cover object-center w-full h-full" src="./quote.png" alt="stats" />
              </div>
            </div>
          </section>
        </div>
      </main>


    </div>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: { quotes }, // will be passed to the page component as props
//   }
// }
