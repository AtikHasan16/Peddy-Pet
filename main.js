// Fetch button details
const buttonData = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/categories";
  const response = await fetch(url);
  const data = await response.json();
  displayButton(data);
};
/**"id": 1,
"category": "Cat",
"category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png" */

// Display Category buttons
const btnGroup1 = document.getElementById("btn-group");

const displayButton = (data) => {
  const btnGroup = document.getElementById("btn-group");
  console.log(btnGroup);
  data.categories.forEach((d) => {
    const button = document.createElement("div");
    button.innerHTML = `
    <button
    onclick="displayProduct(${d.id})"
        class="btn btn-xl gap-5 px-15 py-10 rounded-xl hover:rounded-full hover:bg-[#0E7A8110] hover:border-[#0E7A81]"
      >
        <figure class="w-7">
          <img src="${d.category_icon}" alt="" />
        </figure>
        ${d.category}
      </button>
    
    
    `;
    btnGroup.appendChild(button);
    if (btnGroup.childElementCount == 1) {
      console.log(btnGroup.children[0].children[0].click());
    }
  });
};
// Get the Data for card details
const displayProduct = async (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayCards(data.petData);
};

// petData": {
// "petId": 1,
// "breed": "Golden Retriever",
// "category": "Dog",
// "date_of_birth": "2023-01-15",
// "price": 1200,
// "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
// "gender": "Male",
// "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
// "vaccinated_status": "Fully",
// "pet_name": "Sunny"
// }

// Display the card details
const displayCards = (data) => {
  let productContainer = document.getElementById("Product-container");
  productContainer.innerHTML = "";
  const productCard = document.createElement("div");
  productCard.innerHTML = `
  <div class="card bg-base-100 p-4 shadow-lg">
  <figure>
    <img  class="rounded-2xl w-full"
      src="${data.image}"/>
  </figure>
  <div class="">
    <h2 class="card-title">${data.pet_name}</h2>
    <p>${data.price}</p>
    <p>${data.gender}</p>
    <div class="card-actions justify-end">
      <button class="btn">Adopt</button>
    </div>
  </div>
</div>
  
  `;
  productContainer.appendChild(productCard);
};

// Function call
buttonData();
