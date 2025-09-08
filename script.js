const categoryContainer = document.getElementById("categoryContainer");
const cardsContainer = document.getElementById("cardsContainer");

let allPlants = []; // store all plants
let allCategories = ["All Trees"]; // store unique categories

// Load all plants
const loadCards = async () => {
  try {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    allPlants = data.plants;

    // extract unique categories dynamically
    data.plants.forEach((plant) => {
      if (!allCategories.includes(plant.category)) {
        allCategories.push(plant.category);
      }
    });

    showCategories(allCategories);
    renderCards(allPlants);
  } catch (err) {
    console.log("Error loading plants:", err);
  }
};

// Show categories in sidebar
const showCategories = (categories) => {
  categoryContainer.innerHTML = "";
  categories.forEach((cat, index) => {
    categoryContainer.innerHTML += `
          <li data-category="${cat}" class="text-lg p-2 rounded-sm cursor-pointer ${
      index === 0 ? "bg-green-700" : ""
    } hover:bg-green-700">
            ${cat}
          </li>
        `;
  });
};

// Render cards to DOM
const renderCards = (cards) => {
  cardsContainer.innerHTML = "";
  cards.forEach((card) => {
    cardsContainer.innerHTML += `
          <div class="bg-white shadow-lg rounded-lg flex flex-col transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
            <img src="${card.image}" alt="${card.plant_name}" class="w-full h-48 object-cover rounded-t-lg" />
            <div class="py-4 px-3 flex flex-col gap-2">
              <p class="font-bold text-lg">${card.name}</p>
              <p class="text-sm text-justify">${card.description}</p>
              <div class="flex justify-between items-center mt-2">
                <span class="font-bold text-sm py-1 px-3 bg-green-200 rounded-full">${card.category}</span>
                <span class="font-bold text-xl">৳${card.price}</span>
              </div>
              <button class="mt-2 text-sm bg-green-700 px-4 py-2 rounded-full text-white font-bold w-full hover:bg-yellow-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        `;
  });
};

// Filter cards by category
const filterCardsByCategory = (categoryName) => {
  if (categoryName === "All Trees") {
    renderCards(allPlants);
  } else {
    const filtered = allPlants.filter(
      (plant) => plant.category === categoryName
    );
    renderCards(filtered);
  }
};

// Category click event
categoryContainer.addEventListener("click", (e) => {
  if (e.target.localName === "li") {
    const allLi = categoryContainer.querySelectorAll("li");
    allLi.forEach((li) => li.classList.remove("bg-green-700"));

    e.target.classList.add("bg-green-700");

    const categoryName = e.target.dataset.category;
    filterCardsByCategory(categoryName);
  }
});

// Initial load
loadCards();
