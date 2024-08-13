import * as repository from '../repository/StoreDeliverRepository.js'

export const getFlavor = async(req,res)=>{
    const flavor = await repository.getFlavor()
    res.json(flavor)
}