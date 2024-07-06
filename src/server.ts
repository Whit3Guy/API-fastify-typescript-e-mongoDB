import fastify from "fastify";
import {routes} from './routes'
import cors from "@fastify/cors"

const app = fastify({logger:true})

app.setErrorHandler((error, req, reply) => {
    reply.code(400).send({message: error.message})
})


const start = async () =>{

    await app.register(cors)
    await app.register(routes);

    try{
        //com promisse, sobe a aplicação na porta 3301
        await app.listen({port:3301})
        app.log.info(`Subiu na 3301`)
    }
    catch (err){
        //captura o erro caso aconteça e o exibe
        app.log.error(err)
        process.exit(1)
    }
}
// inicia a aplicação
start()