// // // categories section

// // const categoryContainer = document.getElementById("categoryContainer");

// // const loadcategory = () => {
// //   fetch(`https://openapi.programming-hero.com/api/categories`)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       console.log(data.categories);
// //       const categories = data.categories;
// //       categories.forEach((category) => {
// //         categoryContainer.innerHTML += `
// //             <li class="p-1 hover:bg-green-700 rounded-sm">${category.category_name}</li>
// //             `;
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // };

// // loadcategory();

// // // cards section

// // const cardsContainer = document.getElementById("cards");

// // const loadcards = () => {
// //   fetch("https://openapi.programming-hero.com/api/plants")
// //     .then((res) => res.json())
// //     .then((data) => {
// //       console.log(data.plants);
// //       const cards = data.plants;
// //       cardsContainer.innerHTML = "";

// //       cards.forEach((card) => {
// //         cardsContainer.innerHTML += `
// //           <div class="bg-stone-50 shadow-lg rounded-lg flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
// //             <img
// //               class="w-full h-48 object-cover rounded-t-lg"
// //               src="${card.image}"
// //               alt="${card.plant_name}"
// //             />
// //             <div class="py-4 px-2 w-full flex flex-col gap-2">
// //               <p class="font-bold py-2">${card.name}</p>
// //               <p class="text-sm text-justify">${card.description}</p>
// //               <div class="flex justify-between items-center my-2">
// //                 <span class="font-bold text-sm py-1 px-3 bg-green-200 rounded-full">${card.category}</span>
// //                 <span class="font-bold text-xl">৳${card.price}</span>
// //               </div>
// //               <button
// //                 class="text-sm bg-green-700 px-4 py-2 rounded-full text-green-50 font-bold w-full hover:bg-yellow-700 transition-colors duration-300"
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         `;
// //       });
// //     })
// //     .catch((err) => {
// //       console.log("Error:", err);
// //     });
// // };

// // loadcards();


// // const showCategory = (categories) => {
// //   categories.forEach(category => {
// //     categoryContainer.innerHTML += `
// //             <li id="${categories.id}" class="hover:border-b-4 hover:border-red-600 border-red-600 cursor-pointer">${category.category_name}</li>
// //         `
// //   });

// // categoryContainer.addEventListener("click", (e) => {
// //     console.log(e)
// // })

// //   categoryContainer.addEventListener("click", (e) => {
// //     const allLi = document.querySelectorAll("li");
// //     allLi.forEach((li) => {
// //       li.classList.remove("border-b-4");
// //     });

// //     if (e.target.localName === "li") {
// //       //   console.log(e.target.id);
// //       showLoading()
// //       e.target.classList.add("border-b-4");
// //       loadNewsByCategory(e.target.id);
// //     }
// //   });
// // }




// // const showCategory = (categories) => {
// //   // container clear করে নেই
// //   categoryContainer.innerHTML = "";

// //   categories.forEach((category) => {
// //     categoryContainer.innerHTML += `
// //       <li
// //         id="${category.category_id}"
// //         class="hover:border-b-4 hover:border-red-600 cursor-pointer px-2 py-1"
// //       >
// //         ${category.category_name}
// //       </li>
// //     `;
// //   });

// //   // event delegation
// //   categoryContainer.addEventListener("click", (e) => {
// //     if (e.target.localName === "li") {
// //       const allLi = categoryContainer.querySelectorAll("li");

// //       // remove active class from all
// //       allLi.forEach((li) => {
// //         li.classList.remove("border-b-4");
// //       });

// //       // add active class to clicked li
// //       e.target.classList.add("border-b-4");

// //       // debug
// //       console.log("Clicked category id:", e.target.id);

// //       // আপনার ফাংশন কল করতে পারেন
// //       showLoading();
// //       loadNewsByCategory(e.target.id);
// //     }
// //   });
// // };



// // category container
// const categoryContainer = document.getElementById("categoryContainer");

// // cards container
// const cardsContainer = document.getElementById("cards");

// // fetch categories
// const loadCategory = () => {
//   fetch("https://openapi.programming-hero.com/api/categories")
//     .then((res) => res.json())
//     .then((data) => {
//       showCategory(data.categories);
//     })
//     .catch((err) => console.log("Error loading categories:", err));
// };

// // render categories
// const showCategory = (categories) => {
//   categoryContainer.innerHTML = "";

//   categories.forEach((category) => {
//     categoryContainer.innerHTML += `
//       <li
//         id="${category.category_id}"
//         class="hover:bg-green-700 rounded-sm cursor-pointer px-2 py-1"
//       >
//         ${category.category_name}
//       </li>
//     `;
//   });

