import axios from "axios";

export const fetchDepartments = async () => {
  const body = JSON.stringify({
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

  try {
    const { data } = await axios.post(
      "https://api.novaposhta.ua/v2.0/json/",
      body
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
