import {promises as fsPromises} from 'fs'

export const getPraise =() =>{
    const path = 'data/praise.json'
    const praise = fsPromises
                        .readFile(path, 'utf-8')
                        .then((data)=>JSON.parse(data))
                        .catch(error=>console.log(error))
return praise
                    }


export const getFAQ = async() =>{
    const path = 'data/cscenter_faq.json';
    const faq = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return faq
}

export const getNotice = async() =>{
    const path = 'data/notice.json';
    const notice = fsPromises.readFile(path,"utf-8")
                .then((data)=>{
                    return JSON.parse(data)
                })
                .catch(error=>console.log(error))
    return notice
}
export const getNoticeDetail = async(id) =>{
    const path = 'data/notice.json';
    const noticedetail = fsPromises.readFile(path,"utf-8")
                    .then((data)=>{
                        const jsonData = JSON.parse(data)
                        const noticedetail = jsonData.filter(item=>item.id === id)
                    return noticedetail[0]
                })
                .catch(error=>console.log(error))
                console.log(noticedetail)
    return noticedetail
}