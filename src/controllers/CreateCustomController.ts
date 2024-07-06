import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma/prisma";
import { CreateCustomService } from "../service/CreateCustomerService";

class CreateCustomController{
    async handle(request : FastifyRequest, reply: FastifyReply){
        const {name, email} = request.body as {name:string, email:string}
        const costumerService = new CreateCustomService()
        const customer = await costumerService.execute({name, email})
        reply.send(customer)
        
    }
}

export {CreateCustomController}