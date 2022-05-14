console.log("Let's get this party started!");
const form = document.querySelector("form");
const searchtxt = document.querySelector("#searchtxt");
const Div = document.querySelector("#MainDiv");
const Btn = document.querySelector("#Delete");
console.log(form);
form.addEventListener("submit", SearchSubmit);


function SearchSubmit(e)
{
    e.preventDefault();
    console.log(e);
    console.log(searchtxt.value);
    GetSearch(searchtxt.value);
    searchtxt.value = "";
}

async function GetSearch(search)
{
    const response = await axios.get(GipUrl(search));
    console.log(response);
    let url = response.data.data[RNum(response.data.data.length)].images.original.url;
    console.log(url);
    CreateGip(url);
}

Btn.addEventListener("click", DeleteMe )

function GipUrl(search)
{
    return `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=KtZihJmYzjWNsgLugIFV5wUBzbuL3TXD&q=&limit=25&offset=0&rating=g&lang=en`
}

function RNum(max)
{
    return Math.floor(Math.random() * max);
}

function CreateGip(imgurl)
{
    Tdiv = document.createElement("div");
    Timg = document.createElement("img");
    Timg.src = imgurl;
    Tdiv.append(Timg);
    Div.append(Tdiv);
}

function DeleteMe()
{
    Div.innerHTML = "";
}