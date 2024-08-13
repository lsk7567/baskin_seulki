import {promises as fsPromises} from 'fs'

/* 이벤트 목록 출력 */
export const getEvent = async() =>{
    const path = 'data/promotionList.json';
    const event = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return event
}
export const newItem = async() =>{
    const path = 'data/newitem.json';
    const newitem = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return newitem
            }