// const showCategory = (categories) => {
//   categoryContainer.innerHTML = "";

//   categories.forEach((category, index) => {
//     categoryContainer.innerHTML += `
//       <li
//         id="${category.category_id}"
//         class="cursor-pointer px-2 py-1 ${index === 0 ? 'bg-green-700' : ''}"
//       >
//         ${category.category_name}
//       </li>
//     `;
//   });
// };



// //   categoryContainer.addEventListener("click", (e) => {
// //     if (e.target.localName === "li") {
// //       const allLi = categoryContainer.querySelectorAll("li");
// //       allLi.forEach((li) => li.classList.remove("bg-green-700"));

// //       e.target.classList.add("bg-green-700");
// //       console.log("Clicked category id:", e.target.id);

// //       // এখানে filter করে প্ল্যান্ট দেখাতে পারেন
// //       loadCardsByCategory(e.target.id);
// //     }
// //   });
// // };

// // fetch all plants
// const loadCards = () => {
//   fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) => res.json())
//     .then((data) => {
//       renderCards(data.plants);
//     })
//     .catch((err) => console.log("Error loading plants:", err));
// };

// // render plants
// const renderCards = (cards) => {
//   cardsContainer.innerHTML = "";
//   cards.forEach((card) => {
//     cardsContainer.innerHTML += `
//       <div class="bg-stone-50 shadow-lg rounded-lg flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-2xl hover:scale-105">
//         <img
//           class="w-full h-48 object-cover rounded-t-lg"
//           src="${card.image}"
//           alt="${card.plant_name}"
//         />
//         <div class="py-4 px-2 w-full flex flex-col gap-2">
//           <p class="font-bold py-2">${card.name}</p>
//           <p class="text-sm text-justify">${card.description}</p>
//           <div class="flex justify-between items-center my-2">
//             <span class="font-bold text-sm py-1 px-3 bg-green-200 rounded-full">${card.category}</span>
//             <span class="font-bold text-xl">৳${card.price}</span>
//           </div>
//           <button
//             class="text-sm bg-green-700 px-4 py-2 rounded-full text-green-50 font-bold w-full hover:bg-yellow-700 transition-colors duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     `;
//   });
// };

// // filter plants by category id
// const loadCardsByCategory = (categoryId) => {
//   fetch("https://openapi.programming-hero.com/api/plants")
//     .then((res) => res.json())
//     .then((data) => {
//       const filtered = data.plants.filter(
//         (plant) => plant.category_id == categoryId
//       );
//       renderCards(filtered);
//     });
// };

// // initial load
// loadCategory();
// loadCards();


const categoryContainer = document.getElementById("categoryContainer");
    const cardsContainer = document.getElementById("cardsContainer");

    // Fetch and render categories
    const loadCategories = async () => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/categories");
        const data = await res.json();
        showCategories(data.categories);
      } catch (err) {
        console.log("Error loading categories:", err);
      }
    };

    const showCategories = (categories) => {
      // Clear except the default All Trees
      categoryContainer.innerHTML = `
        <li id="firstLi" class="text-xl p-2 rounded-sm bg-green-700 cursor-pointer">
          All Trees
        </li>
      `;

      categories.forEach(category => {
        categoryContainer.innerHTML += `
          <li id="${category.category_id}" class="text-xl p-2 rounded-sm hover:bg-green-700 cursor-pointer">
            ${category.category_name}
          </li>
        `;
      });

      // Add click event
      categoryContainer.addEventListener("click", (e) => {
        if (e.target.localName === "li") {
          const allLi = categoryContainer.querySelectorAll("li");
          allLi.forEach(li => li.classList.remove("bg-green-700"));

          e.target.classList.add("bg-green-700");

          // Filter cards
          if (e.target.id === "firstLi") {
            loadCards(); // show all
          } else {
            loadCardsByCategory(e.target.id);
          }
        }
      });
    };

    // Fetch all cards
    const loadCards = async () => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/plants");
        const data = await res.json();
        renderCards(data.plants);
      } catch (err) {
        console.log("Error loading plants:", err);
      }
    };

    // Filter cards by category id
    const loadCardsByCategory = async (categoryId) => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/plants");
        const data = await res.json();
        const filtered = data.plants.filter(plant => plant.category_id == categoryId);
        renderCards(filtered);
      } catch (err) {
        console.log("Error filtering plants:", err);
      }
    };

    // Render cards to DOM
    const renderCards = (cards) => {
      cardsContainer.innerHTML = "";
      cards.forEach(card => {
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

    // Initial load
    loadCategories();
    loadCards();