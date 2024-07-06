import { FastifyReply, FastifyRequest } from "fastify";
import { listCostumerService } from "../service/ListCustomerService";

class ListCustomController{
    async handle(request:FastifyRequest, reply:FastifyReply ){
        const listCustom = new listCostumerService()
        const customers = await listCustom.execute()
        reply.send(customers)
    }
}

export { ListCustomController};