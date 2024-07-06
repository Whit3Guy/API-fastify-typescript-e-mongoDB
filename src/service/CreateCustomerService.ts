import prismaClient from "../prisma/prisma";


// define os atributos que um customer precisa possuir, no caso, nome e email
interface temQueTerNomeEemail{
    name:string;
    email:string;
}


class CreateCustomService{
    async execute({name, email} : temQueTerNomeEemail){
        //lança um erro caso ele não possua nome ou email
        if(!name || !email){
            throw new Error("Por favor, insira o nome e email")
        }        
        //caso ele possua nome e email, cria esse novo customer e define como padrão o status como true
        const customer = await prismaClient.customer.create({
            data:{
                name, email, status:true
            }
        })
        
        return customer
    }
}

export {CreateCustomService}