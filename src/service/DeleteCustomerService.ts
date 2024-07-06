import prismaClient from "../prisma/prisma";

interface DeleteCustomerprops{
    id:string;
}


class DeleteCustomerService{
    async execute({id}: DeleteCustomerprops){
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })
        if(!findCustomer){
            throw new Error("Foi não kk")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })
    }   
}

export {DeleteCustomerService};