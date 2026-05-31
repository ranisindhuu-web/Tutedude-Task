// ==========================================================================
// Task: Student Registry - Array Map & Filter Dynamic DOM Interface
// ==========================================================================

// 1. Initializing Array of Student objects with designated parameters
const studentsData = [
    { name: "Alex Mercer", marks: 92, class: "Grade 11-A", address: "742 Evergreen Terr, Springfield" },
    { name: "Beatrice Vance", marks: 88, class: "Grade 12-B", address: "123 Outer Ring Rd, New York" },
    { name: "Charles Hudson", marks: 76, class: "Grade 10-C", address: "456 Pine Ave, San Francisco" },
    { name: "Diana Prince", marks: 95, class: "Grade 12-A", address: "890 Paradise Isle, Themyscira" },
    { name: "Ethan Hunt", marks: 64, class: "Grade 11-B", address: "512 IMF Safehouse, London" },
    { name: "Fiona Gallagher", marks: 81, class: "Grade 10-A", address: "2113 Canary Rd, Chicago" }
];

// 2. DOM Node Element References Cache Selection
const recordsGrid = document.getElementById("recordsGrid");
const searchInput = document.getElementById("searchInput");

/**
 * Renders filtered data sets down onto the visible user template grid interface
 * Uses Array.prototype.map() to cleanly build layout cards.
 * @param {Array} studentsList - Array containing target student profiles to parse
 */
function displayStudentRecords(studentsList) {
    // If targeted slice evaluation matches zero records, provide a placeholder fallback element
    if (studentsList.length === 0) {
        recordsGrid.innerHTML = `<div class="no-results">No student records found matching that query.</div>`;
        return;
    }

    // Use Map Function to generate clean structural markup components
    const htmlCardsArray = studentsList.map(student => {
        return `
            <div class="student-card">
                <div class="card-header">
                    <div class="student-name">${student.name}</div>
                </div>
                <div class="info-row">
                    <span class="info-label">Class:</span>
                    <span class="info-value">${student.class}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Marks:</span>
                    <span class="info-value badge-marks">${student.marks}%</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Address:</span>
                    <span class="info-value" style="text-align: right; max-width: 70%; font-size: 0.85rem;">
                        ${student.address}
                    </span>
                </div>
            </div>
        `;
    });

    // Join string components back together and replace inner target container data content
    recordsGrid.innerHTML = htmlCardsArray.join('');
}

// 3. Dynamic Real-Time Lookup Input Processing Handler
// Listens to user characters input stream to filter targets dynamically
searchInput.addEventListener('input', (event) => {
    const currentQueryText = event.target.value.toLowerCase().trim();

    // Use Filter Function to narrow down matching records based on search query
    const filteredRecords = studentsData.filter(student => {
        return student.name.toLowerCase().includes(currentQueryText);
    });

    // Update grid interface elements dynamically with newly filtered array
    displayStudentRecords(filteredRecords);
});

// 4. Initial Launch Core Routine Entry Point Trigger
// Runs initially upon document instantiation to mount baseline array indices
displayStudentRecords(studentsData);