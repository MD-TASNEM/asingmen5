const categoryContainer = document.getElementById("categoryContainer");
const cardsContainer = document.getElementById("cardsContainer");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let allPlants = [];
let allCategories = ["All Trees"];
let cart = [];

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Show Loading Spinner
const showLoading = () => {
  cardsContainer.innerHTML = `
      <div class="w-full h-full flex justify-center items-center py-10">
        <span class="loading loading-dots loading-xs"></span>
<span class="loading loading-dots loading-sm"></span>
<span class="loading loading-dots loading-md"></span>
<span class="loading loading-dots loading-lg"></span>
<span class="loading loading-dots loading-xl"></span>
      </div>
    `;
};

// Load All Plants
const loadCards = async () => {
  try {
    showLoading(); // লোডিং দেখাও
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    allPlants = data.plants;

    // Extract unique categories
    data.plants.forEach((plant) => {
      if (!allCategories.includes(plant.category)) {
        allCategories.push(plant.category);
      }
    });

    showCategories(allCategories);
    renderCards(allPlants); // কার্ড রেন্ডার করো
  } catch (err) {
    console.error("Error loading plants:", err);
    cardsContainer.innerHTML = `<p class="text-red-500">Failed to load plants. Please try again later.</p>`;
  }
};

// Show Categories
const showCategories = (categories) => {
  categoryContainer.innerHTML = "";
  categories.forEach((cat, index) => {
    categoryContainer.innerHTML += `
        <li data-category="${cat}" class="text-lg p-2 rounded-sm cursor-pointer ${
      index === 0 ? "bg-green-700 text-white" : ""
    } hover:bg-green-700 hover:text-white">${cat}</li>
      `;
  });
};

// Render Cards
const renderCards = (cards) => {
  cardsContainer.innerHTML = "";
  cards.forEach((card) => {
    cardsContainer.innerHTML += `
        <div class="card bg-white shadow-lg rounded-lg flex flex-col transition duration-300 hover:shadow-2xl hover:scale-105">
          <img src="${card.image}" alt="${
      card.name
    }" class="w-full h-48 object-cover rounded-t-lg"/>
          <div class="py-4 px-3 flex flex-col gap-2">
            <p class="plant-name font-bold text-lg cursor-pointer">${
              card.name
            }</p>
            <p class="text-sm text-justify">${card.description.slice(
              0,
              80
            )}...</p>
            <div class="flex justify-between items-center mt-2">
              <span class="font-bold text-sm py-1 px-3 bg-green-200 rounded-full">${
                card.category
              }</span>
              <span class="font-bold text-xl">৳${card.price}</span>
            </div>
            <button class="add-to-cart mt-2 text-sm bg-green-700 px-4 py-2 rounded-full text-white font-bold w-full hover:bg-yellow-700 transition-colors duration-300">Add to Cart</button>
          </div>
        </div>
      `;
  });
};

// Filter Cards by Category
const filterCardsByCategory = (categoryName) => {
  if (categoryName === "All Trees") {
    renderCards(allPlants);
  } else {
    renderCards(allPlants.filter((p) => p.category === categoryName));
  }
};

// Category Click Event
categoryContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    categoryContainer
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("bg-green-700", "text-white"));
    e.target.classList.add("bg-green-700", "text-white");
    filterCardsByCategory(e.target.dataset.category);
  }
});

// Card Click Events
cardsContainer.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  // Show Modal on Plant Name Click
  if (e.target.classList.contains("plant-name")) {
    const name = e.target.innerText;
    const plant = allPlants.find((p) => p.name === name);
    if (!plant) return;

    const modalWrapper = document.createElement("div");
    modalWrapper.innerHTML = `
        <dialog class="modal" id="plantModal">
          <form method="dialog" class="modal-box w-11/12 max-w-3xl">
            <h3 class="font-bold text-xl mb-2">${plant.name}</h3>
            <img src="${plant.image}" alt="${plant.name}" class="w-full h-64 object-cover rounded-lg mb-4"/>
            <p class="mb-2">${plant.description}</p>
            <p class="font-bold">Category: ${plant.category}</p>
            <p class="font-bold">Price: ৳${plant.price}</p>
            <div class="modal-action">
              <button class="btn">Close</button>
            </div>
          </form>
        </dialog>
      `;
    document.body.appendChild(modalWrapper);
    document.getElementById("plantModal").showModal();
  }

  // Add to Cart
  if (e.target.classList.contains("add-to-cart")) {
    const name = card.querySelector(".plant-name").innerText;
    const price = parseInt(
      card.querySelector("span.font-bold.text-xl").innerText.replace("৳", "")
    );
    const existing = cart.find((item) => item.name === name);
    if (existing) existing.qty += 1;
    else cart.push({ name, price, qty: 1 });
    renderCart();
  }
});

// Render Cart
const renderCart = () => {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
    cartItemsContainer.innerHTML += `
        <div class="bg-green-100 flex justify-between items-center p-2 rounded">
          <div class="flex flex-col">
            <span class="font-bold">${item.name}</span>
            <span class="text-gray-500">৳${item.price} x ${item.qty}</span>
          </div>
          <i class="fa-solid fa-xmark cursor-pointer remove-item" data-name="${item.name}"></i>
        </div>
      `;
  });
  cartTotalElement.innerText = "৳" + total;
};

// Remove Item from Cart
cartItemsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const name = e.target.dataset.name;
    cart = cart.filter((item) => item.name !== name);
    renderCart();
  }
});

// Initial Load
loadCards();
