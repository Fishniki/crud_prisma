import { CreateButton } from '@/components/Button'
import ContactTable from '@/components/Contact-table'
import Search from '@/components/Search'
import React from 'react'

const PageContact = () => {
  return (
    <div className='max-w-screen-md mx-auto mt-5'>
        <div className="flex items-center justify-between gap-1 mb-5">
            <Search/>
            <CreateButton/>
        </div>
        <ContactTable/>
    </div>
  )
}

export default PageContact