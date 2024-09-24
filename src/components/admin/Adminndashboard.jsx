// import React,{useEffect,useState} from 'react';
// import 'flowbite';
// import axios from 'axios'

// function AdminDashboard() {
//   const [post, setpost] = useState("null")
//   useEffect(() => {
//     const loadpost = async ()=>{
//       try {
//         const resp = await axios.post("http://localhost:8000/checkpost.php" ,null,{withCredentials: true})
//         if(resp){
//         setpost(resp.data)
//         }
//         else{
//           setpost("err")
//         }
//       } catch (error) {
//         alert(error)
//         console.error(error)
//       }
//     }
//     loadpost()
//   }, [])
//   return (
// <>
// <div class="pt-16 sm:ml-64">
// <h1 className="font-bold text-3xl m-3">Recent Posts</h1>
// <div className="m-3">


// <div class="relative overflow-x-auto  rounded-lg">
//     {post}
// </div>

// </div>
// </div>

// </>
//   );
// }

// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../src/index.css'
function AdminDashboard() {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const resp = await axios.post("http://localhost:8000/checkpost.php", null, { withCredentials: true });
                if (resp.data) {
                    setHtmlContent(resp.data);
                } else {
                    setHtmlContent("<p>No data available.</p>");
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                setHtmlContent("<p>Error loading posts.</p>");
            }
        };
        loadPosts();
    }, []);

    return (
        <>
            <div className="pt-16 sm:ml-64">
                <h1 className="font-bold text-3xl m-3">Recent Posts</h1>
                <div className="m-3 relative overflow-x-auto rounded-lg">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
