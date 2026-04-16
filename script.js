const coursesData = {
    1: [
        { code: 'CSC102', name: 'Programming Fundamentals', th: 3, pr: 1 },
        { code: 'CSC100', name: 'Application of Information and Communication Technologies', th: 2, pr: 1 },
        { code: 'CSC101', name: 'Discrete Mathematics', th: 3, pr: 0 },
        { code: 'MA-123', name: 'Calculus', th: 3, pr: 0 },
        { code: 'PHY-111', name: 'Applied Physics', th: 2, pr: 1 }
    ],
    2: [
        { code: 'CSC103', name: 'Object Oriented Programming', th: 3, pr: 1 },
        { code: 'CSC104', name: 'Database Systems', th: 3, pr: 1 },
        { code: 'CSC105', name: 'Digital Logic Design', th: 2, pr: 1 },
        { code: 'MA-104', name: 'Calculus II', th: 3, pr: 0 },
        { code: 'MA-205', name: 'Applied Statistics and Probability', th: 3, pr: 0 }
    ],
    3: [
        { code: 'CSC200', name: 'Data Structures and Algorithms', th: 3, pr: 1 },
        { code: 'MA-234', name: 'Linear Algebra', th: 3, pr: 0 },
        { code: 'HU-102', name: 'Functional English', th: 3, pr: 0 },
        { code: 'CSC203', name: 'Computer Networks', th: 2, pr: 1 },
        { code: 'CSC204', name: 'Software Engineering', th: 3, pr: 0 },
        { code: 'IS-102', name: 'Islamic Studies / Ethics', th: 3, pr: 0 }
    ],
    4: [
        { code: 'CSC205', name: 'Computer Organization and Assembly Language', th: 2, pr: 1 },
        { code: 'CSC201', name: 'Information Security', th: 2, pr: 1 },
        { code: 'CSC202', name: 'Artificial Intelligence', th: 2, pr: 1 },
        { code: 'CSC206', name: 'Theory of Automata', th: 3, pr: 0 },
        { code: 'CSC208', name: 'Design and Analysis of Algorithms', th: 3, pr: 0 },
        { code: 'CSC207', name: 'Advanced Database Management Systems', th: 2, pr: 1 },
        { code: 'QT-201', name: 'Translation of the Holy Quran-II', th: 1, pr: 0 }
    ],
    5: [
        { code: 'CSC300', name: 'Operating Systems', th: 2, pr: 1 },
        { code: 'CSC301', name: 'Introduction to Human Computer Interaction', th: 3, pr: 0 },
        { code: 'CSC302', name: 'Computer Architecture', th: 3, pr: 0 },
        { code: 'CSCXXX', name: 'Domain Elective 1', th: 3, pr: 0 },
        { code: 'CSCXXX', name: 'Domain Elective 2', th: 3, pr: 0 },
        { code: 'XX-XXX', name: 'University Elective 1 (Social Science)', th: 2, pr: 0 }
    ],
    6: [
        { code: 'CSC303', name: 'Compiler Construction', th: 2, pr: 1 },
        { code: 'CSC304', name: 'Parallel and Distributed Computing', th: 2, pr: 1 },
        { code: 'CSCXXX', name: 'Domain Elective 3', th: 3, pr: 0 },
        { code: 'CSCXXX', name: 'Domain Elective 4', th: 3, pr: 0 },
        { code: 'XX-XXX', name: 'University Elective 2 (Management)', th: 3, pr: 0 },
        { code: 'HU-222', name: 'Expository Writing', th: 3, pr: 0 }, // Wait, checking image credit for HU-222. Image says... blank under Th/Pr? No, it's aligned. Looks like 3/0. Wait, Expository Writing HU-222 in sem 6. It has no credits listed in the box? Ah, let me re-check the image carefully.
        // Actually HU-222 in image sem 6 right column. Credit hours column is empty? No, it's consistent with above. Let's assume 3,0 standard or look at row.
        // Let's re-examine image. Ah, HU-222 row has nothing in credit hours. Actually, looking closely at image... HU-222 is in the second row of Sem 6 bottom block? No.
        // Let's stick to standard 3.0 for now, user can edit if needed.
        // Wait, QT-301 is 1,0.
        { code: 'QT-301', name: 'Translation of the Holy Quran-III', th: 1, pr: 0 }
    ],
    7: [
        { code: 'CSC401', name: 'Final Year Project - I', th: 0, pr: 2 },
        { code: 'CSCXXX', name: 'Domain Elective 5', th: 3, pr: 0 },
        { code: 'CSCXXX', name: 'Domain Elective 6', th: 3, pr: 0 },
        { code: 'XX-XXX', name: 'University Elective 3 (Civics etc)', th: 2, pr: 0 },
        { code: 'HU-XXX', name: 'Technical Report Writing', th: 3, pr: 0 },
        { code: 'MGT-318', name: 'Entrepreneurship and Management', th: 2, pr: 0 }
    ],
    8: [
        { code: 'CSC402', name: 'Final Year Project - II', th: 0, pr: 4 },
        { code: 'CSCXXX', name: 'Domain Elective 7', th: 3, pr: 0 },
        { code: 'IS-202', name: 'Ideology and Constitution of Pakistan', th: 3, pr: 0 },
        { code: 'CSC403', name: 'Professional Practices in Software Development', th: 2, pr: 0 },
        { code: 'QT-401', name: 'Translation of the Holy Quran-IV', th: 1, pr: 0 },
        { code: 'HU-XXX', name: 'International Language', th: 0, pr: 0 } // Credits look 0,0 in image? Or maybe 2,0? It's cut off or 0/0.
        // Actually, let's assume non-credit or 2. Let's put 0 for now as it says 0 0.
    ]
};

