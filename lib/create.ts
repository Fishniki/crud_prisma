"use server";
import {z} from "zod"
import {prisma} from "./prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CreateSchema = z.object({
    name: z.string(),
    phone: z.string()
}) 

export const Create = async (prevState: any, formData: FormData) => {
    const validateField = CreateSchema.safeParse(Object.fromEntries(formData.entries())) //mengambil inputan dari form
    if(!validateField.success) {
        return{
            Error: validateField.error.flatten().fieldErrors
        }
    }

    //pengiriman ke database
    try{
        await prisma.contact.create({
            data:{
                name: validateField.data.name,
                phone: validateField.data.phone
            }
        })
    } catch(e) {
        return {message: "Failed to create data"}
    }

    revalidatePath("/contact")
    redirect("/contact")
}

export const Update = async (id:string, prevState: any, formData: FormData) => {
    const validateField = CreateSchema.safeParse(Object.fromEntries(formData.entries())) //mengambil inputan dari form
    if(!validateField.success) {
        return{
            Error: validateField.error.flatten().fieldErrors
        }
    }

    //pengiriman ke database
    try{
        await prisma.contact.update({
            data:{
                name: validateField.data.name,
                phone: validateField.data.phone
            },
            where:{id}
        })
    } catch(e) {
        return {message: "Failed to update data"}
    }

    revalidatePath("/contact")
    redirect("/contact")
}

export const Delete = async (id:string) => {

    //pengiriman ke database
    try{
        await prisma.contact.delete({
            where:{id}
        })
    } catch(e) {
        return {message: "Failed to delete data"}
    }

    revalidatePath("/contact")
}
