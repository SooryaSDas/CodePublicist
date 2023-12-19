import React from 'react'

const About = () => {

    const onButtonClick = () => {
        const pdfUrl = "./images/1.jpg";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.jpg"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div>
        <div className='bg-purple-900 h-auto w-full grid grid-cols-2 max-sm:grid-cols-1'>
            <div className='ml-60 pt-36 pr-7 pb-6 max-sm:ml-14'>
                <div className='bg-yellow-500 w-32 h-auto text-purple-800 max-sm:w-full'>
                <h1 className='p-0 m-0 text-9xl'> <b>  &lt; C <br /> P &gt; </b></h1>
            <b> <p> &lt; CODE PUBLICIST &gt; </p> </b>
                </div>
            </div>
            <div className='pt-36 max-sm:m-10 max-sm:mt-0'>
                <h1 className='text-5xl text-white'>About Us _____</h1>
                <p className='text-base text-gray-400 pt-8 md:w-96 leading-8 pb-3'>
                Welcome to Code Publicist, where innovation meets passion, and every line of code tells a story of progress. We're not just a software development company; we're architects of digital transformation, weaving dreams into seamless, functional solutions. At the heart of Code Publicist beats a team of dedicated and dynamic professionals, united by a common goal—to redefine the possibilities of digital excellence. We are more than developers; we are visionaries, problem solvers, and your trusted partners on the journey to technological advancement.
                </p>
                <button onClick={onButtonClick} className="bg-white hover:bg-black hover:text-white text-black font-bold py-3 px-5 rounded mb-3">
                Downlaod Portfolio
                </button>      
            </div>
        </div>
        <div className='grid grid-cols-2 max-sm:grid-cols-1'>
            <div className='ml-60 pt-36 pr-7 max-sm:ml-16'>
                <h1 className='text-5xl font-bold'>Our expert <br /> areas ___</h1>
                <p className='pt-6 leading-loose'>From sleek mobile applications to robust enterprise solutions, our expertise spans a wide spectrum of technologies. Whether you are a startup with a groundbreaking idea or an established enterprise seeking digital transformation, Code Publicist is your reliable partner.</p>
                <button class="bg-purple-800 hover:bg-black text-white font-bold py-2 px-4 rounded-lg mt-3 mb-5">Brochure</button>
            </div>
            <div className='ml-60 pt-36 pr-7 max-sm:ml-2 max-sm:pt-20'>
                <ul>
                    <li className='inline-block font-bold hover:border p-5'>Frontends</li>
                    <li className='inline-block ml-12 font-bold hover:border p-5'>Backends</li>
                    <li className='inline-block ml-12 font-bold hover:border p-5'>Databases</li>
                </ul>
                <div className='grid grid-cols-3 max-sm:grid-cols-2 max-sm:pl-8'>
                    <div className='inline-block w-44 pt-2'><p>Javascript</p></div>
                    <div className='inline-block w-44 pt-2'><p>Bootstrap</p></div>
                    <div className='inline-block w-24 pt-2'><p>Vue.Js</p></div>
                    <div className='inline-block w-44 pt-2'><p>React.Js</p></div>
                    <div className='inline-block w-44 pt-2'><p>Angular</p></div>
                    <div className='inline-block w-44 pt-2'><p>Sass</p></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About

