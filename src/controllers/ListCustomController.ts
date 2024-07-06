import { FastifyReply, FastifyRequest } from "fastify";
import { listCostumerService } from "../service/ListCustomerService";

class ListCustomController{
    async handle(request:FastifyRequest, reply:FastifyReply ){
        //instancia a classe de serviço de listagem de customers
        const listCustom = new listCostumerService()
        //com a promisse, executa a sua listagem
        const customers = await listCustom.execute()
        //devolve a lista dos objetos customers
        reply.send(customers)
    }
}

export { ListCustomController};