import { useState } from "react";
import { FaGoodreads } from "react-icons/fa";

function PostItemComponent(props) {
    const [post, setPost] = useState(props.post);
    const [likeArray, setLikeArray] = useState([]);

    const like = (postId) => {
        setLikeArray([...likeArray, postId]);
    }

    const unlike = (postId) => {
        setLikeArray(likeArray.filter(id => id !== postId));
    }

    return (
        <>
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary">Post ID: {post.id}</h6>
                        <h6 className="text-primary">User ID: {post.userId}</h6>
                    </div>
                    <div className="card-body">
                        <div className="card-title text-danger">
                            {post.title}
                        </div>
                        <p>{post.body}</p>
                    </div>
                    <div className="card-footer">
                        {
                            !likeArray.includes(post.id) ? (
                                <button onClick={() => like(post.id)} className="btn btn-success btn-sm">
                                    <span className="me-2">Like</span>
                                    <FaGoodreads />
                                </button>
                            ) : (
                                <button onClick={() => unlike(post.id)} className="btn btn-danger btn-sm">
                                    <span className="me-2">Unlike</span>
                                    <FaGoodreads />
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItemComponent;
