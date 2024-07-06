import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../service/DeleteCustomerService";

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        //captura o id dos "query params" da requisição
        const {id} = request.query as {id:string}
        // cria uma constante da classe de serviço responsável por deletar customers
        const DeletCustom = new DeleteCustomerService()
        // com uma promisse, executa a destruição do customer com base em seu id
        const customer = await DeletCustom.execute({id})
        // devolve o customer deletado
        reply.send(customer)
    }
}

export {DeleteCustomerController};