import {promises as fsPromises} from 'fs'

export const getFlavor = async() =>{
    const path ='data/flavorstores.json';
    const flavor = fsPromises.readFile(path,'utf-8')
                    .then((data)=>{
                            return JSON.parse(data)
                    })
                    .catch(error=>console.log(error))
    return flavor
}