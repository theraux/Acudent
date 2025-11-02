function initAdminAppointments() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    const today = new Date();
    let datePickingMode = false;
    let selectedDate = null;
    let appointmentMode = null;  // Track whether we're in 'add' or 'edit' mode

    let currentYear = currentDate.getFullYear();
    let currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const appointments = [
        { date: `${currentYear}-${currentMonth}-15`, patient: 'John Doe', time: '10:00 AM', service: 'Cleaning', dentist: 'Dr. Smith', fee: '$100', duration: '30 mins', phone: '123-456-7890', email: 'john@example.com' },
        { date: `${currentYear}-${currentMonth}-15`, patient: 'Jane Smith', time: '11:00 AM', service: 'Filling', dentist: 'Dr. Johnson', fee: '$150', duration: '45 mins', phone: '987-654-3210', email: 'jane@example.com' },
        { date: `${currentYear}-${currentMonth}-20`, patient: 'Bob Wilson', time: '2:00 PM', service: 'Checkup', dentist: 'Dr. Smith', fee: '$80', duration: '20 mins', phone: '555-123-4567', email: 'bob@example.com' },
    ];

    function renderAdminCalendar() {
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        document.getElementById('month-year').innerText = months[month] + ' ' + year;

        let firstDayOfWeek = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let daysInPrevMonth = new Date(year, month, 0).getDate();
        let totalSlots = firstDayOfWeek + daysInMonth;
        let numRows = Math.ceil(totalSlots / 7);

        let daysContainer = document.querySelector('.number-of-days');
        daysContainer.innerHTML = '';

        let nextDayCounter = 1;

        for (let row = 0; row < numRows; row++) {
            let rowDiv = document.createElement('div');
            rowDiv.className = 'row row-cols-7 g-0';

            for (let col = 0; col < 7; col++) {
                let cellIndex = row * 7 + col;
                let colDiv = document.createElement('div');
                colDiv.className = 'col';

                let box = document.createElement('div');
                box.className = 'shared-calendar-box';

                if (cellIndex < firstDayOfWeek) {
                    let prevDay = daysInPrevMonth - (firstDayOfWeek - 1 - cellIndex);
                    box.innerHTML = `<strong>${prevDay}</strong><br><small>Prev month</small>`;
                    box.classList.add('prev-month');
                } else if (cellIndex < firstDayOfWeek + daysInMonth) {
                    let day = cellIndex - firstDayOfWeek + 1;
                    box.dataset.day = day;
                    box.innerHTML = `<strong>${day}</strong><br>`;
                    const dayDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const dayAppointments = appointments.filter(app => app.date === dayDateStr);
                    if (dayAppointments.length > 0) {
                        dayAppointments.forEach(app => {
                            const appDiv = document.createElement('div');
                            appDiv.className = 'calendar-appointment-item';
                            appDiv.innerHTML = `<small>${app.patient} - ${app.time} (${app.service})</small>`;
                            box.appendChild(appDiv);
                        });
                    } else {
                        const noAppDiv = document.createElement('div');
                        noAppDiv.className = 'no-appointments';
                        noAppDiv.innerHTML = '<small>No appointments</small>';
                        box.appendChild(noAppDiv);
                    }
                    box.classList.add('current-month');

                    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                        box.classList.add('today');
                    }

                    box.addEventListener('click', () => {
                        console.log('Calendar clicked, datePickingMode:', datePickingMode, 'appointmentMode:', appointmentMode, 'appointments:', dayAppointments.length); // Debug
                        if (datePickingMode) {
                            selectedDate = new Date(year, month, day);
                            if (appointmentMode === 'add') {
                                openAdminAppointmentModal(selectedDate);
                            } else if (appointmentMode === 'edit') {
                                openAdminEditModal(selectedDate);
                            }
                            datePickingMode = false;  // Reset after use
                            appointmentMode = null;   // Reset mode
                        } else {
                            if (dayAppointments.length > 0) {
                                openAdminViewModal(new Date(year, month, day), dayAppointments);
                            } else {
                                alert('No appointments on this day.');
                            }
                        }
                    });

                } else {
                    box.innerHTML = `<strong>${nextDayCounter}</strong><br><small>Next month</small>`;
                    box.classList.add('next-month');
                    nextDayCounter++;
                }

                colDiv.appendChild(box);
                rowDiv.appendChild(colDiv);
            }

            daysContainer.appendChild(rowDiv);
        }
    }

    function Adminprevmonth() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderAdminCalendar();
    }

    function Adminnextmonth() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderAdminCalendar();
    }

    window.Adminprevmonth = Adminprevmonth;
    window.Adminnextmonth = Adminnextmonth;

    renderAdminCalendar();

    // Button references
    const addBtn = document.getElementById("edit-schedule");
    const editBtn = document.querySelector(".shared-edit-scheduler-btn");

    // Add button: Set mode and active state
    addBtn.addEventListener("click", () => {
        datePickingMode = true;
        appointmentMode = 'add';
        addBtn.classList.add('active');
        editBtn.classList.remove('active');
    });

    // Edit button: Set mode and active state
    editBtn.addEventListener("click", () => {
        datePickingMode = true;
        appointmentMode = 'edit';
        editBtn.classList.add('active');
        addBtn.classList.remove('active');
    });

    // Function for add modal
    function openAdminAppointmentModal(date) {
        const modal = document.querySelector('.shared-edit-appointment-schedule-modal');
        const dateInput = document.getElementById('selected-date');
        modal.style.display = 'block';
        dateInput.value = date.toDateString();
    }

    // Function for edit modal
    function openAdminEditModal(date) {
        const modal = document.getElementById('edit-appointment-schedule');
        const dateSpan = document.getElementById('modal-date');
        modal.style.display = 'block';
        dateSpan.innerText = date.toDateString();  // Populate the date in the edit modal
    }

    function openAdminViewModal(date, dayAppointments) {
        const modal = document.getElementById('shared-view-appointments-modal-id');
        const dateSpan = document.getElementById('view-modal-date');
        const listContainer = document.querySelector('.view-appointments-list');
        const titleContainer = document.querySelector('.shared-view-appointments-title'); // Select the title h3 container
        const ul = listContainer.querySelector('ul');  // Target the <ul> inside the container

        dateSpan.textContent = date.toDateString();

        // Clear the <ul> and repopulate with <li> elements
        ul.innerHTML = '';
        dayAppointments.forEach((app, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-user"></i><span data-id="patient-appointment-view-id" data-target="shared-view-detailed-appointments-id">${app.patient} - ${app.time}</span>`;
            const span = li.querySelector('span');
            span.addEventListener('click', () => {
                listContainer.classList.add('hidden');
                titleContainer.classList.add('hidden');
                const detailedModal = document.getElementById('shared-view-detailed-appointments-id');
                detailedModal.classList.remove('hidden');
                openDetailedView(app);
            });
            ul.appendChild(li);
        });
        // Ensure the list and title are visible, and detailed view is hidden
        listContainer.classList.remove('hidden');
        titleContainer.classList.remove('hidden');
        const detailedModal = document.getElementById('shared-view-detailed-appointments-id');
        detailedModal.classList.add('hidden');
        modal.style.display = 'block';
    }
}

