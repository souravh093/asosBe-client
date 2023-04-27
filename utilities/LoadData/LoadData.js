const loadData = async () => {
  const url = "http://localhost:3000/products";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};

export default loadData;


