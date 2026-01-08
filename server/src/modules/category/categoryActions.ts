import categoryRepository from "./categoryRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
};

const read: RequestHandler = async (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const category = (await categoryRepository.readAll()).find(
    (category) => category.id === parsedId,
  );

  if (category) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
