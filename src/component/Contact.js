import React from 'react'
import git from "../assets/github.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
import instgram from "../assets/instgram.png"

const Contact = () => {
    return (
        <footer className='w-full h-[80vh] text-white bg-black'> 
            {/* Start Header */}
            <div className='text-center pt-14'>
                <p className='text-[40px] font-bold mb-3'>Contact <span className='text-[#DF4F4F]'>Us</span></p>
            </div>
            {/* End Header */}

            <div className='grid grid-cols-11'>
                <div className='col-start-2 col-span-10'>
                    <p className='text-lg font-bold my-5'>Ways to Contact Me</p>
                    <p>Thank you for visiting my profile. If you have any inquiries, collaboration opportunities, or just want to connect, feel free to reach out. I'm always open to discussions related to [Your Expertise/Interests].</p>

                    {/* Start Contact */}
                    <div className='grid grid-cols-12 gap-4 mt-5'>
                        <div className='col-span-6'>
                            <div className='w-3/4 mb-3'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' id="name" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Enter Your Name'/>
                            </div>

                            <div className='w-3/4 mb-3'>
                                <label htmlFor='email'>Email</label>
                                <input type='text' id="email" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Enter Your Email'/>
                            </div>

                            <div className='w-3/4 mb-8'>
                                <label htmlFor='message'>Message</label>
                                <input type='text' id="message" className='w-full block bg-transparent border-b-2 border-[#D34C4C] outline-none pl-3 py-2' placeholder='Write soemthing in your mind'/>
                            </div>

                            <div className='w-3/4'>
                                <button className='bg-[#D34C4C] rounded float-right px-8 py-1'>Send</button>
                            </div>
                        </div>

                        <div className='col-span-5 self-center'>
                            <div className='flex justify-between'>
                                <div className='bg-[#3B3B3B] px-5 py-2'> heinthu@gmail.com</div>
                                <div className='bg-[#3B3B3B] px-5 py-2'> +959779368682</div>
                            </div>

                            <ul className='inline-flex mx-auto mt-8 bg-red-800'>
                                <li className='mr-6'><img src={git} className='w-8' alt="github"/></li>
                                <li className='mr-6'><img src={linkin} className='w-8' alt="linkin"/></li>
                                <li className='mr-6'><img src={facebook} className='w-8' alt="facebook"/></li>
                                <li className='mr-6'><img src={instgram} className='w-8' alt="instgram"/></li>
                            </ul>
                        </div>
                    </div>
                    {/* End Contact */}
                </div>
            </div>
        </footer>
    )
}

export default Contact