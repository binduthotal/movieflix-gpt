// const data = require("./complexfamily.json")
// console.log("data:",data);

function getData()  {
  fetch("./complexfamily.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // You can now work with the parsed JSON data here
    })
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );
};

getData()

