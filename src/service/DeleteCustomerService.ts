import prismaClient from "../prisma/prisma";

interface DeleteCustomerprops{
    id:string;
}


class DeleteCustomerService{
    async execute({id}: DeleteCustomerprops){
        //Encontra um customer pelo seu id
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })
        if(!findCustomer){
            throw new Error("Erro, id não encontrado")
        }

        //busca o customer encontrado acima por seu id e deleta ele
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })
    }   
}

export {DeleteCustomerService};