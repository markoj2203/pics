import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 87901487d77aae1ea8f4bdcdb1de8a8ef3a2f2203d40ea9dbe46cdca010a722f"
      }
});