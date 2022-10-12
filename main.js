const mobile_menu_icon = document.querySelector(".mobile-menu-icon");
const mobile_menu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".stuff-container");


mobile_menu_icon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobile_menu.classList.toggle("inactive");
}



// stuff cards

const stuffList = [{
    name: "Amiga 500",
    year: "1987",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amiga500_system.jpg/1280px-Amiga500_system.jpg"
},
{
    name: "Commodore 64",
    year: "1982",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Commodore-64-Computer-FL.jpg/1920px-Commodore-64-Computer-FL.jpg"
},
{
    name: "Apple II",
    year: "1982",
    image: "http://www.computinghistory.org.uk/userdata/images/large/77/22/product-77722.jpg"
},
{
    name: "The beatles",
    year: "1960's-1970's",
    image: "https://cdn.cnn.com/cnnnext/dam/assets/131111111233-beatles-holding-albums.jpg"
},
{
    name: "Floppy Disks",
    year: "1960's",
    image: "https://www.stonegateit.co.uk/wp-content/uploads/2016/05/Floppy-disc.png"
},
{
    name: "Olivetti Lettera 32",
    year: "1963",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Machine_a_ecrire_arabe.png/594px-Machine_a_ecrire_arabe.png"
},
];


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product image
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);

        // click listtener for info
        //productImage.addEventListener("click", openAsideProductDetail);

        // product info
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        
        // price and name div
        const productInfoDiv = document.createElement("div");
            
        const productYear = document.createElement("p");
        productYear.innerText = product.year;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productYear, productName);
    
        const productFigure = document.createElement("figure");
        // add final result to main divs
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(productImage, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(stuffList);
renderProducts(stuffList);
