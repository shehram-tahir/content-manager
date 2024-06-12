import axios from 'axios';


export const getList = (requestUrl = 'https://jsonplaceholder.typicode.com/posts') => {
    return axios.get(requestUrl);
};


export const postApi = (requestUrl = 'https://jsonplaceholder.typicode.com/posts', 
    postData, headers = {}) => axios({
        method: 'post',
        url: requestUrl,
        headers: headers,
        data: postData
    }
    );
