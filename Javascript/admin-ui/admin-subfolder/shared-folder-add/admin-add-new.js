function initAdminAddNew() {
  const modalContainer = document.getElementById("add-new-modal-container-id");

  // Handle open modal buttons (Dentist, Patient, Staff)
  document.querySelectorAll(".add-user-btn").forEach(button => {
    button.addEventListener("click", () => {
      const userType = button.dataset.target; 
      openAddUserModal(userType);
    });
  });

  // Handle close modal (close button and clicking outside)
  document.addEventListener("click", (e) => {
    if (e.target.id === "add-new-close-modal-btn" || e.target === modalContainer) {
      modalContainer.classList.remove("active");
    }
  });

  // Function to open modal and adjust form fields
  function openAddUserModal(type) {
    if (!modalContainer) return;

    modalContainer.classList.add("active");

    // Show all fields first
    document.querySelectorAll(".add-new-wrapper, .specialization-wrapper").forEach(el => {
      el.style.display = "block";  // Use "block" for consistency
    });

    // Customize fields per user type
    if (type === "dentist") {
    } else if (type === "patient") {
      // Hide specialization
      document.querySelector(".specialization-wrapper").style.display = "none";
    } else if (type === "staff") {
      // Hide specialization, keep account fields
      document.querySelector(".specialization-wrapper").style.display = "none";
    }
  }

  // Handle cancel button
  document.querySelectorAll('.add-new-cancel-button').forEach(btn => {
    btn.addEventListener('click', () => {
      modalContainer.classList.remove('active');
    });
  });
}


document.addEventListener('DOMContentLoaded', initAdminAddNew);
