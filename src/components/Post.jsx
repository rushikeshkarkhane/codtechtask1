import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const [postd, setpostd] = useState([]) 
    const { title } = useParams()

    useEffect(() => {
        const getpost = async () => {
            try {
                const postres = await axios.get("http://localhost:8000/getpost.php", { params: { postname: title } })
                if (postres) { 
                    setpostd(postres.data) 
                    console.log(postres.data)
                } else {
                    setpostd([{ "title": "loading" }]) 
                }
            } catch (error) {
                console.log(error)
            }
        }
        getpost()
    }, [title])

    return (
        <>
            <div className="">
                <div className=" bg-cover  text-center overflow-hidden fixed top-5 left-0 h-[450px] w-full z-[0]"
                    style={{ height: '450px',backgroundImage: `url('http://localhost:8000/${postd[1]?.thumbnail}')`,backgroundRepeat :'no-repeat',backgroundSize:'cover' }}>
                    
                </div>
                <div className="max-w-4xl relative z-10 dark:bg-slate-900 p-4 bg-slate-200 mx-auto  mt-[25rem]">                    <div
                        className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <p className="text-2xl">{postd[1]?.created_at || ' '}</p>
                            <h1 className="font-bold text-3xl mb-2">{postd[1]?.title}</h1>
                            <p className="text-base leading-8 my-5">{postd[1]?.descr}</p>

                            <div className="my-5">
                                <img src={'http://localhost:8000/'+postd[1]?.thumbnail} alt="Thumbnail" />
                            </div>

                            <div className="text-base leading-8 my-5" dangerouslySetInnerHTML={{ __html: postd[1]?.content }} />
                          <h1 className="font-extrabold text-4xl pb-4">Tags</h1>
                            <p className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                {postd[1]?.keywords?.split(',').map((keyword, index) => (
                                    <a key={index} href={`#${keyword.trim()}`} className="mr-2">
                                        {keyword.trim()}
                                    </a>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
