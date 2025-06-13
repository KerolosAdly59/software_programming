

var Input_Product_name = document.getElementById("ProductName");

var Input_Product_price = document.getElementById("ProductPrice");

var Input_Product_Category = document.getElementById("ProductCategory");

var Input_Product_Description = document.getElementById("ProductDescription");

var Input_Product_Image = document.getElementById("ProductImage");


var my_products = [];

if(  localStorage.getItem("all_product") != null   )
{
      my_products =JSON.parse(localStorage.getItem("all_product"));
          Display_products();

}
function savedata() 
{
  var Product = {
    Product_name: Input_Product_name.value,
    Product_price: Input_Product_price.value,
    Product_Category: Input_Product_Category.value,
    Product_Description: Input_Product_Description.value,
    Input_Product_Image: "../src.jpg"
}
  my_products.push(Product);
  console.log(my_products);
  //Display 
   Display_products();
  cldear_data();
   localStorage.setItem("all_product" ,JSON.stringify(my_products) );

}


function cldear_data() 
{

  Input_Product_name.value = "";
  Input_Product_price.value = "";
  Input_Product_Category.value = "";
  Input_Product_Description.value = "";
  Input_Product_Image: "";

}

function Display_products()
{
  var Dis_prodcut ='';
  for(counter=0; counter<my_products.length; counter++)
  {
  Dis_prodcut += `  <div class="col-md-6  col-lg-4 col-xl-3 ">
                <div class="card" style="width: 18rem;">
                    <img src="./images/4.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${my_products[counter].Product_name}</h5>
                        <p class="card-text"> ${my_products[counter].Product_Description} </p>
                        <h4 class="h6"> <span class="fw-bold">Category</span> ${my_products[counter].Product_Category}</h4>
                        <h5 class="h6"><span class="fw-bold">price</span> ${my_products[counter].Product_price} EGP</h5>
                    </div>
                    <div class="card-footer">
                        <button class=" btn  btn-warning me-2">Update</button>
                        <button onclick="Delete_product(${counter})"  class=" btn  btn-danger me-2">Delete</button>

                    </div>
                </div>
            </div>` ;
  }
  document.getElementById("Row_Data").innerHTML=Dis_prodcut;
}

function Delete_product(index)
{

my_products.splice(index ,1);
   localStorage.setItem("all_product" ,JSON.stringify(my_products) );
Display_products();

}

