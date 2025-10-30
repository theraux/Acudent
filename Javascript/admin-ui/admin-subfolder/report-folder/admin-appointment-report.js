function initAdminAppointmentReport() {

const caretWrapper = document.querySelector('.monthly-wrapper-caret-down');
const caretButton = caretWrapper.querySelector('.inventory-management-caret-button');
const selectedPeriod = caretWrapper.querySelector('.selected-period');
const dropdownItems = caretWrapper.querySelectorAll('.monthly-dropdown-item');

// Toggle dropdown visibility
caretButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click from closing dropdown immediately
  caretWrapper.classList.toggle('active');
});

// Handle dropdown item clicks
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const newValue = item.textContent.trim();
    selectedPeriod.textContent = newValue; // Update button text
    caretWrapper.classList.remove('active'); // Close dropdown
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!caretWrapper.contains(e.target)) {
    caretWrapper.classList.remove('active');
  }
});

//Table sample data
const services = [
  {
    mainCategory: "Periodontics",
    subcategories: [
      { name: "Oral Prophylaxis", total: 12 },
      { name: "Scaling and Root Planing", total: 8 },
    ],
  },
  {
    mainCategory: "Orthodontics",
    subcategories: [
      { name: "Braces Installation", total: 15 },
      { name: "Bracket Replacement", total: 5 },
    ],
  },
  {
    mainCategory: "Endodontics",
    subcategories: [
      { name: "Root Canal Therapy", total: 9 },
      { name: "Pulp Capping", total: 4 },
    ],
  },
];

const tbody = document.getElementById("appointment-service-body");

// clear first (if table is reused)
tbody.innerHTML = "";

// generate table rows
services.forEach(category => {
  category.subcategories.forEach((sub, index) => {
    const row = document.createElement("tr");

    // only show mainCategory once (rowspan)
    if (index === 0) {
      const mainCell = document.createElement("td");
      mainCell.textContent = category.mainCategory;
      mainCell.rowSpan = category.subcategories.length;
      row.appendChild(mainCell);
    }

    // subcategory
    const subCell = document.createElement("td");
    subCell.textContent = sub.name;
    row.appendChild(subCell);

    // total
    const totalCell = document.createElement("td");
    totalCell.textContent = sub.total;
    row.appendChild(totalCell);

    tbody.appendChild(row);
  });
});

//Graph
// Sample data (replace with real data from API or PHP)
const appointmentData = {
    "2023-09": {  // Last month (September)
        labels: Array.from({length: 30}, (_, i) => i + 1),  // Days 1-30
        data: [5, 8, 12, 15, 20, 18, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75, 72, 80, 78]
    },
    "2023-10": {  // Current month (October)
        labels: Array.from({length: 31}, (_, i) => i + 1),  // Days 1-31
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40]
    }
};

let chart; // Global variable for the chart instance

// Function to initialize/update the chart
function updateChart(selectedMonth) {
    const ctx = document.getElementById('appointment-report-id').getContext('2d');
    
    // Destroy existing chart if it exists
    if (chart) chart.destroy();
    
    // Determine last month (static demo)
    const currentData = appointmentData[selectedMonth];
    const lastMonthKey = selectedMonth === "2023-10" ? "2023-09" : "2023-09";
    const lastData = appointmentData[lastMonthKey];
    
    // Create the chart
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: currentData.labels,
            datasets: [
                {
                    label: `Current Month (${selectedMonth})`,
                    data: currentData.data,
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    tension: 0, // Sharp (tusok-tusok)
                    fill: false
                },
                {
                    label: `Previous Month (${lastMonthKey})`,
                    data: lastData.data,
                    borderColor: '#dc3545',
                    backgroundColor: 'rgba(220, 53, 69, 0.2)',
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    tension: 0, // Sharp (tusok-tusok)
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 20,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const peak = Math.max(...context.dataset.data);
                            return `${context.dataset.label}: ${context.parsed.y} appointments (Peak: ${peak})`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Appointments'
                    },
                    ticks: {
                        stepSize: 10
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Day of Month'
                    }
                }
            }
        }
    });
}

// Default chart on load
updateChart("2023-10");


// Initialize on page load
    const monthSelect = document.getElementById('month-select');
    
    // Load initial chart (current month)
    updateChart(monthSelect.value);
    
    // Update chart on dropdown change
    monthSelect.addEventListener('change', (e) => {
        updateChart(e.target.value);
    });


}
document.addEventListener('DOMContentLoaded', initAdminAppointmentReport);