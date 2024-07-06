//Username:WhiteDev
//Password:XIyIeKNS1xOLaJI1

import fastify from "fastify";
import fastifyCors from "@fastify/cors";
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
        await app.listen({port:3301})
        app.log.info(`Subiu na 3301`)
    }
    catch (err){
        app.log.error(err)
        process.exit(1)
    }
}

start()