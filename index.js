// Create three variables that hold references to the list:
// (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.getElementById("item");
const button = document.getElementById("add-item");

button.addEventListener("click", (event) => {
    event.preventDefault();

    // If input is empty, don't create a new element
    if (input.value === "") {
        return;
    }

    // Store the current value of input in a variable
    const shoppingItem = input.value;
    // Clear the input element
    input.value = "";

    // Create new element for <li>, checkbox, <span> and <button>
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.id = "checkbox"

    const span = document.createElement("span");

    const removeButton = document.createElement("button");
    removeButton.id = "remove-button";

    // Adds text to the span element and button
    span.textContent = shoppingItem;
    removeButton.textContent = "Remove";

    // Append checkbox, span and button element as the children of the list element
    li.append(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);

    // Append the list item to the list (ul)
    ul.appendChild(li);

    removeButton.addEventListener("click", () => li.remove())

    input.focus();
})