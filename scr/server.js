import fastify from "fastify";
import express from "express"

const app = express()
const fast = fastify()

app.get("/", (req, res) => {
  res.send(
    {
        "message" : "Funcionando"
  })
})

app.listen(3000, () => {
  console.log("server rodando na porta 3000")
})