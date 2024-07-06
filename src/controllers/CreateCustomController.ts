import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma/prisma";
import { CreateCustomService } from "../service/CreateCustomerService";

class CreateCustomController{
    async handle(request : FastifyRequest, reply: FastifyReply){
        //cria as constantes de nome e email de acordo com o corpo da requisição http
        const {name, email} = request.body as {name:string, email:string}
        //chama o serviço de "Create Custom"
        const costumerService = new CreateCustomService()
        //executa com um await pois é uma promisse o serviço de criação de customer
        const customer = await costumerService.execute({name, email})
        //devolve o objeto customer criado 
        reply.send(customer)
        
    }
}

export {CreateCustomController}