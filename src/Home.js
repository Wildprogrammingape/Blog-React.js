import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // data: blogs  means grab the data but call it blogs (别名)
    const {data:blogs, IsLoading, error} = useFetch('http://localhost:8000/blogs');


    // 在JSX中写javascript要加{}, 因此{blogs && ...} 是React中条件判断的写法conditional template 
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {IsLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs:"></BlogList>}
        </div>
    );
}
 
export default Home;