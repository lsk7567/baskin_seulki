import * as repository from '../repository/storyRepository.js'

/* History이미지출력*/
export const getHistory = async(req, res) =>{
    const historyImg = await repository.getHistory()
    res.json(historyImg)
    res.end()
}

/* Story content 출력(풍선제외) */

export const getStory =async(req,res)=>{
    const storyContent = await repository.getStory()
    res.json(storyContent)
    res.end()
}

/* Bebetter 모달 출력!  */

export const getBebetter = async(req,res) => {
const modalContent = await repository.getBebetter()
res.json(modalContent)
res.end()

}