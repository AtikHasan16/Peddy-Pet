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
const displayButton = (data) => {
  const btnGroup = document.getElementById("btn-group");
  data.categories.forEach((d) => {
    const button = document.createElement("div");
    button.innerHTML = `
    <button
        class="btn btn-xl gap-5 px-15 py-10 rounded-xl hover:rounded-full hover:bg-[#0E7A8110] hover:border-[#0E7A81]"
      >
        <figure class="w-7">
          <img src="${d.category_icon}" alt="" />
        </figure>
        ${d.category}
      </button>
    
    
    `;
    btnGroup.appendChild(button);
  });
};
// Function call
buttonData();
