const { PrismaClient } =require("@prisma/client")

const prisma = new PrismaClient();

async function crearCredencial(req, res) {
    try{
        const { id_usuario, username, password, fecha_creacion } = req.body

        const nuevaCredencial = await prisma.credenciales.create({
            data: {
                id_usuario,
                username,
                password,
                fecha_creacion
            }
        });

        res.status(201).json({ message: 'Registrado con exito', user: nuevaCredencial});
    } catch (error) {
        console.log("error createUser", error)
        res.status(500).send("Ocurrio un error en el servidor")
    }
}

module.exports = { crearCredencial }