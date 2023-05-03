import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import quotes from '../../data/quotes_unlimited.json';


const Slug = ({ authorquotes }) => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <Head>
                <title>{slug}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/quote.png" />
            </Head>
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -mx-4 -my-8">



                            {
                                authorquotes.map((quote) => {
                                    return <div class="py-8 px-4 lg:w-1/3">
                                        <div class="h-full flex items-start bg-gray-50 bg-opacity-75 px-8 pt-16 pb-16 rounded-xl  shadow-xl shadow-blue-300 hover:bg-blue-100 hover:shadow-orange-300">
                                            {/* <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
              <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
            </div> */}
                                            <div class="flex-grow pl-6">
                                                {/* <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2> */}
                                                <h1 class="title-font text-xl font-medium text-gray-900 mb-3">"{quote.text}"</h1>
                                                {/* <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                                                {quote.author && <a class="inline-flex items-center">
                                                    <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 ">
                                                        <span class="font-medium text-gray-600 dark:text-gray-300">{quote.author.split(' ').map(word => word[0])}</span>
                                                    </div>                                                     <span class="flex-grow flex flex-col pl-3">
                                                        <span class="title-font font-medium text-gray-900">-{quote.author}</span>
                                                    </span>
                                                </a>}
                                            </div>
                                        </div>

                                    </div>


                                })
                            } </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Slug

export async function getServerSideProps(context) {
    // console.log(context.query.slug)
    let authorquotes = quotes.filter((quote) => {
        return quote.author == context.query.slug;
    })
    return {
        props: {
            authorquotes: authorquotes
        }, // will be passed to the page component as props
    }
}