import exp from "constants";
import { promises as fsPromises } from "fs";
import { db } from "../db/database_mysql80.js";
import { log } from "console";

//TODO 장바구니 리스트 출력
export const getCarts = async () => {
  const sql = `
              select 
                      sd.icecreamimage as image,
                      sd.korname1 as name,
                      bc.size, bc.qty, format(sd.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
                      from br_cart bc, icecreamdetail_product sd
                      where bc.pid_ic = sd.pid and user_id = 'lee'
                      union all
                      select sp.icecreamimage as image, sp.korname1 as name,
                      bc.size, bc.qty, format(sp.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
                      from br_cart bc, prepackdetail_product sp
                      where bc.pid_pre = sp.pid and user_id = 'lee'
                      union all
                      select sc.icecreamimage as image, sc.korname1 as name,
                      bc.size, bc.qty, format(sc.price,0) price, bc.cid, bc.pid_ic, bc.user_id, bc.cdate
                      from br_cart bc, icecreamcakedetail_product sc
                      where bc.pid_cake = sc.pid and user_id = 'lee'
  `; //! sql 장바구니 리스트 부분 그대로 복붙. 파라미터는 ?로 넣어주기

  return db.execute(sql, ["lee"]).then((result) => result[0]);
};

//TODO 장바구니 체크하기 : pid, size가 동일한 데이터 체크 [★장바구니 추가하기에서 사용 ]
const cartCheck = async (items) => {
  let pid = ``;

  if (items.type === "ICECREAM") {
    pid = `pid_ic`;
  } else if (items.type === "BLOCK PACK" || items.type === "READY PACK") {
    pid = `pid_pre`;
  } else if (items.type === "ICECREAM CAKE") {
    pid = `pid_cake`;
  }

  const sql = `
              select count(cid) cnt, cid from br_cart
              where ${pid} = ? and size = ? 
              group by cid
  `; //! sql 장바구니 체크하기부분 그대로 복붙. 파라미터는 ?로 넣어주기
  return db
    .execute(sql, [items.pid, items.size])
    .then((result) => result[0][0]); // {cnt:1, cid:9}
};

//TODO 장바구니 추가하기
export const insert = async (items) => {
  let checkResult = undefined;
  let result_rows = 0;
  let sql = ``;
  let pid = ``;
  // console.log(items);

  // cartCheck 함수를 동해 pid, size가 동일한 데이터 체크하기
  // -> 동일한제품은 수량만 업데이트 시키기
  if (items.type === "ICECREAM") {
    pid = `pid_ic`;
  } else if (items.type === "BLOCK PACK" || items.type === "READY PACK") {
    pid = `pid_pre`;
  } else if (items.type === "ICECREAM CAKE") {
    pid = `pid_cake`;
  }
  checkResult = await cartCheck(items);

  if (checkResult === undefined) {
    //* insert
    sql = `
       insert into br_cart(${pid},size,cdate,user_id) values(?,?,now(),"lee")
       `; //! sql 장바구니 데이터 추가하기 부분 그대로 복붙. 파라미터는 ?로 넣어주기

    const [result] = await db.execute(sql, [items.pid, items.size]);
    result_rows = result.affectedRows;
  } else {
    //* update
    sql = `update br_cart set qty = qty+1 where cid = ?`;
    const [result] = await db.execute(sql, [checkResult.cid]);
    result_rows = result.affectedRows;
  }

  return { cnt: result_rows };
};

//TODO 장바구니 count
export const getCount = async (userId) => {
  const sql = `
              select ifnull(sum(qty),0) count from br_cart where user_id = ?
  `; //! sql 회원별 장바구니 조회하기 부분 그대로 복붙. 파라미터는 ?로 넣어주기

  return db.execute(sql, [userId]).then((result) => result[0][0]); // {count : 4} 이런형식으로 넘어옴
};
