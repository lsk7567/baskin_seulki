import * as repository from "../repository/cartsRepository.js";

//TODO 장바구니 전체리스트
export const getCarts = async (req, res) => {
  // const { items } = req.body;
  const cartList = await repository.getCarts();
  res.json(cartList);
  res.end();
};

//TODO 장바구니 추가
export const insert = async (req, res) => {
  const items = req.body; //* {pid: "선택한 상품의 id", size: "선택한 상품의 사이즈"}
  // console.log("items ==>", items);
  const result = await repository.insert(items);
  res.json(result);
  res.end();
};

//TODO 장바구니 count
export const getCount = async (req, res) => {
  const { userId } = req.body;
  // console.log("userId ==>", userId);
  const result = await repository.getCount(userId);
  res.json(result);
  res.end();
};
