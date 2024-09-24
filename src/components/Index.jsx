import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Index() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const resp = await axios.post("http://localhost:8000/getposts.php", { getpost: '' })
                if (Array.isArray(resp.data)) {
                    const validPosts = resp.data.filter(post => post !== null && post !== undefined)
                    setPosts(validPosts)
                } else {
                    console.error('API response is not an array')
                }
            } catch (error) {
                alert('An error occurred while fetching posts.')
                console.error(error)
            }
        }
        loadPosts()
    }, [])

    return (
        <>
                <h1 className='font-extrabold text-5xl m-4 text-center'>Daily Tech !</h1>
                <h1 className='font-extrabolb text-3xl m-4 dark:text-slate-300'>Recent Posts</h1>
                <div>
                    <div className="grid justify-items-center lg:grid-cols-3 m-4 gap-4">
                        {posts.length > 0 ? (

                            posts.map(post => (
                                post ? (
                                    <>
                                        <div class="max-w-sm mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <img class="rounded-t-lg" src={'http://localhost:8000/' + post.thumbnail} alt="" />
                                            </a>
                                            <div class="p-5">
                                                <a href="#">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                                </a>
                                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.descr}</p>
                                                <Link to={'/post/' + post.slug} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Read more
                                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            ))
                        ) : (
                            <p>No posts available.</p>
                        )}
                    </div>
                </div>
        </>
    )
}
