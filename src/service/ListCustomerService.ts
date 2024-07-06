import prismaClient from "../prisma/prisma";

class listCostumerService{
    async execute(){
        const customers = prismaClient.customer.findMany()
        return customers
    }


}

export {listCostumerService}