import * as repository from '../repository/MainRepository.js'

export const getEvent = async(req,res)=>{
    const event = await repository.getEvent()
    res.json(event);
    res.end()
}
export const newItem = async(req,res)=>{
    const newitem = await repository.newItem()
    res.json(newitem);
    res.end()
}