function openDetailedView(appointment) {
    console.log('Opening detailed view for:', appointment.patient); // Debug
    const detailedModal = document.getElementById('shared-view-detailed-appointments-id');

    document.getElementById('shared-view-detailed-patient').textContent = appointment.patient;
    document.getElementById('detail-date').textContent = appointment.date;
    document.getElementById('detail-time').textContent = appointment.time;
    document.getElementById('detail-service').textContent = appointment.service;
    document.getElementById('detail-dentist').textContent = appointment.dentist;
    document.getElementById('detail-fee').textContent = appointment.fee;
    document.getElementById('detail-duration').textContent = appointment.duration;
    document.getElementById('detail-phone').textContent = appointment.phone;
    document.getElementById('detail-email').textContent = appointment.email;

    detailedModal.classList.remove('hidden');
}

// Close button handlers: Remove active state from both buttons
const addCloseBtn = document.querySelector('.shared-appointment-close-modal-btn');
const editCloseBtn = document.querySelector('.btn-close-edit-appointment-schedule');

if (addCloseBtn) {
    addCloseBtn.addEventListener('click', () => {
        document.querySelector('.shared-edit-appointment-schedule-modal').style.display = 'none';
        addBtn.classList.remove('active');
        editBtn.classList.remove('active');
    });
}

if (editCloseBtn) {
    editCloseBtn.addEventListener('click', () => {
        document.getElementById('edit-appointment-schedule').style.display = 'none';
        addBtn.classList.remove('active');
        editBtn.classList.remove('active');
    });
}

