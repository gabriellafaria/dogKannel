import { InMemoryPetShopRepository } from 'backend/src/repository/in-memory-petshop-repository';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function operate(request: FastifyRequest, reply: FastifyReply) {
  reply.header("Access-Control-Allow-Origin", "*");

  const RequestBodySchema = z.object({
    date: z.coerce.date(),
    amountSmallDogs: z.coerce.number(),
    amountBigDogs: z.coerce.number(),
  });

  const { date, amountSmallDogs, amountBigDogs } = RequestBodySchema.parse(request.query);

  const bestChoice = await new InMemoryPetShopRepository().calculatePrice(date, amountSmallDogs, amountBigDogs);

  return reply.status(200).send({
    bestChoice,
  });
}