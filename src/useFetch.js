// Custom Hook （自己定制的函数让代码可复用，如下useFetch可用于不同component的不同url）
import {useState, useEffect} from 'react';

// 让 useFetch代码方便复用
const useFetch = (url) => {

    // Use React Hook useState() to change the variable of functional component
    const [data, setdata] = useState(null);
    // 添加loading message
    const [IsLoading, setLoading] = useState(true);
    // 添加error message
    const [error, setError] = useState(null);


    // useEffect() Hook的使用, 参数是function,每次render时执行
    useEffect(() => {

        // used to stop fetch
        // const abortCont = new AbortController();
        // fetch的第二个参数: {signal: abortCont.signal}

        fetch(url)
            .then(response => {
                if (response.ok === false){
                    throw Error('Could not fetch the data from that resourse');
                }
                return response.json();
            })
            .then(data => {
                setdata(data);
                setLoading(false);
            })
            .catch(error => {  
                setError(error.message);
                setLoading(false);
            });

        // clean up function 处理fetch data同时跳转页面的问题 (abort error)
        // return () => abortCont.abort();
    }, [url]);  // dependency [url] means useEffect Hooks run when url changes


    return {data, IsLoading, error};
}
 
export default useFetch;