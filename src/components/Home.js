import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
            <div className="pt-40 md:ml-48 lg:ml-48 sm:ml-40 max-sm:ml-20">
                <h1 className='text-4xl font-mono sm:w-full lg:w-full md:w-full max-[320]:w-full'><strong> Code Publicist</strong> </h1>
                 <img className='w-40 mt-6' src="./images/bnb.png" alt="" />
                <p className='mt-5 text-gray-400 font-mono leading-8 w-80'>
                    Unlock your business potential with code Publicist, Kochi's forefront IT service provider specializing in 
                    cutting-edge web and app development. Based in the heart of Ernakulam, we bring innovative solutions tailored to 
                    your unique business needs.
                    </p>
                    <button className="mb-4 bg-purple-800 hover:bg-black text-white font-bold py-4 px-6 border border-blue-700 rounded-lg">
                        Say Hello
                    </button>
            </div>
            <div className="pt-64 ml-32 max-sm:pt-2">
            <img  className='w-8/12' src="./images/1.png" alt="1" />
            </div>
        </div>
    </div>
  )
}

export default Home