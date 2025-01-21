const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const toggleMode = document.getElementById('toggle-mode');
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// // Select elements
// const openEditModalBtn = document.getElementById('open-edit-modal');
// const closeEditModalBtn = document.getElementById('close-edit-modal');
// const editModal = document.getElementById('edit-modal');
// const editForm = document.getElementById('edit-form');

// // Open modal
// openEditModalBtn.addEventListener('click', () => {
//   editModal.style.display = 'flex'; // Display modal
// });

// // Close modal
// closeEditModalBtn.addEventListener('click', () => {
//   editModal.style.display = 'none'; // Hide modal
// });

// // Close modal when clicking outside content
// window.addEventListener('click', (e) => {
//   if (e.target === editModal) {
//     editModal.style.display = 'none';
//   }
// });

// // Handle form submission
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(editForm);
//   const data = Object.fromEntries(formData);
//   console.log('Form Data:', data); // You can use this data to update your items
//   editModal.style.display = 'none'; // Close modal after saving
// });



toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    toggleMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    toggleMode.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
});