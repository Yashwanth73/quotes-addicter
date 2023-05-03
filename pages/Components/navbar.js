import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={'/'}>   <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./quote.png" alt="" srcset="" className='w-14 h-14 flex-shrink-0 object-cover object-center' />
                        <span className="ml-3 text-xl">Quotes Addicter</span>
                    </a> </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ol className='md:ml-auto flex flex-wrap items-center text-base justify-center '>
                            <li className="mr-5 hover:text-gray-900" ><Link href={'/'}>Home</Link></li>
                            <li className="mr-5 hover:text-gray-900" ><Link href={'/Quotes'}>Unlimited Quotes</Link></li>
                            <li className="mr-5 hover:text-gray-900" ><Link href={'/Random'}>Daily Quote</Link></li>
                            <li className="mr-5 hover:text-gray-900" ><Link href={'/Authors'}>Authors</Link></li>
                        </ol>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default NavBar