const addText = document.getElementById("add_text");
const addBtn = document.getElementById("add_btn");
const list = document.getElementsByClassName("todo");

addText.addEventListener("click", () => {
    addText.value = ""
});

addText.addEventListener("mouseover", () => {
    addText.style.cursor = "pointer";
});

addBtn.addEventListener("click", () => {
    if (addText.value == "") {
        alert("Enter a task")
    }
    else{
        const div = document.createElement("div");
        div.className = "todo";
        div.id = "div_list";
        div.style.marginBottom = "2%";
        div.style.marginLeft = "30%"
        // div.style.display = "flex";
        // div.style.justifyContent = "space-between";
        // div.style.alignItems = "center";
        // div.style.height = "auto";
        // div.style.maxWidth = "700px";


        
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.style.cursor = "pointer";
        check.id="checkbox";
        check.style.width = "30px";
        check.style.height = "30px";
        // check.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";

        const label = document.createElement("label");
        // label.setAttribute("for", "checkbox")
        label.className = "add_text"
        label.textContent = addText.value
        // label.style.maxWidth = "300px"
        // label.style.maxHeight = "auto"

        const trash = document.createElement("i");
        trash.className = "far fa-trash-alt";
        trash.id = "trash";

        document.body.appendChild(div);
        div.appendChild(check);
        div.appendChild(label);
        div.appendChild(trash);

        check.addEventListener("click", () => {
            check.checked ? label.className = "checked" : label.className = "add_text"
        })

        trash.addEventListener("click", () => {
            div.remove();
            // div.style.display = "none";
            addText.value = "";
            // addText.onautofocus;
        })
    }

    trash.addEventListener("mouseover", () => {
        trash.style.cursor = "pointer";
    });
});
// window.onload = () => add_text.autofocus ;