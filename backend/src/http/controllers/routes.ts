import { FastifyInstance } from 'fastify';
import { Search } from './search';
import { operate } from './operate';

export async function Routes(app: FastifyInstance) {
  app.get( "/", Search)
  app.get("/calculate", operate)
}