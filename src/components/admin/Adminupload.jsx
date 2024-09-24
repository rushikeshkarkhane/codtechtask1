import React, { useState } from 'react';
import axios from 'axios';
import Editortiny from '../Editor';
import Sucess from './Sucess';
function Adminupload() {
    const [editorContent, setEditorContent] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const [uploadState, setUploadState] = useState('');
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const handleFileChange = (event) => {
        setThumbnail(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('keywords', keywords);
        formData.append('content', editorContent);
        formData.append('thumbnail', thumbnail);

        try {
            const response = await axios.post('http://localhost:8000/uploadpost.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            console.log(response.data);
            setUploadState('success'); 
            setMessage('Post uploaded successfully!');
        } catch (error) {
            console.error('Error uploading post:', error);
            setUploadState('failed');
            setMessage('Failed to upload post. Please try again.');
        }
    };

    return (
        <>
            <div className="pt-16 sm:ml-64">
            {uploadState && <Sucess state="sucess" message={message} />}
            </div>
            <div className="flex flex-col justify-center items-center">
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <h1 className="my-5 text-3xl font-extrabold">Upload Post</h1>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="title" 
                            id="floating_email" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required 
                        />
                        <label 
                            htmlFor="floating_email" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Enter Post Title
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="description" 
                            id="floating_password" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          
                        />
                        <label 
                            htmlFor="floating_password" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Description
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="keywords" 
                            id="floating_repeat_password" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            required 
                        />
                        <label 
                            htmlFor="floating_repeat_password" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Keywords
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="file" 
                            name="thumbnail" 
                            id="floating_first_name" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            onChange={handleFileChange}
                            required 
                        />
                        <label 
                            htmlFor="floating_first_name" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Thumbnail
                        </label>
                    </div>
                    <Editortiny value={editorContent} onEditorChange={handleEditorChange} />
                    <button 
                        type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Adminupload;
