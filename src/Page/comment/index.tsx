import React,{useEffect} from 'react'
import Box_Call_All from '../../component/Box_Call_All'
import { useForm } from 'react-hook-form'
import {GetSendComment} from'../../apis/GetNew'
import { useMutation } from '@tanstack/react-query';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Comment() {
  const { handleSubmit, register, formState } = useForm()

  const { errors } = formState


  const mutation = useMutation({
    mutationFn: GetSendComment,
    onSuccess:()=>{
        toast.success("bạn đã gửi thành công",{ autoClose: 3000 })
    }
  })
  const onSubmit =  (data: any) => {
    mutation.mutate(data)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='w-[80%] m-auto flex'>
      <div className='w-[70%]'>
        <form className='w-[70%] m-auto mt-10' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-1 mb-3 md:grid-cols-0'>
            <label className='block mb-2 text-sm font-medium text-gray-900 '>Tiêu đề</label>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      '
              {...register('CommentTitle', {
                required: {
                  value: true,
                  message: 'tiêu đề không được để trống'
                },
                maxLength: {
                  value: 500,
                  message: 'độ dài từ 5 - 500'
                },
                minLength: {
                  value: 5,
                  message: 'dđộ dài từ 5 - 500'
                }
              })}
            />
            <div className='text-[red] text-[14px] font-sans '>

            <>{errors?.CommentTitle?.message}</>
            </div>
          </div>
          <div className='grid gap-6 mb-6 md:grid-cols-2'>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 '>Tên</label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      '
                {...register('UserName', {
                  required: 'UserName không được để trống',
                  maxLength: {
                    value: 50,
                    message: 'độ tối đa là 50 ký tự'
                  }
                })}
              />
              <div className='text-[red] text-[14px] font-sans '>

              <>{errors?.UserName?.message}</>
              </div>
            </div>

            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 '>Email</label>
              <input
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      '
                {...register('CommentEmail', {
                  required: 'ý kiến không được để trống',
                  maxLength: {
                    value: 500,
                    message: 'độ dài từ 5 - 500'
                  },
                  minLength: {
                    value: 5,
                    message: 'độ dài từ 5 - 500'
                  },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'email khong dung dinh dang'
                  }
                })}
              />
              <div className='text-[red] text-[14px] font-sans '>
                <>{errors?.CommentEmail?.message}</>
              </div>
            </div>
          </div>

          <textarea
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500     '
            placeholder='ý kiến bạn đọc'
            {...register('CommentText', {
              required: 'ý kiến không được để trống',
              maxLength: {
                value: 500,
                message: 'độ dài từ 5 - 500'
              },
              minLength: {
                value: 5,
                message: 'độ dài từ 5 - 500'
              },
             
            })}
          ></textarea>
          <div className='text-[red] text-[14px] font-sans '>
            <>{errors?.CommentText?.message}</>
          </div>

          <button
            type='submit'
            className='text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  '
          >
            {' '}
            Gửi{' '}
          </button>
        </form>
      </div>
      <div className='w-[28%]'>
        <Box_Call_All />
      </div>
      
    </div>
  )
}
