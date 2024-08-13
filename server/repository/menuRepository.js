import { json } from "express";
import { promises as fsPromises } from "fs";

import { db } from "../db/database_mysql80.js";
import { log } from "console";

/**
 * 아이스크림
 */

export const getIceCreamProducts = (params) => {
  const sql = `
      select rno, id, name, image, hash, label, bgcolor, hashcolor  from 
      (select row_number() over(order by pdate desc) as rno, 
      pid as id, 
      name,
      image,
      hash,
      label,
      bgcolor,
      hashcolor
      from icecream_product) ip
      where rno between ? and ?
  `;
  return db
    .execute(sql, [params.startIndex, params.endIndex])
    .then((result) => result[0]);
};

export const getIceCreamDetail = (id) => {
  const sql = `
select 
  icecreamimage,
  bgcolor,
  line,
  engname,
  korname1,
  korname2,
  dep,
  price,
  btnleft,
  btnright,
  servingsize,
  calory,
  sugar,
  protein,
  saturatedfat,
  natrium,
  allergy,
  menuviewimage 
from icecreamdetail_product
where pid = ?   
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};

export const getIceCreamIngredients = (id) => {
  const sql = `
  select inimage, inname from icecream_ingredients where pid= ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};

/* export const getIceCreamSizeCheck = (id) => {
  const sql = `
  select  sizename from icecream_sizecheck where pid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};

export const getIceCreamRelatedProduct = (id) => {
  const sql = `
  select  relatedimage, relatedname,  linkname,  linkid  from icecream_relatedproduct where pid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};
 */
/**
 * 프리팩
 */

export const getPrepackProducts = (params) => {
  const sql = `
      select rno, id, name, image, hash, label, bgcolor, hashcolor  from 
      (select row_number() over(order by pdate desc) as rno, 
      pid as id, 
      name,
      image,
      hash,
      label,
      bgcolor,
      hashcolor
      from prepack_product) pp
      where rno between ? and ?
  `;
  return db
    .execute(sql, [params.startIndex, params.endIndex])
    .then((result) => result[0]);
};

export const getPrepackDetail = (id) => {
  const sql = `
select 
  icecreamimage,
  bgcolor,
  line,
  engname,
  korname1,
  korname2,
  dep,
  price,
  btnleft,
  btnright,
  servingsize,
  calory,
  sugar,
  protein,
  saturatedfat,
  natrium,
  allergy,
  menuviewimage 
from prepackdetail_product
where pid = ?   
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};

export const getPrepackIngredients = (id) => {
  const sql = `
  select inimage, inname from prepack_ingredients where pid= ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};

/* export const getPrepackSizeCheck = (id) => {
  const sql = `
  select  sizename from prepack_sizecheck where pid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};

export const getPrepackRelatedProduct = (id) => {
  const sql = `
  select  relatedimage, relatedname,  linkname,  linkid  from prepack_relatedproduct where pid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
}; */

/**
 * 아이스크림케이크
 */

export const getIceCreamCakeProducts = (params) => {
  const sql = `
      select rno, id, name, image, hash, label, bgcolor, hashcolor  from 
      (select row_number() over(order by pdate desc) as rno, 
      pid as id, 
      name,
      image,
      hash,
      label,
      bgcolor,
      hashcolor
      from icecreamcake_product) cp
      where rno between ? and ?
  `;
  return db
    .execute(sql, [params.startIndex, params.endIndex])
    .then((result) => result[0]);
};

export const getIceCreamCakeDetail = (id) => {
  const sql = `
select 
  icecreamimage,
  bgcolor,
  line,
  engname,
  korname1,
  korname2,
  dep,
  price,
  btnleft,
  btnright,
  servingsize,
  calory,
  sugar,
  protein,
  saturatedfat,
  natrium,
  allergy,
  menuviewimage 
from icecreamcakedetail_product
where pid = ?   
  `;
  return db.execute(sql, [id]).then((result) => result[0][0]);
};

/* export const getIceCreamCakeIngredients = (id) => {
  const sql = `
  select inimage, inname from icecreamcake_ingredients where pid= ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
}; */
/* 
export const getIceCreamCakeSizeCheck = (id) => {
  const sql = `
  select  sizename from icecreamcake_sizecheck where pid = ?
  `;

  return db.execute(sql, [id]).then((result) => result[0]);
};

export const getIceCreamCakeRelatedProduct = (id) => {
  const sql = `
  select  relatedimage, relatedname,  linkname,  linkid  from icecreamcake_relatedproduct where pid = ?
  `;
  return db.execute(sql, [id]).then((result) => result[0]);
};
 */
