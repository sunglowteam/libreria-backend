-- CreateTable
CREATE TABLE "Credenciales" (
    "id_credencial" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Credenciales_pkey" PRIMARY KEY ("id_credencial")
);
