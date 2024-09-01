"use client";
import { Create } from '@/lib/create'
import React from 'react'
import { useFormState } from 'react-dom'
import { SubmitButton } from './Button';

const CreateForm = () => {

    const[create, setCreate] = useFormState(Create, null)

    return (
        <div>
            <form action={setCreate}>
                <div className='mb-5'>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Full Name</label>
                    <input type="text" name='name' id='name' className='bg-gray-50 border border-gray-300 text-slate-900 rounded-md focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5' placeholder='Full Name'/>

                    <div id='name-error' aria-live='polite' aria-atomic="true">
                        <p className='mt-2 text-sm text-red-500'>{create?.Error?.name}</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="phone" className='block text-sm font-medium text-gray-900'>Phone Number</label>
                    <input type="phone" name='phone' id='phone' className='bg-gray-50 border border-gray-300 text-slate-900 rounded-md focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5' placeholder='Full Number'/>

                    <div id='phone-error' aria-live='polite' aria-atomic="true">
                        <p className='mt-2 text-sm text-red-500'>{create?.Error?.phone}</p>
                    </div>
                </div>
                <div id='message-error' aria-live='polite' aria-atomic="true">
                    <p className='mt-2 text-sm text-red-500'>{create?.message}</p>
                </div>

                <SubmitButton label="Save"/>
            </form>
        </div>
    )
}

export default CreateForm