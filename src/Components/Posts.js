import React from 'react'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/home");

    }
    return (
        <div>
            <h1>Hello posts</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Posts
