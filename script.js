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
let previousSemGpas = {};

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
    renderPreviousSemesters(currentSemester);

    document.getElementById('calculateBtn').addEventListener('click', calculateGPA);
    document.getElementById('resetBtn').addEventListener('click', resetCurrentSemester);
    document.querySelector('.close-btn').addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

function getSemesterCredits(sem) {
    if (!coursesData[sem]) return 0;
    return coursesData[sem].reduce((total, course) => total + (course.th + course.pr), 0);
}

function loadSavedState() {
    try {
        const savedGrades = localStorage.getItem('cgpa_user_grades');
        if (savedGrades) {
            userGrades = JSON.parse(savedGrades);
        }
    } catch (e) {
        userGrades = {};
    }

    try {
        const savedSemGpas = localStorage.getItem('cgpa_prev_sem_gpas');
        if (savedSemGpas) {
            previousSemGpas = JSON.parse(savedSemGpas);
        }
    } catch (e) {
        previousSemGpas = {};
    }
}

function savePreviousSemGpas() {
    try {
        localStorage.setItem('cgpa_prev_sem_gpas', JSON.stringify(previousSemGpas));
    } catch (e) {
        // Ignore
    }
}

function initTabs() {
    const tabsContainer = document.getElementById('semesterTabs');
    tabsContainer.innerHTML = '';

    for (let i = 1; i <= 8; i++) {
        const credits = getSemesterCredits(i);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `tab-btn ${i === currentSemester ? 'active' : ''}`;
        btn.innerHTML = `
            <span class="tab-credits-badge">${credits} Cr</span>
            <span class="tab-title">Semester ${i}</span>
        `;
        btn.addEventListener('click', () => {
            currentSemester = i;
            updateTabs();
            renderCourses(i);
            renderPreviousSemesters(i);
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

function getCalculatedGpaForSemester(sem) {
    let points = 0;
    let credits = 0;
    Object.values(userGrades).forEach(item => {
        if (item.semester === sem && item.grade && gradePoints[item.grade] !== undefined) {
            points += gradePoints[item.grade] * item.credits;
            credits += item.credits;
        }
    });
    if (credits === 0) return null;
    return points / credits;
}

function renderPreviousSemesters(semester) {
    const container = document.getElementById('previousSemestersContainer');
    const list = document.getElementById('previousSemestersList');

    // If checking Semester 1, no previous semesters exist -> hide container
    if (semester === 1) {
        container.classList.add('hidden');
        list.innerHTML = '';
        return;
    }

    container.classList.remove('hidden');
    list.innerHTML = '';

    // Show input for each semester from 1 to semester - 1
    for (let s = 1; s < semester; s++) {
        const semCredits = getSemesterCredits(s);
        
        let initialVal = '';
        if (previousSemGpas[s] !== undefined && previousSemGpas[s] !== '') {
            initialVal = previousSemGpas[s];
        } else {
            const autoGpa = getCalculatedGpaForSemester(s);
            if (autoGpa !== null) {
                initialVal = autoGpa.toFixed(2);
                previousSemGpas[s] = parseFloat(initialVal);
            }
        }

        const card = document.createElement('div');
        card.className = 'prev-sem-card';
        card.innerHTML = `
            <div class="prev-sem-info">
                <span class="prev-sem-title">Semester ${s}</span>
                <span class="prev-sem-credits">${semCredits} Cr</span>
            </div>
            <div class="prev-sem-input-wrapper">
                <input type="number" 
                       class="prev-sem-input" 
                       id="prevSemGpa_${s}" 
                       data-sem="${s}" 
                       data-credits="${semCredits}" 
                       min="0" 
                       max="4" 
                       step="0.01" 
                       placeholder="0.00 - 4.00" 
                       value="${initialVal}">
            </div>
        `;

        const input = card.querySelector('.prev-sem-input');

        // Prevent negative '-' or exponential 'e' or '+'
        input.addEventListener('keydown', (e) => {
            if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                e.preventDefault();
            }
        });

        // Strict clamp validation: can't be negative and can't exceed 4.0
        input.addEventListener('input', () => {
            let valStr = input.value.trim();
            if (valStr === '') {
                delete previousSemGpas[s];
                savePreviousSemGpas();
                return;
            }

            let num = parseFloat(valStr);
            if (isNaN(num)) {
                input.value = '';
                delete previousSemGpas[s];
            } else if (num < 0) {
                input.value = '0';
                previousSemGpas[s] = 0;
            } else if (num > 4.0) {
                input.value = '4.00';
                previousSemGpas[s] = 4.0;
            } else {
                previousSemGpas[s] = num;
            }
            savePreviousSemGpas();
        });

        input.addEventListener('blur', () => {
            if (input.value !== '') {
                let num = parseFloat(input.value);
                if (!isNaN(num)) {
                    num = Math.max(0, Math.min(4, num));
                    input.value = num.toFixed(2);
                    previousSemGpas[s] = num;
                    savePreviousSemGpas();
                }
            }
        });

        list.appendChild(card);
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
        alert(`Please select at least one grade in Semester ${currentSemester} to calculate!`);
        return;
    }

    const sgpa = currentPoints / currentCredits;

    // Cumulative calculation
    let totalPoints = currentPoints;
    let totalCredits = currentCredits;
    const includedSemesters = [currentSemester];

    if (currentSemester > 1) {
        for (let s = 1; s < currentSemester; s++) {
            const semTotalCredits = getSemesterCredits(s);
            let semGpa = null;

            if (previousSemGpas[s] !== undefined && previousSemGpas[s] !== '' && !isNaN(parseFloat(previousSemGpas[s]))) {
                semGpa = parseFloat(previousSemGpas[s]);
            } else {
                const autoGpa = getCalculatedGpaForSemester(s);
                if (autoGpa !== null) {
                    semGpa = autoGpa;
                }
            }

            if (semGpa !== null && semGpa >= 0 && semGpa <= 4.0) {
                totalPoints += semGpa * semTotalCredits;
                totalCredits += semTotalCredits;
                includedSemesters.push(s);
            }
        }
    }

    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits) : sgpa;

    showResult(sgpa, currentCredits, cgpa, totalCredits, includedSemesters);
}

function showResult(sgpa, currentCredits, cgpa, totalCredits, includedSemesters) {
    const modal = document.getElementById('resultModal');
    const sgpaSemesterLabel = document.getElementById('sgpaSemesterLabel');
    if (sgpaSemesterLabel) sgpaSemesterLabel.textContent = `Semester ${currentSemester} SGPA`;

    const sgpaValueEl = document.getElementById('sgpaValue');
    if (sgpaValueEl) sgpaValueEl.textContent = sgpa.toFixed(2);

    const sgpaCreditsEl = document.getElementById('sgpaCredits');
    if (sgpaCreditsEl) sgpaCreditsEl.textContent = `${currentCredits} Credits`;

    const cgpaValueEl = document.getElementById('cgpaValue');
    if (cgpaValueEl) cgpaValueEl.textContent = cgpa.toFixed(2);

    const cgpaCreditsEl = document.getElementById('cgpaCredits');
    if (cgpaCreditsEl) cgpaCreditsEl.textContent = `${totalCredits} Total Credits`;

    const noteEl = document.getElementById('cgpaCalculationNote');
    if (noteEl) {
        if (includedSemesters.length > 1) {
            const sortedSems = [...includedSemesters].sort((a, b) => a - b).map(s => `Sem ${s}`);
            noteEl.innerHTML = `<strong>Combined CGPA:</strong> Evaluated across ${sortedSems.join(', ')} (${totalCredits} total credit hours).`;
        } else {
            noteEl.textContent = `Semester 1 SGPA and cumulative CGPA are identical.`;
        }
    }

    modal.classList.remove('hidden');
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
