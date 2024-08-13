import * as repository from "../repository/optionRepository.js";

export const getRelatedProduct = async (req, res, next) => {
  const params = req.body;
  const relatedproduct = await repository.getRelatedProduct(params);
  res.json(relatedproduct);
  res.end();
};
