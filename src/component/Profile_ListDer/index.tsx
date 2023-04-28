import React from 'react'

interface Profile_user {
    user_leader_image: string
    user_leader_id: number
    use_position: string
    user_name: string
}

export default function Profile_ListDer({ user_leader_image, user_leader_id, use_position, user_name }: Profile_user) {
    return (
        <div className='w-[23%] flex items-center justify-between cursor-pointer  max-[1300px]:w-full rounded-full pb-5 max-[1300px]:flex-col'>
            <div className='w-[60%] max-[1300px]:py-3'>
                <div className='font-[Roboto] text-right text-[#62748D] text-[16px] max-[1300px]:text-center'>
                    {use_position}
                </div>
                <div className='text-[15px] text-right uppercase max-[1300px]:text-center'>{user_name}</div>
            </div>
            <div className='w-[35%]'>
                <img
                    className='w-[93px] h-[95px] object-cover  max-[1300px]:rounded-full w-36  h-36 m-auto w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50   max-[550px]:w-[83px] max-[550px]:h-[85px] 	'
                    src={user_leader_image}
                    alt=''
                />
            </div>
        </div>
    )
}


// className='w-full object-cover  group-hover:scale-110 transition duration-300 ease-in-out hover:brightness-50'
// className='overflow-hidden cursor-pointer relative group mt-2'
