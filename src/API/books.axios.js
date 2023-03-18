import axios from './axios';

const searchBooks = (bookName) => {
    return axios({
        method: "get",
        url: "search.json",
        params: {
            q: bookName
        }
    })
}

export {
    searchBooks,
}