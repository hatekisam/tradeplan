import React from 'react'

const Profile = () => {
        return (
                <div className='p-[1vw] h-[100vh]'>
                        <div className="w-full h-full bg-white rounded-[2vw] relative flex flex-col gap-[2vh]">
                                <div className=''>
                                        <img src="/image/cover.png" alt="" className=' rounded-t-[2vw] w-full' />
                                        <img src="/image/user.png" alt="" className='absolute w-[20vw] left-[5vw] top-[5vw]' />
                                </div>
                                <div className="py-[2vh] flex flex-row justify-between px-[4vw] text-[3vw] md:text-[1.5vw]">
                                        <div className='flex flex-col gap-[1vh]'>
                                                <p className='text-[#0094FF] font-medium'>First Name: <span className='text-black'>Harris</span></p>
                                                <p className='text-[#0094FF] font-medium'>Last Name: <span className='text-black'>Steven</span></p>
                                                <p className='text-[#0094FF] font-medium'>Phone: <span className='text-black'>+2345111233</span></p>
                                                <p className='text-[#0094FF] font-medium'>Email: <span className='text-black'>steven@gmail.com</span></p>
                                                <p className='text-[#0094FF] font-medium'>Phone: <span className='text-black'>+2345111233</span></p>
                                        </div>
                                        <button className='bg-[#0094FF] px-[2vw] py-[1vh] rounded-full h-fit text-white my-[1vh]'>Edit Profile</button>
                                </div>
                                <button className='absolute bottom-[1vh] left-[1vw] bg-[#E10000] px-[2vw] py-[1vh] rounded-full h-fit text-white my-[1vh]'>Delete Profile</button>
                        </div>
                </div>
        )
}

export default Profile