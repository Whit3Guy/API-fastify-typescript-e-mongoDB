import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../service/DeleteCustomerService";

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id:string}
        const DeletCustom = new DeleteCustomerService()
        const customer = await DeletCustom.execute({id})
        reply.send(customer)
    }
}

export {DeleteCustomerController};