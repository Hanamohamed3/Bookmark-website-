var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var productList;
var addProductBtn = document.getElementById("addProductBtn");
var updateProductBtn = document.getElementById("updateProductBtn");

if(localStorage.getItem("productList")== null){
    productList=[];

}else{
    productList=JSON.parse(localStorage.getItem("productList"));
    // console.log(productList);
    display(productList);
}

function submit(){
if(validateSiteName()== true){

    var product={
        siteName: siteName.value,
        siteURL: siteURL.value,
        
    }
 productList.push(product);
 display(productList);
 updateFormValues();
 localStorage.setItem("productList",JSON.stringify(productList));
//  console.log("hello from the other side", productList);
}
else{
    // alert("Invalid Name")
}
 }
//  single respnsibility concept 
function updateFormValues(flag){
    siteName.value=flag? flag.name :"";
    siteURL.value=flag? flag.price :"";

}
 function displayProduct(products){
var cartona=``;
for (var i=0; i<products.length; i++){
cartona+= `<tr>
<td>0</td>
<td>htc</td>
<td>
    <button class="btn btn-warning btn-sm">visit</button>
</td>
<td>
    <button class="btn btn-danger btn-sm">Delete</button>
</td>
</tr>`
}
document.getElementById("tBody").innerHTML= cartona;
 }

function display(list) {
    var cartona = '';
    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
        <td>${i + 1}</td>
        <td>${list[i].siteName}</td>
        <td> 
        <button onclick="getUpdatedproduct(${i})" class="btn btn-sm text-white" style="background-color:#9eb23b;"><i class="fa-solid fa-eye"></i> Visit</button>
        </td>
        <td>
            <button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i>  Delete</button>
        </td>
        </tr> `;
    }
    document.getElementById("tBody").innerHTML = cartona;
}

function deleteProduct(index){
    productList.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productList));

display(productList);
}


function validateSiteName(){
    var regex=/^[a-z][a-z]{3,12}$/;
    if(regex.test(siteName.value)== true){
        siteName.style.border="none"
        document.getElementById("wrongName").classList.add("d-none");
        return true
    }else{
        siteName.style.border="5px solid red"
        document.getElementById("wrongName").classList.remove("d-none");
        return false 
    }
}

   function isUrlValid(){
    var pattern=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(pattern.test(siteURL.value)== true){
        siteURL.style.border="none"
        document.getElementById("wrongURL").classList.add("d-none");
        return true
    }else{
        siteURL.style.border="5px solid red"
        document.getElementById("wrongURL").classList.remove("d-none");
        return false 
    }
}
    function getUpdatedproduct(index) {
        var product = productList[index];
        if (product && product.siteURL) {
            window.open(product.siteURL, '_blank');
        }
    }
    