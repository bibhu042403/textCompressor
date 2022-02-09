// https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json
const itemAPI =
  "https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json";
console.log("Hello");
const requestBtn = document.getElementById("request-button");
const paragraphr = document.getElementById("response"); //id from html table

const beautifier = (obj) => {
  // function to take required object from API table
  const HTML_MARKUP = `
    <tr>
        <td>${obj.name}</td>
        <td>${obj.id}</td>
        <td>${obj.price}</td>
        <td>${obj.rating}</td>
    </tr>
    `;
  return HTML_MARKUP;
};

// callback function, promises, async await

const requestItem = async () => {
  const response = await fetch(itemAPI); // XMLHttp request
  const data = await response.json();

  console.log(data);
  const productList = data.product;
  for (let i = 0; i < productList.length; i++) {
    // Loop to take all data one by one and put in the table
    paragraphr.innerHTML += beautifier(productList[i]);
  }
};

requestBtn.addEventListener("click", requestItem);
