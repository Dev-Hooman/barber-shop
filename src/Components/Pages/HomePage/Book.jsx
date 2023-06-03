import React from 'react'

const Book = () => {
    return (
        <div className='relative'>
            <div
                className=' h-[40vh] mx-[1px] mt-[370px] mb-5 bg-[#1E1E1E]  background-image-About flex w-full'>
            </div>

            <div className='absolute top-0'>
                <svg width="1301" height="258" viewBox="0 0 1301 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M1 0.5L302 30L531 218.5L950.5 155L1300.5 257.5" stroke="#C5AC80" stroke-dasharray="12 12" />
                </svg>
            </div>


            <div className='absolute -top-[60px] right-[150px] items-center'>

                <div className=' flex flex-row justify-between items-center w-[1200px]'>

                    <div className='flex flex-col justify-evenly  gap-y-2'>
                        <h1 className='text-3xl text-[#C5AC80]'>Book Your Slot Now</h1>
                        <p className='text-sm text-white w-[400px]'>Aenean fringilla dignissim tempor. Fusce et orci vel
                            est semper iaculis non bibendum elit.</p>

                            <button className=' w-[146px] h-[43px] bg-[#C5AC80] rounded-3xl flex items-center justify-center'>
                                    Book Now
                            </button>
                    </div>

                    <div>
                        <img className='w-[355px] h-[355px]' src="https://s3-alpha-sig.figma.com/img/834a/bfcc/08197be291813a22d4d9cb14c745655a?Expires=1686528000&Signature=pPgVTG8gFUXPhxCzSeaaqecuBBybBh4N6LXwsrTAbHDQ6vx27g357YxHB0UtG1JrkhSbAZAfO6oVpqejenmg4K4zCjK8zlvX8d-HfNShnxdGm~Wc8wmSnBevD6XhO1LYDTaVsficbKqfqXriG39fu6oVJCKPfX9W2K7Ime6LzeYtWk6MahWeRSlpMJqNeLtMVoYnBgFxM5SbNuTF8GKlNJ~pGIMS9JwZ9rYnSNDZ59Fkhsk4e~sbArgchdLdPULwxaTfAFZHtXjxTBAS5JPN3r7P2GRO8l7UM81XZx71WawzGmScyKBz7ZCadJQ5dwrlBOYdydzsEXrGwVdszR7frg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>

                </div>

            </div>



        </div>

    )
}

export default Book