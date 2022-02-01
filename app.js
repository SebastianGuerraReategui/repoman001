// SELECTORES
const productsEl2 = document.querySelector(".products2");
const productsEl1 = document.querySelector(".products1");
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");


// LOS PRODUCTOS - HELADOS
function renderProdcuts2() {
  products2.forEach((product2) => {
    productsEl2.innerHTML += `
    <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
    <img src="${product2.imgSrc}" class="img-fluid rounded-3" alt="${product2.name}">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 signifier">
      <h6 class="text-muted">${product2.description}</h6>
      <h6 class="text-black mb-0">${product2.name}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex cantidad">
          <div class="add-to-cart" onclick="addToCart(${product2.id})">
          <img id="carro" src="../images/carrit.jpg" alt="add to cart">
          </div>
    </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 class="mb-0">S/.${product2.price}</h6>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
          </div>
      </div>
        `;
  });
}
renderProdcuts2();

function renderProdcuts1() {
  products1.forEach((product1) => {
    productsEl1.innerHTML += `
    <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
    <img src="${product1.imgSrc}" class="img-fluid rounded-3" alt="${product1.name}">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 signifier">
      <h6 class="text-muted">${product1.description}</h6>
      <h6 class="text-black mb-0">${product1.name}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex cantidad">
          <div class="add-to-cart" onclick="addToCart(${product1.id})">
          <img id="carro" src="../images/carrit.jpg" alt="add to cart">
          </div>
    </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 class="mb-0">S/.${product1.price}</h6>
          </div>
          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
          </div>
      </div>
        `;
  });
}
renderProdcuts1();

function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
      <div class="row mb-4 d-flex justify-content-between align-items-center">
      <div class="col-md-2 col-lg-2 col-xl-2">
      <img src="${product.imgSrc}" class="img-fluid rounded-3" alt="${product.name}">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3 signifier">
        <h6 class="text-muted">${product.description}</h6>
        <h6 class="text-black mb-0">${product.name}</h6>
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex cantidad">
            <div class="add-to-cart" onclick="addToCart(${product.id})">
            <img id="carro" src="../images/carrit.jpg" alt="add to cart">
            </div>
      </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 class="mb-0">S/.${product.price}</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
            </div>
        </div>
          `;
    });
  }
  renderProdcuts();

  let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


function addToCart(id) {
  
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item2 = products2.find((product2) => product2.id === id);
    const item1 = products1.find((product1) => product1.id === id);
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      ...item1,
      ...item2,
      numberOfUnits: 1,
    });
  }

  updateCart();
}



function updateCart() {
  renderCartItems();
  renderSubtotal();

  
  localStorage.setItem("CART", JSON.stringify(cart));
}


function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
  
    subtotalEl.innerHTML = `Subtotal (${totalItems} productos): S/.${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
  }


function renderCartItems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
          <div class="cart-item">
              <div class="item-info" onclick="removeItemFromCart(${item.id})">
                  <img src="${item.imgSrc}" alt="${item.name}">
                  
              </div>
              <div class="unit-price">
                  <small>S/.</small>${item.price}
              </div>
              <div class="units">
                  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
              </div>
          </div>
        `;
    });
  }
  
  
  function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
  }
  
  
  function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;
        }
      }
  
      return {
        ...item,
        numberOfUnits,
      };
    });
  
    updateCart();
  }

