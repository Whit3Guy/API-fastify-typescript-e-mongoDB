import prismaClient from "../prisma/prisma";


// classe que retorna o comando para o prisma executar no mongosh "encontrar vários Customers"
class listCostumerService{
    async execute(){
        const customers = prismaClient.customer.findMany()
        return customers
    }


}

export {listCostumerService}