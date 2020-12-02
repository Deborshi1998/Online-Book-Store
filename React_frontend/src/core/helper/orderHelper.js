import { API } from "../../backend";
//adding new order entry at the backend database
export const createOrder = (userId, token, orderData) => {
  const formData = new FormData();

  for (const name in orderData) {
    formData.append(name, orderData[name]);
  }

  return fetch(`http://15.207.218.35:8000/api/order/add/${userId}/${token}/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
