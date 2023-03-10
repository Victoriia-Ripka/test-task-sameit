// var axios = require("axios");

// const data = JSON.stringify({
//   apiKey: "b4ba80936e642b9d6aaa34545939b178",
//   modelName: "Address",
//   calledMethod: "getWarehouses",
//   methodProperties: {
//     CityName: "Київ",
//     Page: "1",
//     Limit: "10",
//     Language: "UA",
//   },
// });

// const config = {
//   method: "get",
//   maxBodyLength: Infinity,
//   url: "https://api.novaposhta.ua/v2.0/json/",
//   headers: {
//     "Content-Type": "application/json",
//     Cookie:
//       "PHPSESSID=e2ks7odckmv9iohk8l9s295v0l; YIICSRFTOKEN=eb9f413669daa60d85d90873873f39e63b599783s%3A88%3A%22UVFJcn5nMU5VTjZudk5vOVhHY0FYQ2o3X3JUQjhzb3JJRiyFI3no_32C21dFAtxTVo907OhhNiaDXaiZfAGH-w%3D%3D%22%3B",
//   },
//   data: data,
// };

// export const fetchDepartments = async () => {
//   try {
//     const { data } = await axios.get("https://api.novaposhta.ua/v2.0/json/", {
//       data: {
//         apiKey: "b4ba80936e642b9d6aaa34545939b178",
//         modelName: "Address",
//         calledMethod: "getWarehouses",
//         methodProperties: {
//           CityName: "Київ",
//           Page: "1",
//           Limit: "10",
//           Language: "UA",
//         },
//       },
//     });
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
//   //   const data = axios(config)
//   //     .then(function (response) {
//   //       console.log(JSON.stringify(response.data));
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   //     console.log(data)
//   //   return data;
//   //   try {
//   //     const { data } = axios(config);
//   //     console.log(data);
//   //     return data;
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
// };

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "PHPSESSID=e2ks7odckmv9iohk8l9s295v0l; YIICSRFTOKEN=eb9f413669daa60d85d90873873f39e63b599783s%3A88%3A%22UVFJcn5nMU5VTjZudk5vOVhHY0FYQ2o3X3JUQjhzb3JJRiyFI3no_32C21dFAtxTVo907OhhNiaDXaiZfAGH-w%3D%3D%22%3B"
);

const raw = JSON.stringify({
  apiKey: "b4ba80936e642b9d6aaa34545939b178",
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityName: "Київ",
    Page: "1",
    Limit: "10",
    Language: "UA",
  },
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

export const fetchDepartments = async () => {
  const data = await fetch("https://api.novaposhta.ua/v2.0/json/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  console.log(data);
  return data;
};
