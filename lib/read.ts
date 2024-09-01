import {prisma} from "@/lib/prisma"

export const getContact = async () => {
    try{
        const contacts = await prisma.contact.findMany({
            orderBy: {
                id:'desc'
            }
        })
        return contacts
    } catch (e) {
        throw new Error("Failed to fetch contact data")
    }
}

export const getContactById = async (id : string) => {
    try{
        const contact = await prisma.contact.findUnique({
            where: {id}
        })
        return contact
    } catch (e) {
        throw new Error("Failed to fetch contact data")
    }
}