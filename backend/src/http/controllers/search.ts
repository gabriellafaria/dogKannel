import { InMemoryPetShopRepository } from 'backend/src/repository/in-memory-petshop-repository';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function Search(request: FastifyRequest, reply: FastifyReply) {
  reply.header("Access-Control-Allow-Origin", "*");

  const useCase = new InMemoryPetShopRepository();
  const petShops = await useCase.findAll();

  return reply.status(200).send({
    petShops,
  });
}