import { useState } from "react";
import { useHistory } from "react-router";

// Create New Blog 创建新博客的页面，获取用户输入数据，POST到JSON文件中
const Create = () => {

    // 用户输入的变量，初始为empty string, 改变时触发onChange event listener改变variable的值
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('LongChen');
    // fetch 完成前页面显示Loading, 完成后不显示
    const [IsLoading, setLoading] = useState(false);
    // useHistory() Hook 用来返回页面, add一个新blog后自动返回主页面
    const history = useHistory();


    // handleSubmit 表格提交时触发
    const handleSubmit = (event) => {
        // 阻止提交后自动刷新页面
        event.preventDefault();
        // 将用户输入的信息保存到 blog Object中, title body author会随用户输入改变onChange
        const blog = {title, body, author};
        
        setLoading(true);
        
        // POST 数据 blog Object到 db.json 中
        // fetch(url, ) 第二个参数标明request的类型为POST
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setLoading(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required    
                    value = {title}
                    onChange = {(event) => setTitle(event.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(event) => setBody(event.target.value)}
                >
                </textarea>

                <label>Blog author:</label>
                <select 
                    value = {author}
                    onChange = {(event) => setAuthor(event.target.value)}
                >
                    <option value="Long">LongChen</option>
                    <option value="Barry">Barry</option>
                    
                </select>

                {!IsLoading && <button>Add Blog</button>}
                {IsLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;