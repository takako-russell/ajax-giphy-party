const search = document.querySelector("#search-input");
const submitBtn = document.querySelector("#submit-btn");
const removeBtn = document.querySelector("#remove-images");

const showGif = document.querySelector("#show-giphy");

newGiphy = (data) => {
  console.log(data);
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const dataLength = data.data.length;
  const randomNum = Math.floor(Math.random() * dataLength);

  newDiv.classList.add("image-wapper");
  newImg.src = data.data[randomNum].images.original.url;

  newDiv.appendChild(newImg);
  showGif.appendChild(newDiv);
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  getData();
});

removeBtn.addEventListener("click", function (e) {
  $(".image-wrapper").remove();
});

const getData = async function () {
  let searchTerm = search.value;
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "Te5mPx0vxB8DvU6h4Sk2iP9NmyDo2eI4",
    },
  });
  newGiphy(res.data);
};
