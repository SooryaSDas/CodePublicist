import React from 'react'

const Contact = () => {
  return (
   <div>
        <div className='bg-black w-full h-auto p-20 max-sm:p-10 '>
            <div className='grid grid-cols-3 pl-20 max-sm:pl-10 max-sm:grid-cols-1'>
                <div>
                    <img className='w-32' src="./images/welcome2.png" alt="image" />
                </div>
                <div>
                    <h1 className='font-bold text-white text-3xl'>Let's work together</h1>
                    <p className='text-white pt-5 md:leading-loose '>Ready to embark on a digital journey that transforms your ideas into powerful solutions? Let's work together to shape the future of your business. Contact us today to discuss how we can support your journey towards digital excellence.</p>
                </div>
                <div>
                    <button class="max-sm:mt-4 mt-24 ml-10 bg-purple-800 hover:bg-white-700 hover:bg-white hover:text-black font-bold py-2 px-4 rounded">
                        Chat with Us
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 pl-20 pt-10 text-white'>
                <div >
                    <p>Call : </p>
                    <h3>+91 8136 953 555</h3>
                </div>
                <div >
                    <p>Email : </p>
                    <h3>connect@codepublicist.com</h3>
                </div>
                <div>
                    <h2>Follow Us: </h2>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 bg-yellow-500 pl-20 pt-14'>
            <div>
                <a className="w-36"> <img src="./images/logo.png" alt="logo" /> </a>
            </div>
            <div className='mt-6'>
                <p>© 2023 by Code Publicist. All Rights Reserved</p>
            </div>
        </div>
   </div>
  )
}

export default Contact