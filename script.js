const categoryContainer = document.getElementById("categoryContainer");

const loadcategory = () => {
  fetch(`https://openapi.programming-hero.com/api/categories`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.categories);
      const categories = data.categories;
      categories.forEach(category => {
        categoryContainer.innerHTML += `
            <li class="p-1 hover:bg-green-700 rounded-sm">${category.category_name}</li>
            `;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

loadcategory();




const cardsContainer = document.getElementById("cards");

const loadcards = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.plants);
      const cards = data.plants;
      cardsContainer.innerHTML = ""; // clear container

      cards.forEach((card) => {
        cardsContainer.innerHTML += `
          <div class="bg-stone-50 shadow-lg rounded-lg flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
            <img
              class="w-full h-48 object-cover rounded-t-lg"
              src="${card.image}"
              alt="${card.plant_name}"
            />
            <div class="py-4 px-2 w-full flex flex-col gap-2">
              <p class="font-bold py-2">${card.name}</p>
              <p class="text-sm text-justify">${card.description}</p>
              <div class="flex justify-between items-center my-2">
                <span class="font-bold text-sm py-1 px-3 bg-green-200 rounded-full">${card.category}</span>
                <span class="font-bold text-xl">৳${card.price}</span>
              </div>
              <button
                class="text-sm bg-green-700 px-4 py-2 rounded-full text-green-50 font-bold w-full hover:bg-yellow-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

loadcards();
