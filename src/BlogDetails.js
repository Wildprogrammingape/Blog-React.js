// GET data with id
// 获取某个id的blog, 删除某个Id的blog

import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    // useParams() Hook 用于 router parameter (id), 如 http://localhost:3000/blogs/3
    // 该Hook用来获取用户输入的endpoint的id
    const {id} = useParams();

    // 调用 useFetch() 函数获取数据
    const {data: blog, IsLoading, error} = useFetch('http://localhost:8000/blogs/' + id);

    // 用 useHistory() Hook 来 redirect 到 home-page
    const history = useHistory();

    // 删除某个id的blog
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {IsLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;