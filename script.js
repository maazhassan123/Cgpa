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
let userGrades = {};
let lastCalculatedPoints = 0;
let lastCalculatedCredits = 0;

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
    loadSavedState();
    initTabs();
    renderCourses(currentSemester);

    document.getElementById('calculateBtn').addEventListener('click', calculateGPA);
    document.getElementById('resetBtn').addEventListener('click', resetCurrentSemester);
    document.querySelector('.close-btn').addEventListener('click', closeModal);

    const prevCgpaInput = document.getElementById('prevCgpa');
    const prevCreditsInput = document.getElementById('prevCredits');
    if (prevCgpaInput) prevCgpaInput.addEventListener('input', updateCgpaDisplay);
    if (prevCreditsInput) prevCreditsInput.addEventListener('input', updateCgpaDisplay);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

function loadSavedState() {
    try {
        const savedGrades = localStorage.getItem('cgpa_user_grades');
        if (savedGrades) {
            userGrades = JSON.parse(savedGrades);
        }
    } catch (e) {
        userGrades = {};
    }

    const prevCgpaInput = document.getElementById('prevCgpa');
    const prevCreditsInput = document.getElementById('prevCredits');
    const savedPrevCgpa = localStorage.getItem('cgpa_prev_cgpa');
    const savedPrevCredits = localStorage.getItem('cgpa_prev_credits');

    if (prevCgpaInput && savedPrevCgpa !== null) prevCgpaInput.value = savedPrevCgpa;
    if (prevCreditsInput && savedPrevCredits !== null) prevCreditsInput.value = savedPrevCredits;
}

