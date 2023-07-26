import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import path from "path";

const prisma = new PrismaClient();

const app = express();

app.use(cors());

app.get("/number", async (req, res) => {
  const number = await prisma.test.findFirst({});
  res.json(number);
});

app.post("/increment", async (req, res) => {
  await prisma.test.update({
    where: { id: 1 },
    data: {
      number: {
        increment: 1,
      },
    },
  });
  res.json("OK");
});

app.get("*", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
