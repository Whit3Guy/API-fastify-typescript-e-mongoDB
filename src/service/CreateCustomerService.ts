import prismaClient from "../prisma/prisma";

interface temQueTerNomeEemail{
    name:string;
    email:string;
}


class CreateCustomService{
    async execute({name, email} : temQueTerNomeEemail){

        if(!name || !email){
            throw new Error("preenche os campos ai papai")
        }        

        const customer = await prismaClient.customer.create({
            data:{
                name, email, status:true
            }
        })
        
        return customer
    }
}

export {CreateCustomService}