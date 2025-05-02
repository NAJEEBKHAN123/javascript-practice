document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("input");
  let addBtn = document.getElementById("btn");
  let list = document.getElementById("container");

  addBtn.addEventListener("click", () => {
    let todoText = input.value.trim();
    if (todoText === "") {
      return;
    }

    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addBtn.click();
      }
    });

    let li = document.createElement("li");
    li.textContent = todoText;
    list.appendChild(li);

    let deleteBtn = document.createElement("button");
    let BtnText = document.createTextNode("delete");
    deleteBtn.style.fontSize = "20px";

    deleteBtn.appendChild(BtnText);

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    input.value = "";
  });
});