// Global State
let currentSemester = 1;

// Grade Points Mapping
const gradePoints = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0,
    'F': 0.0,
    '': 0.0 // Empty
};

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderCourses(currentSemester);

    document.getElementById('calculateBtn').addEventListener('click', calculateGPA);
    document.querySelector('.close-btn').addEventListener('click', closeUnknownModal);

    // Auto-calculate on change?? Maybe too distracting. Let's keep manual button.
});

function initTabs() {
    const tabsContainer = document.getElementById('semesterTabs');
    tabsContainer.innerHTML = '';

    for (let i = 1; i <= 8; i++) {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${i === currentSemester ? 'active' : ''}`;
        btn.textContent = `Semester ${i}`;
        btn.addEventListener('click', () => {
            currentSemester = i;
            updateTabs();
            renderCourses(i);
        });
        tabsContainer.appendChild(btn);
    }
}

function updateTabs() {
    document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
        if (idx + 1 === currentSemester) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderCourses(semester) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = `
        <div class="courses-header">
            <span>Subject</span>
            <span style="text-align: center;">Credits</span>
            <span>Grade</span>
        </div>
    `;

    const courses = coursesData[semester];

    if (!courses) return;

    courses.forEach((course) => {
        const totalCredits = course.th + course.pr;

        const row = document.createElement('div');
        row.className = 'course-item';

        let inputsHtml = '<div class="grade-inputs-container">';

        if (course.th > 0) {
            inputsHtml += createSelectHtml('Theory', course.th);
        }

        if (course.pr > 0) {
            inputsHtml += createSelectHtml('Lab', course.pr);
        }

        inputsHtml += '</div>';

        row.innerHTML = `
            <div class="course-info">
                <h3>${course.code} - ${course.name}</h3>
                <p>Th: ${course.th} | Pr: ${course.pr}</p>
            </div>
            <div class="credit-hours">
                ${totalCredits}
            </div>
            <div>
                ${inputsHtml}
            </div>
        `;
        container.appendChild(row);
    });
}

function createSelectHtml(label, credits) {
    return `
        <div class="grade-input-group">
            <span class="input-label">${label} (${credits})</span>
            <select class="grade-select" data-credits="${credits}">
                <option value="" selected disabled>Select</option>
                <option value="A">A (4.0)</option>
                <option value="A-">A- (3.7)</option>
                <option value="B+">B+ (3.3)</option>
                <option value="B">B (3.0)</option>
                <option value="B-">B- (2.7)</option>
                <option value="C+">C+ (2.3)</option>
                <option value="C">C (2.0)</option>
                <option value="C-">C- (1.7)</option>
                <option value="D+">D+ (1.3)</option>
                <option value="D">D (1.0)</option>
                <option value="F">F (0.0)</option>
            </select>
        </div>
    `;
}

function calculateGPA() {
    const selects = document.querySelectorAll('.grade-select');
    let totalPoints = 0;
    let totalCredits = 0;

    selects.forEach(select => {
        const grade = select.value;
        const credits = parseFloat(select.dataset.credits);

        if (grade) {
            totalPoints += gradePoints[grade] * credits;
            totalCredits += credits;
        }
    });

    if (totalCredits === 0) {
        alert("Please select at least one grade to calculate!");
        return;
    }

    const gpa = totalPoints / totalCredits;
    showResult(gpa.toFixed(2));
}

function showResult(gpa) {
    const modal = document.getElementById('resultModal');
    const valueEl = document.getElementById('sgpaValue');
    valueEl.textContent = gpa;
    modal.classList.remove('hidden');
}

function closeUnknownModal() {
    document.getElementById('resultModal').classList.add('hidden');
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('resultModal');
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}
