// https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json

console.log("Hello");
const requestBtn = document.getElementById("request-button");

const requestItem = () => {
  const obj = {
    name: "Bibhu",
    id: 2,
  };
  console.log(obj);
};

requestBtn.addEventListener("click", requestItem);
