// make it re-useable

import { Link } from "react-router-dom"


const BlogList = ({blogs, title}) => {

    // {blogs, title, handleDelete} = props
    // const blogs = props.blogs;

    // blogs.map()里面的callback function返回的是JSX所以用()
    // JSX用key attribute来track每一个map中的值，等同于id

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;