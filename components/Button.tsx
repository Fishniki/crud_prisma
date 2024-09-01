"use client"
import Link from "next/link"
import { IoAdd, IoPencil, IoTrash } from "react-icons/io5"
import { useFormStatus } from "react-dom"
import clsx from "clsx"
import { Delete } from "@/lib/create"

export const CreateButton = () => {
    return (
        <Link href={"/contact/create"} className="inline-flex items-center space-x-1 text-white bg-blue-700
        hover:bg-blue-900 px-4 py-[9px] rounded-md">
            <IoAdd size={20}/> Create
        </Link>
    )
}

export const EditeButton = ({id}: {id:string}) => {
    return (
        <Link href={`/contact/edit/${id}`} className="rounded-md p-1 bg-yellow-400 hover:bg-yellow-600">
            <IoPencil size={20}/>
        </Link>
    )
}

export const DeleteButton = ({id}: {id:string}) => {
    const DeleteContactWithId = Delete.bind(null, id)
    return (
        <form action={DeleteContactWithId}>
            <button className="rounded-md p-1 bg-red-400 hover:bg-red-600">
                <IoTrash size={20}/>
            </button>
        </form>
    )
}

export const SubmitButton = ({label}: {label: string}) => {
    const {pending} = useFormStatus()
    const className = clsx("p-2 w-full rounded-sm bg-sky-500 hover:bg-sky-600 text-white font-medium",
        {
            "opacity-50 cursor-progress": pending
        }
    )
    return(
        <button type='submit' className={className}
        disabled={pending}>
            {label === "Save" ? (
                <span>{pending ? "Saving..." : "Save"}</span>
            ) : (
                <span>{pending ? "Updating..." : "Update"}</span>
            )}
        </button>
    )
}