const viewCloseBtn = document.querySelector('.btn-close-view-appointments');
const backBtn = document.querySelector('.back-to-appointment-btn');
const detailedCloseBtn = document.querySelector('.shared-view-detailed-btn');
if (viewCloseBtn) {
    viewCloseBtn.addEventListener('click', () => {
        // Close the entire view modal
        document.getElementById('shared-view-appointments-modal-id').style.display = 'none';
    });
}
if (backBtn) {
    backBtn.addEventListener('click', () => {
        // Go back to the list view: hide detailed, show list and title
        const listContainer = document.querySelector('.view-appointments-list');
        const titleContainer = document.querySelector('.shared-view-appointments-title');
        const detailedModal = document.getElementById('shared-view-detailed-appointments-id');

        detailedModal.classList.add('hidden');
        listContainer.classList.remove('hidden');
        titleContainer.classList.remove('hidden');
    });
    if (detailedCloseBtn) {
        detailedCloseBtn.addEventListener('click', () => {
            // Close the entire view modal
            document.getElementById('shared-view-appointments-modal-id').style.display = 'none';
        });
    }
 

    //FOR CLOSING THE MODAL IN THE BUTTON CANCEL
    const addCancelBtn = document.querySelector('.cancel-appointment-btn');  // For Add modal
    const editCancelBtn = document.querySelector('.cancel-appointmentbtn');  // For Edit modal (note: class name has a typo in HTML, but matches your code)
    if (addCancelBtn) {
        addCancelBtn.addEventListener('click', () => {
            document.querySelector('.shared-edit-appointment-schedule-modal').style.display = 'none';
            addBtn.classList.remove('active');
            editBtn.classList.remove('active');
        });
    }
    if (editCancelBtn) {
        editCancelBtn.addEventListener('click', () => {
            document.getElementById('edit-appointment-schedule').style.display = 'none';
            addBtn.classList.remove('active');
            editBtn.classList.remove('active');
        });
    }


    //For Table MODAL 
    // Function to open and populate the modal
    // Function to open and populate the modal with sample data
    function openAppointmentModal(type) {
        const modal = document.getElementById('appointment-card-table-modal-container-id');
        const title = document.getElementById('appointment-detailed-title-id');
        const tbody = document.getElementById('appointment-detailed-body-id');

        // Set title based on type (capitalize first letter)
        title.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Appointments`;

        // Clear previous table data and show loading
        tbody.innerHTML = '<tr><td colspan="6">Loading...</td></tr>';

        // Show modal
        modal.classList.add('active');

        // Simulate fetch delay (optional, for realism)

        // Sample data (replace with real fetch later)
        const allAppointments = [
            {
                mainCategory: 'Dental Checkup',
                subcategory: 'Routine',
                patientName: 'John Doe',
                patientID: 'P001',
                dentist: 'Dr. Smith',
                date: '2023-10-01',
                type: 'upcoming'
            },
            {
                mainCategory: 'Cleaning',
                subcategory: 'Deep Clean',
                patientName: 'Jane Smith',
                patientID: 'P002',
                dentist: 'Dr. Lee',
                date: '2023-10-02',
                type: 'pending'
            },
            {
                mainCategory: 'Filling',
                subcategory: 'Composite',
                patientName: 'Bob Johnson',
                patientID: 'P003',
                dentist: 'Dr. Kim',
                date: '2023-10-03',
                type: 'cancelled'
            },
            {
                mainCategory: 'Consultation',
                subcategory: 'Initial',
                patientName: 'Alice Brown',
                patientID: 'P004',
                dentist: 'Dr. Patel',
                date: '2023-10-04',
                type: 'upcoming'
            },
            {
                mainCategory: 'Surgery',
                subcategory: 'Extraction',
                patientName: 'Charlie Wilson',
                patientID: 'P005',
                dentist: 'Dr. Gupta',
                date: '2023-10-05',
                type: 'pending'
            },
            {
                mainCategory: 'Orthodontics',
                subcategory: 'Braces',
                patientName: 'Diana Prince',
                patientID: 'P006',
                dentist: 'Dr. Wayne',
                date: '2023-10-06',
                type: 'cancelled'
            }
        ];

        // Filter appointments by type
        const appointments = allAppointments.filter(appointment => appointment.type === type);

        // Clear loading message
        tbody.innerHTML = '';

        if (appointments.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6">No appointments found.</td></tr>';
            return;
        }

        // Populate table rows
        appointments.forEach(appointment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${appointment.mainCategory}</td>
                <td>${appointment.subcategory}</td>
                <td>${appointment.patientName}</td>
                <td>${appointment.patientID}</td>
                <td>${appointment.dentist}</td>
                <td>${appointment.date}</td>
            `;
            tbody.appendChild(row);
        });

    }



    // Function to close the modal
    function closeAppointmentModal() {
        const modal = document.getElementById('appointment-card-table-modal-container-id');
        modal.classList.remove('active');
    }

    // Attach click listeners to all cards
    const cards = document.querySelectorAll('.title-status-container');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.getAttribute('data-type'); // e.g., "upcoming"
            openAppointmentModal(type);
        });
    });

    // Attach close listener to the close button
    const closeButton = document.getElementById('appointment-detailed-table-modal-close-button');
    closeButton.addEventListener('click', closeAppointmentModal);

    // Optional: Close modal on outside click (clicking the overlay)
    const modal = document.getElementById('appointment-card-table-modal-container-id');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAppointmentModal();
    });









    // Function to load and populate the appointment type table with sample data

    const tbody = document.getElementById('appointmentType-body');

    // Clear existing rows
    tbody.innerHTML = '';

    // Sample data
    const appointments = [
        {
            name: 'John Doe',
            type: 'Checkup',
            time: '10:00 AM',
            dentist: 'Dr. Smith',
            status: 'confirmed'
        },
        {
            name: 'Jane Smith',
            type: 'Cleaning',
            time: '11:00 AM',
            dentist: 'Dr. Lee',
            status: 'cancelled'
        },
        {
            name: 'Bob Johnson',
            type: 'Filling',
            time: '12:00 PM',
            dentist: 'Dr. Kim',
            status: 'pending'
        },
        {
            name: 'Alice Brown',
            type: 'Consultation',
            time: '1:00 PM',
            dentist: 'Dr. Patel',
            status: 'confirmed'
        },
        {
            name: 'Charlie Wilson',
            type: 'Surgery',
            time: '2:00 PM',
            dentist: 'Dr. Gupta',
            status: 'cancelled'
        }
    ];


    // Populate table rows
    appointments.forEach(appointment => {
        const row = document.createElement('tr');

        let statusClass = '';
        if (appointment.status.toLowerCase() === 'confirmed') {
            statusClass = 'status-confirmed';
        } else if (appointment.status.toLowerCase() === 'cancelled') {
            statusClass = 'status-cancelled';
        } else {
            statusClass = 'status-default';
        }

        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.type}</td>
            <td>${appointment.time}</td>
            <td>${appointment.dentist}</td>
            <td class="${statusClass}">${appointment.status}</td>
        `;
        tbody.appendChild(row);

        const statusTd = row.querySelector('td:last-child');  // Select the last <td> (status column)
        statusTd.innerHTML = `<span class="status-badge">${appointment.status}</span>`;
        const badge = statusTd.querySelector('.status-badge');


        if (appointment.status.toLowerCase() === 'confirmed') {
            statusTd.style.color = 'green';
            statusTd.style.border = '1px solid green';
            statusTd.style.borderRadius = '15px';
            statusTd.style.backgroundColor = '#e6f9e6'; // ✅ light green background
            statusTd.style.color = 'green';              // text still visible
            statusTd.style.textAlign = 'center';
            statusTd.style.display = 'inline-block';


        } else if (appointment.status.toLowerCase() === 'cancelled') {
            statusTd.style.color = 'red';
            statusTd.style.border = '1px solid red';
            statusTd.style.borderRadius = '15px';
            statusTd.style.backgroundColor = '#e44a4a4f'; // ✅ light green background
            statusTd.style.color = 'red';              // text still visible
            statusTd.style.textAlign = 'center';
            statusTd.style.display = 'inline-block';
        } else {
            statusTd.style.color = '#6c757d';  // Gray for others
            statusTd.style.fontWeight = 'normal';
            statusTd.style.border = '1px solid red';
            statusTd.style.borderRadius = '15px';
            statusTd.style.backgroundColor = '#e44a4a4f'; // ✅ light green background
            statusTd.style.color = 'red';              // text still visible
            statusTd.style.textAlign = 'center';
            statusTd.style.display = 'inline-block';
        }


        const tds = row.querySelectorAll('td');
        for (let i = 0; i < 4; i++) {  // Loop through first 4 (0-indexed: 0=Name, 1=Type, 2=Time, 3=Dentist)
            tds[i].style.color = '#703803';  // Change to your desired color (e.g., 'red', '#ff0000', etc.)
            tds[i].style.fontWeight = 'normal';  // Optional: adjust weight
        }
    });



}



// Call the function on page load (or tie it to an event, e.g., after modal opens)




document.addEventListener("DOMContentLoaded", initAdminAppointments)