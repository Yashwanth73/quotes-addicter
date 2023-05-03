import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import quotes from '../data/quotes_unlimited.json';


const Authors = ({ mydata }) => {
    const authlen = mydata.length;
    console.log(authlen);

    return (
        <div>
            <Head>
                <title>Authors</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/quote.png" />
            </Head>
            <h1 className='text-4xl text-center font-semibold'> Authors :-</h1>
            <main>


                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            {
                                mydata.map((quote) => {
                                    // const fletter = quote.author.split(' ').map(word => word[0]);
                                    return quote.author && <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div
                                            class="h-full flex items-center border-gray-200 border p-4 rounded-xl hover:bg-blue-100 hover:shadow-orange-100 hover:shadow-md"
                                        >

                                            <div class="inline-flex overflow-hidden relative justify-center items-center w-14 h-14 bg-gray-100 rounded-full dark:bg-gray-600 mx-2">
                                                <span class="font-medium text-gray-600 dark:text-gray-300">{quote.author.split(' ').map(word => word[0])}</span>
                                            </div>
                                            <Link href={'/QuotesPage/' + quote.author}>     <div class="flex-grow">
                                                <h2 class="text-gray-900 title-font font-medium">
                                                    {quote.author}
                                                </h2>
                                                {/* <p class="text-gray-500">Product Manager</p> */}
                                            </div></Link>
                                        </div>
                                    </div>

                                })
                            }

                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Authors
export async function getServerSideProps(context) {
    let mydata = quotes.filter((obj, pos, arr) => {
        return arr.map(mapObj =>
            mapObj.author).indexOf(obj.author) == pos;
    });
    // console.log(mydata);
    return {
        props: { mydata }, // will be passed to the page component as props
    }
}
