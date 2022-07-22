window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
  const button_edit = document.querySelector(".edit");
  const button_delete = document.querySelector(".delete");
  const task = document.querySelector(".task");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Veuillez saisir une tâche");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    const task_content_input = document.createElement("input");
    task_content_input.setAttribute("type", "text");
    task_content_input.classList.add("text");
    task_content_input.setAttribute("id", "input-content");
    task_content_input.readOnly = true;
    task_content_input.setAttribute("value", task);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const btn_actions_edit = document.createElement("button");
    btn_actions_edit.classList.add("btn-actions");
    btn_actions_edit.classList.add("edit");
    btn_actions_edit.textContent = "Modifier";

    const btn_actions_delete = document.createElement("button");
    btn_actions_delete.classList.add("btn-actions");
    btn_actions_delete.classList.add("delete");
    btn_actions_delete.textContent = "Supprimer";

    task_content_el.appendChild(task_content_input);
    task_el.appendChild(task_content_el);
    list_el.appendChild(task_el);
    task_el.appendChild(task_actions_el);
    task_actions_el.appendChild(btn_actions_edit);
    task_actions_el.appendChild(btn_actions_delete);

    btn_actions_edit.addEventListener("click", () => {
      if (btn_actions_edit.innerText == "Modifier") {
        task_content_input.readOnly = false;
        task_content_input.focus();
        btn_actions_edit.innerText = "Sauvegarder";
      } else {
        task_content_input.readOnly = true;
        btn_actions_edit.innerText = "Modifier";
      }
    });

    btn_actions_delete.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
