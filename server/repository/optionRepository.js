import { json } from "express";
import { promises as fsPromises } from "fs";

import { db } from "../db/database_mysql80.js";
import { log } from "console";

export const getRelatedProduct = (params) => {
  let sql = ``;
  if (params.type === "icecream") {
    sql = `  
    select  relatedimage, 
            relatedname,  
            linkname,  
            linkid  
    from icecream_relatedproduct 
    where pid = ?  
  `;
  } else if (params.type === "prepack") {
    sql = `  
    select  relatedimage, 
            relatedname,  
            linkname,  
            linkid  
    from prepack_relatedproduct 
    where pid = ?  
  `;
  } else if (params.type === "cake") {
    sql = `  
    select  relatedimage, 
            relatedname,  
            linkname,  
            linkid  
    from icecreamcake_relatedproduct 
    where pid = ?  
  `;
  }

  return db.execute(sql, [params.id]).then((result) => result[0]);
};
