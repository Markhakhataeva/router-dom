import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

export const Posts = (props) => {
    const  {id} = useParams();

    const location = useLocation();
    console.log(location)


    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then((data)=>setPost(data))
    }, [id]);


    return (
        <div className="posts">

                            <h1>{post.title}</h1>
                            <p>
                                <b>
                                    {post.body}
                                </b>
                            </p>

        </div>
    );
}