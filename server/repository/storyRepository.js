import {promises as fsPromises} from 'fs'

export const getHistory =() =>{
    const path ='data/history.json'
    const historyImg = fsPromises
                .readFile(path, 'utf-8')
                .then((data)=>JSON.parse(data))
                .catch(error=>console.log(error))
    return historyImg
}

export const getStory =() =>{
    const path = 'data/story.json'
    const storyContent = fsPromises
                            .readFile(path, 'utf-8')
                            .then((data)=>JSON.parse(data))
                            .catch(error=>console.log(error))
    return storyContent 
}

export const getBebetter=()=>{
    const path = 'data/bebetter.json'
    const modalContent = fsPromises
                                    .readFile(path, 'utf-8')
                                    .then((data)=>JSON.parse(data))
                                    .catch(error=>console.log(error))
    return modalContent
                                }