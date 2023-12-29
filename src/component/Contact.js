import React from 'react'
import email from "../assets/footeremail.png"
import phone from "../assets/phone.png"
import contactimg from "../assets/contact.png"

const Contact = () => {
    return (
        <footer className='w-full py-20  text-white bg-black/90'> 
            {/* Start Header */}
            <div className='text-center'>
                <p className='text-[40px] font-bold mb-3'>Contact <span className='text-[#DF4F4F]'>Us</span></p>
            </div>
            {/* End Header */}

            <div className='flex w-9/12 mx-auto '>
                <div className='w-full  '>
                    <p className='text-lg font-bold my-5'>Ways to Contact Me</p>
                    <p>Thank you for visiting my profile. If you have any inquiries, collaboration opportunities, or just want to connect, feel free to reach out. I'm always open to discussions related to [Your Expertise/Interests].</p>

                    {/* Start Contact */}
                    <div className='w-full flex justify-between mt-5 space-x-32 items-center'>
                        <div className='w-7/12'>
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

                        <div className='w-6/12 flex flex-col justify-center items-center'>
                            <img src={contactimg} className='w-[340px]'/>
                            
                            <div className='flex w-full justify-between'>
                                <div className=''><img src={email} className='w-8 inline-block mr-5' alt="email"/> heinthu@gmail.com</div>
                                <div className=''><img src={phone} className='w-6 inline-block mr-5' alt="phone"/> +959779368682</div>
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