async function getMenu() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const menuItems = await response.json();

    displayMenu(menuItems);
    startOrderProcess();
    return menuItems;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
}

const displayMenu = (menuItems) => {
  const menuDiv = document.getElementById("menu");
  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const cardImg = document.createElement("div");
    cardImg.className = "card-img";
    const img = document.createElement("img");
    img.src =
      "https://s3-alpha-sig.figma.com/img/25d6/cb93/f7841f10f589d812f29695ad4fde3fa2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qrWL~LfiPPSkc0Wp03oCAw9ULVxGWIRp2uHf2xltPE8zgqA-9j2fQWnbiVInIhrGyGkF-O8oDc9PqVXuQFhtqlbd-M4~n~r9ndn4qOKnJfGr1OoU~m9melcH1VBABbl4cwXh4LMzzVBv4HSlV5ajmmYWxm9JVO-tndICxN0is0WBXBUZBqxkxSKUilyhSQ6vlLXGLj18BrkJ0xWV1cADsHWVqDMDqxfUtdxgd1unDHGbgShNZas4A3eMIqgLLrCf2GzQgG-aaULLm5px7PG7GAPdXhM6Soh2aVWwIWTO2x9zD8pqGKdjY4rCUebgeG2SsWSqu7zQOISL3gR99mabSw__";
    img.alt = `${item.name}-img`;
    cardImg.appendChild(img);

    const cardText = document.createElement("div");
    cardText.className = "card-text";

    const left = document.createElement("div");
    left.className = "left";
    const itemName = document.createElement("p");
    itemName.className = "bold line-space";
    itemName.textContent = item.name;
    const itemPrice = document.createElement("p");
    itemPrice.className = "line-space";
    itemPrice.textContent = `$${item.price}`;
    left.appendChild(itemName);
    left.appendChild(itemPrice);

    const addToCart = document.createElement("div");
    addToCart.className = "add-to-cart";
    const cartIcon = document.createElement("i");
    cartIcon.innerText = "+";
    cartIcon.classList = "add-btn";
    addToCart.appendChild(cartIcon);

    cardText.appendChild(left);
    cardText.appendChild(addToCart);
    card.appendChild(cardImg);
    card.appendChild(cardText);

    menuDiv.appendChild(card);
  });
};
/// function-------

function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger"];

      const order = {
        items: burgers.sort(() => 0.5 - Math.random()).slice(0, 3),
      };
      console.log(order);

      resolve(order);
    }, 2500);
  });
}

function orderprep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thanku() {
  alert(
    "Thank you for eating with us today! && promises resolved succefully: Inspect the page so you can see the all transaction of resolved promises"
  );
}

async function startOrderProcess() {
  try {
    const order = await takeOrder();
    console.log("Order taken:", order);
    const prepstatus = await orderprep();
    console.log("Order Prepared", prepstatus);
    const paymentStatus = await payOrder();
    console.log("Order Paid:", paymentStatus);
    if (paymentStatus.paid) {
      thanku();
    }
  } catch (error) {
    console.error("Error in order Process", error);
  }
}
