import React from 'react'
import email from "../assets/footeremail.png"
import phone from "../assets/phone.png"
import contactimg from "../assets/contact.png"

const Contact = () => {
    return (
        <footer className='w-full py-20 pb-40  text-white bg-black/90' id='contact'> 
            {/* Start Header */}
            <div className='md:text-center md:w-full w-11/12 mx-auto'>
                <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-bold md:mb-3'>Contact <span className='text-[#DF4F4F]'>Us</span></p>
            </div>
            {/* End Header */}

            <div className='flex lg:w-9/12 md:w-10/12 w-11/12 mx-auto '>
                <div className='w-full '>
                    <p className='lg:text-lg sm:text-base text-sm font-bold lg:my-5 sm:my-3 my-2'>Ways to Contact Me</p>
                    <p className='lg:text-base sm:text-sm text-xs'>Thank you for visiting my profile. If you have any inquiries, collaboration opportunities, or just want to connect, feel free to reach out. I'm always open to discussions related to [Your Expertise/Interests].</p>

                    {/* Start Contact */}
                    <div className='w-full flex md:flex-row flex-col-reverse justify-between mt-5 lg:space-x-32 md:space-x-14 items-center'>
                        <div className='lg:w-7/12 md:w-6/12 w-11/12'>
                            <div className=' mb-3'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' id="name" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Enter Your Name'/>
                            </div>

                            <div className=' mb-3'>
                                <label htmlFor='email'>Email</label>
                                <input type='text' id="email" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Enter Your Email'/>
                            </div>

                            <div className=' mb-8'>
                                <label htmlFor='message'>Message</label>
                                <input type='text' id="message" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Write soemthing in your mind'/>
                            </div>

                            <div className=''>
                                <button className='bg-[#D34C4C] rounded float-right px-8 py-1'>Send</button>
                            </div>
                        </div>

                        <div className='md:w-6/12 sm:w-8/12 w-11/12 flex flex-col justify-center items-center md:mb-0 mb-8'>
                            <img src={contactimg} className='lg:w-[340px] md:w-[270px] sm:w-[300px] w-[250px]'  alt="contactimg"/>
                            
                            <div className='flex w-full justify-between'>
                                <div className='lg:text-base text-sm'><img src={email} className='lg:w-8 w-7 inline-block lg:mr-5 mr-2' alt="email"/> heinthu@gmail.com</div>
                                <div className='lg:text-base text-sm'><img src={phone} className='lg:w-6 w-5 inline-block lg:mr-5 mr-2' alt="phone"/> +959779368682</div>
                            </div>

                           
                        </div>
                    </div>
                    {/* End Contact */}
                </div>
            </div>
        </footer>
    )
}

export default Contact