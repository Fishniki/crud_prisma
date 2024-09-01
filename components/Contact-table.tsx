import React from 'react'
import {getContact} from "@/lib/read"
import { formatDate } from './../lib/convert-date';
import { DeleteButton, EditeButton } from './Button';

const ContactTable = async () => {
    const contact = await getContact()
    return (
        <table className='w-full text-sm text-left text-slate-700'>
            <thead className='text-slate-700 text-sm uppercase bg-gray-50'>
                <tr>
                    <th className='py-3 px-6'>#</th>
                    <th className='py-3 px-6'>Name</th>
                    <th className='py-3 px-6'>Phone number</th>
                    <th className='py-3 px-6'>Created At</th>
                    <th className='py-3 px-6 text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contact.map((val, id) => (
                    <tr key={val.id} className='bg-white border-b'>
                        <td className='py-3 px-6'>{id + 1}</td>
                        <td className='py-3 px-6'>{val.name}</td>
                        <td className='py-3 px-6'>{val.phone}</td>
                        <td className='py-3 px-6'>{formatDate(val.createdAt.toString())}</td>
                        <td className='flex justify-center py-3 gap-1'><EditeButton id={val.id}/> <DeleteButton id={val.id}/></td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}

export default ContactTable