import { API } from "../../backend";
//API call to backend to get product data
export const getProducts = () => {
  return fetch('http://15.207.218.35:8000/api/product', { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
