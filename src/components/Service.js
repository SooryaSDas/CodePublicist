import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Service = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  return (
    <div className='bg-gray-100 pl-32 max-sm:pl-10'>
        <h1 className='p-36 text-5xl font-bold max-sm:p-10'>Services We Provide ___</h1>
        <div className="grid max-sm:grid-cols-1">
            <div onClick={onOpenModal} className='flex flex-row gap-3 hover:bg-purple-200 w-[75%] ml-32 p-8 max-sm:ml-10 max-sm:flex-col' >
                <p>01</p>
                <h2 className='font-bold'>UI / UX Design</h2>    
                <p>Dive into the digital age with our state-of-the-art web and app development services. Leveraging the powe ...</p>            
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
                </p>
            </Modal>
            <div onClick={onOpenModal}  className='flex flex-row gap-3 hover:bg-purple-200 w-[75%] ml-32 p-8 max-sm:ml-10 max-sm:flex-col'>
                <p>02</p>
                <h2 className='font-bold'>Web and App Development</h2>    
                <p>Dive into the digital age with our state-of-the-art web and app development services. Leveraging the powe ...</p>            
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Simple centered modal</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
                </p>
            </Modal>
            <div className='flex flex-row gap-3 hover:bg-purple-200 w-[75%] ml-32 p-8 max-sm:ml-10 max-sm:flex-col'>
                <p>03</p>
                <h2 className='font-bold'>Website Hosting Solutions</h2>    
                <p>Experience unparalleled uptime and performance with our reliable website hosting services. Designed for b ...</p>            
            </div>
            
            <div className='flex flex-row gap-3 hover:bg-purple-200 w-[75%] ml-32 p-8 max-sm:ml-10 max-sm:flex-col'>
                <p>04</p>
                <h2 className='font-bold'>Web and App Development</h2>    
                <p>Dive into the digital age with our state-of-the-art web and app development services. Leveraging the powe...</p>            
            </div>
            
            <div className='flex flex-row gap-3 hover:bg-purple-200 w-[75%] ml-32 p-8 max-sm:ml-10 max-sm:flex-col'>
                <p>05</p>
                <h2 className='font-bold'>Web and App Development</h2>    
                <p>Dive into the digital age with our state-of-the-art web and app development services. Leveraging the powe...</p>            
            </div>
            
        </div>
    </div>
  )
}

export default Service