// Calculate and display the total fee as checkboxes change.
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".subjects input[type='checkbox']");
  const totalAmount = document.getElementById("totalAmount");
  const form = document.querySelector(".registration-form");
  const nameInput = document.getElementById("studentName");

  const updateTotal = () => {
    let total = 0;
    checkboxes.forEach((box) => {
      if (box.checked) {
        total += Number(box.dataset.price) || 0;
      }
    });
    totalAmount.textContent = total;
  };

  checkboxes.forEach((box) => box.addEventListener("change", updateTotal));
  updateTotal();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = nameInput.value.trim();
    if (!studentName) {
      alert("Please enter the student name.");
      nameInput.focus();
      return;
    }

    const selected = [...checkboxes].filter((box) => box.checked);
    if (selected.length === 0) {
      alert("Please select at least one subject.");
      return;
    }

    const subjectsList = selected
      .map((box) => {
        const label = form.querySelector(`label[for="${box.id}"]`);
        return label ? label.textContent : "";
      })
      .filter(Boolean)
      .join("\n");

    // Display details below the submit button
    document.getElementById("displayName").textContent = studentName;
    document.getElementById("displaySubjects").textContent = subjectsList;
    document.getElementById("displayTotal").textContent = totalAmount.textContent;
    document.getElementById("registrationDetails").style.display = "block";
  });
});
