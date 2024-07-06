import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomController } from "./controllers/CreateCustomController";
import { ListCustomController } from "./controllers/ListCustomController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

//Sistemas de Rotas

//Pela adaptabilidade do fastify ao typescript, eu fiz esses caminhos orientados a objetos, porem, em express por exemplo seria mais comum o uso de middleware

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions){

    // Rota de criação de Customer
    fastify.post("/create", (request: FastifyRequest, reply : FastifyReply) => {
        return new CreateCustomController().handle(request, reply)
    })
    
    // Rota de seleção de todos os Customers
    fastify.get("/all", (request:FastifyRequest, reply: FastifyReply) =>  {
        return new ListCustomController().handle(request, reply)    })
        
        
        // Rota de destruição de Customers
    fastify.delete("/delete", (request:FastifyRequest, reply: FastifyReply) =>  {
        return new DeleteCustomerController().handle(request, reply)})
}