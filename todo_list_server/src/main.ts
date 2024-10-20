// ESM
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return { app: "ecommerce fastify vue" };
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("ecommerce fastify vue");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
