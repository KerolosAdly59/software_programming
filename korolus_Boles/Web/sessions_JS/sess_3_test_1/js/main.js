var Input_Product_name = document.getElementById("ProductName");
var Input_Product_price = document.getElementById("ProductPrice");
var Input_Product_Category = document.getElementById("ProductCategory");
var Input_Product_Description = document.getElementById("ProductDescription");
var Input_Product_Image = document.getElementById("ProductImage");

var my_products =[];


function savedata() 
{
  var Product = {
    Product_name: Input_Product_name.value ,
    Product_price: Input_Product_price.value ,
    Product_Category: Input_Product_Category.value,
    Product_Description: Input_Product_Description.value,
    Input_Product_Image : "../src.jpg"
  }

  my_products.push(Product);
  console.log(my_products);
  cldear_data();
}

function cldear_data() 
{
Input_Product_name.value ="";
Input_Product_price.value="";
Input_Product_Category.value="";
Input_Product_Description.value="";
    Input_Product_Image : ""
}