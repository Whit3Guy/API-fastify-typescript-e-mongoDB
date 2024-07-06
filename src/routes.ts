import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomController } from "./controllers/CreateCustomController";
import { ListCustomController } from "./controllers/ListCustomController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions){

    fastify.post("/create", (request: FastifyRequest, reply : FastifyReply) => {
        return new CreateCustomController().handle(request, reply)
    })

    fastify.get("/all", (request:FastifyRequest, reply: FastifyReply) =>  {
        return new ListCustomController().handle(request, reply)    })


    fastify.delete("/delete", (request:FastifyRequest, reply: FastifyReply) =>  {
        return new DeleteCustomerController().handle(request, reply)})
}