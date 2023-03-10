import axios from "axios";

export const fetchDepartments = async (page) => {
  const body = JSON.stringify({
    apiKey: "b4ba80936e642b9d6aaa34545939b178",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: "Київ",
      Page: page,
      Limit: "10",
      Language: "UA",
    },
  });

  try {
    const { data } = await axios.post(
      "https://api.novaposhta.ua/v2.0/json/",
      body
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