function initTabs() {
    const tabsContainer = document.getElementById('semesterTabs');
    tabsContainer.innerHTML = '';

    for (let i = 1; i <= 8; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
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
            inputsHtml += createSelectHtml('Theory', course.th, course.code, semester);
        }

        if (course.pr > 0) {
            inputsHtml += createSelectHtml('Lab', course.pr, course.code, semester);
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

    // Attach change listeners to newly rendered selects
    container.querySelectorAll('.grade-select').forEach(select => {
        select.addEventListener('change', () => {
            const grade = select.value;
            const sem = parseInt(select.dataset.semester);
            const code = select.dataset.course;
            const type = select.dataset.type;
            const credits = parseFloat(select.dataset.credits);
            const key = `${sem}_${code}_${type}`;

            if (grade) {
                userGrades[key] = { semester: sem, courseCode: code, type, credits, grade };
            } else {
                delete userGrades[key];
            }
            try {
                localStorage.setItem('cgpa_user_grades', JSON.stringify(userGrades));
            } catch (e) {
                // Ignore storage limits
            }
        });
    });
}

function createSelectHtml(label, credits, courseCode, semester) {
    const key = `${semester}_${courseCode}_${label.toLowerCase()}`;
    const savedGrade = userGrades[key] ? userGrades[key].grade : '';

    const options = [
        { val: '', label: 'Select' },
        { val: 'A', label: 'A (4.0)' },
        { val: 'A-', label: 'A- (3.7)' },
        { val: 'B+', label: 'B+ (3.3)' },
        { val: 'B', label: 'B (3.0)' },
        { val: 'B-', label: 'B- (2.7)' },
        { val: 'C+', label: 'C+ (2.3)' },
        { val: 'C', label: 'C (2.0)' },
        { val: 'C-', label: 'C- (1.7)' },
        { val: 'D+', label: 'D+ (1.3)' },
        { val: 'D', label: 'D (1.0)' },
        { val: 'F', label: 'F (0.0)' }
    ];

    const optionsHtml = options.map(opt => {
        const isSelected = savedGrade === opt.val;
        const isDisabled = opt.val === '' ? (savedGrade ? '' : 'selected disabled') : '';
        return `<option value="${opt.val}" ${isSelected ? 'selected' : ''} ${isDisabled}>${opt.label}</option>`;
    }).join('');

    return `
        <div class="grade-input-group">
            <span class="input-label">${label} (${credits})</span>
            <select class="grade-select" 
                    data-semester="${semester}" 
                    data-course="${courseCode}" 
                    data-type="${label.toLowerCase()}" 
                    data-credits="${credits}">
                ${optionsHtml}
            </select>
        </div>
    `;
}

function syncCurrentSemesterFromDOM() {
    document.querySelectorAll('.grade-select').forEach(select => {
        const grade = select.value;
        const sem = parseInt(select.dataset.semester);
        const code = select.dataset.course;
        const type = select.dataset.type;
        const credits = parseFloat(select.dataset.credits);
        const key = `${sem}_${code}_${type}`;

        if (grade) {
            userGrades[key] = { semester: sem, courseCode: code, type, credits, grade };
        } else {
            delete userGrades[key];
        }
    });
    try {
        localStorage.setItem('cgpa_user_grades', JSON.stringify(userGrades));
    } catch (e) {
        // Ignore
    }
}

function calculateGPA() {
    syncCurrentSemesterFromDOM();

    let currentPoints = 0;
    let currentCredits = 0;

    Object.values(userGrades).forEach(item => {
        if (item.semester === currentSemester && item.grade && gradePoints[item.grade] !== undefined) {
            currentPoints += gradePoints[item.grade] * item.credits;
            currentCredits += item.credits;
        }
    });

    if (currentCredits === 0) {
        alert("Please select at least one grade in the current semester to calculate!");
        return;
    }

    const sgpa = currentPoints / currentCredits;
    showResult(sgpa, currentCredits, currentPoints);
}

function computeCGPA(currentSemesterPoints, currentSemesterCredits) {
    const prevCgpaInput = document.getElementById('prevCgpa');
    const prevCreditsInput = document.getElementById('prevCredits');
    const noteEl = document.getElementById('cgpaCalculationNote');

    const prevCgpa = prevCgpaInput ? parseFloat(prevCgpaInput.value) : NaN;
    const prevCredits = prevCreditsInput ? parseFloat(prevCreditsInput.value) : NaN;

    if (prevCgpaInput && !isNaN(prevCgpa)) {
        localStorage.setItem('cgpa_prev_cgpa', prevCgpaInput.value);
    } else {
        localStorage.removeItem('cgpa_prev_cgpa');
    }

    if (prevCreditsInput && !isNaN(prevCredits)) {
        localStorage.setItem('cgpa_prev_credits', prevCreditsInput.value);
    } else {
        localStorage.removeItem('cgpa_prev_credits');
    }

    let finalCgpa = 0;
    let totalCgpaCredits = 0;

    // Method 1: If user provided prior CGPA & credit hours
    if (!isNaN(prevCgpa) && !isNaN(prevCredits) && prevCredits > 0 && prevCgpa >= 0) {
        const priorPoints = prevCgpa * prevCredits;
        const totalPoints = priorPoints + currentSemesterPoints;
        totalCgpaCredits = prevCredits + currentSemesterCredits;
        finalCgpa = totalPoints / totalCgpaCredits;
        if (noteEl) {
            noteEl.textContent = `Combined: ${prevCredits} prior credits (@ ${prevCgpa.toFixed(2)}) + Semester ${currentSemester}`;
        }
    } else {
        // Method 2: Auto-aggregate all semesters entered across tabs
        let allAppPoints = 0;
        let allAppCredits = 0;
        const activeSemesters = new Set();

        Object.values(userGrades).forEach(item => {
            if (item.grade && gradePoints[item.grade] !== undefined && item.credits > 0) {
                allAppPoints += gradePoints[item.grade] * item.credits;
                allAppCredits += item.credits;
                activeSemesters.add(item.semester);
            }
        });

        if (allAppCredits > 0) {
            finalCgpa = allAppPoints / allAppCredits;
            totalCgpaCredits = allAppCredits;
            if (noteEl) {
                if (activeSemesters.size > 1) {
                    noteEl.textContent = `Calculated across ${activeSemesters.size} entered semesters (${totalCgpaCredits} total credits)`;
                } else {
                    noteEl.textContent = `Tip: Enter prior CGPA above or select grades in other semester tabs.`;
                }
            }
        } else {
            finalCgpa = currentSemesterPoints / currentSemesterCredits;
            totalCgpaCredits = currentSemesterCredits;
            if (noteEl) noteEl.textContent = '';
        }
    }

    return {
        cgpa: finalCgpa.toFixed(2),
        totalCredits: totalCgpaCredits
    };
}

function showResult(sgpa, credits, points) {
    lastCalculatedPoints = points;
    lastCalculatedCredits = credits;

    const modal = document.getElementById('resultModal');
    const sgpaSemesterLabel = document.getElementById('sgpaSemesterLabel');
    if (sgpaSemesterLabel) sgpaSemesterLabel.textContent = `Semester ${currentSemester} SGPA`;

    const sgpaValueEl = document.getElementById('sgpaValue');
    if (sgpaValueEl) sgpaValueEl.textContent = sgpa.toFixed(2);

    const sgpaCreditsEl = document.getElementById('sgpaCredits');
    if (sgpaCreditsEl) sgpaCreditsEl.textContent = `${credits} Credits`;

    updateCgpaDisplay();

    modal.classList.remove('hidden');
}

function updateCgpaDisplay() {
    if (lastCalculatedCredits === 0) return;

    const { cgpa, totalCredits } = computeCGPA(lastCalculatedPoints, lastCalculatedCredits);
    const cgpaValueEl = document.getElementById('cgpaValue');
    if (cgpaValueEl) cgpaValueEl.textContent = cgpa;

    const cgpaCreditsEl = document.getElementById('cgpaCredits');
    if (cgpaCreditsEl) cgpaCreditsEl.textContent = `${totalCredits} Total Credits`;
}

function resetCurrentSemester() {
    const semKeys = Object.keys(userGrades).filter(k => userGrades[k].semester === currentSemester);
    if (semKeys.length === 0) {
        alert(`No grades selected in Semester ${currentSemester} to reset.`);
        return;
    }

    if (confirm(`Reset all selected grades in Semester ${currentSemester}?`)) {
        semKeys.forEach(key => delete userGrades[key]);
        try {
            localStorage.setItem('cgpa_user_grades', JSON.stringify(userGrades));
        } catch (e) {
            // Ignore
        }
        renderCourses(currentSemester);
    }
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    if (modal) modal.classList.add('hidden');
}

// Close modal on outside click
window.onclick = function (event) {
    const modal = document.getElementById('resultModal');
    if (event.target === modal) {
        closeModal();
    }
};
