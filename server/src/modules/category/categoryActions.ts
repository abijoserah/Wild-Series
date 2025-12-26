const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const category = categories.find((category) => category.id === parsedId);

  if (category) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
