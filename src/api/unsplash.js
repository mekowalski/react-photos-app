//Goal is to put some amount of code that contains configuration of Axios, ore related to getting Unsplash
//to accept the request
import axios from 'axios';

//create an instance of Axios client with a couple of default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cd676e1ef029ce061d3722b47bc05267297569b249b49306547aa9fb1de2213e'
  }
});
