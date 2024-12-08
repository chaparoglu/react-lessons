import { useEffect, useState } from "react"
import axios from "axios";
import PostItemComponent from "../components/PostItemComponent"

function PostListsComponent(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            setPosts(response.data);
        }).catch(function (error) {
            console.log(error)
        }).finally(function () {
            console.log("Merhaba");
        }) 
    },[]);

    return (
        <div className="mt-4">
            <h3 className="text-success">Paylaşılan postlar</h3>
            <div className="row mt-4">
            {
                posts?.map((post,index) => (
                    <PostItemComponent key={index} post={post}/>
                ))
            }
            </div>
        </div>
    )
}

export default PostListsComponent