// JavaScript file (script.js)

// Sample list of items (you can replace this with your actual data)
const itemList = [
    "Item 1",
    "Item 2",
    "Item 3",
    // Add more items here
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-box input");
    const searchResults = document.querySelector(".search-results");
  
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting
  
      const searchTerm = searchInput.value.toLowerCase();
      const filteredItems = itemList.filter((item) =>
        item.toLowerCase().includes(searchTerm)
      );
  
      displaySearchResults(filteredItems);
    });
  
    function displaySearchResults(results) {
      searchResults.innerHTML = ""; // Clear previous results
  
      if (results.length === 0) {
        searchResults.innerHTML = "No results found.";
      } else {
        results.forEach((result) => {
          const listItem = document.createElement("li");
          listItem.textContent = result;
          searchResults.appendChild(listItem);
        });
      }
    }
  });
  