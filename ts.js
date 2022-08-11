var str= window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);
// returning product id

let source = 'http://localhost:3000/api/products';
fetch(source).then((response) =>
response.json().then((data) => {
    console.log(data);
//returning API table of data
var product = data.findIndex(item => item._id === id);
console.log(product);
//returning object number corresponding to id
console.log(data[product]);
//returning all object parameters
var productimage = data[product].imageUrl;
var productalttxt = data[product].altTxt;
var productname = data[product].name;
var productprice = data[product].price;
var productdescription = data[product].description;
var productcolor = data[product].colors;
console.log(productcolor)
}))
