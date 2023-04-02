import axios from 'axios';

export default async function getData(userId) // async function {
    try {
        const getUser =await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); // await axios.get
        const getPosts =await axios.post(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{ // await axios.post
            userId: 1, 
			id: 1,
			title: "sunt aut facere repellat",
			body: "quia et suscipit suscipit recusandae"
          });
    
        const [userData, postData] = await Promise.all([getUser, getPosts]);
        userData.data.address.geo = JSON.stringify(userData.data.address.geo); // convert object to string
        return {
          user: userData.data,
          posts: postData.data,
        };
      } catch (error) {
        console.error(error);
      }


