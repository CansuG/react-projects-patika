import axios from 'axios';

const userData = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
        resolve(data);
    });
}

const postData = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
        resolve(data);
    });
}

export default async (number) => {

    const user = await userData(number);
    const posts = await postData(number);

    var post = posts.find((post) => post.id === 1);

    user["posts"] = post;

    return user;
};