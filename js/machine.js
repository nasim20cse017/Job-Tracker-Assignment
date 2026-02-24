let currentFilter = 'all';

// Function to update total count
function updateTotal(value) {
    const totalEl = document.getElementById('total-count');
    let current = parseInt(totalEl.innerText);
    totalEl.innerText = current + value;
}

// Function to update interview count
function updateInterviewCount(value) {
    const el = document.getElementById('interview-count');
    let current = parseInt(el.innerText);
    el.innerText = current + value;
}

// Function to update rejected count
function updateRejectedCount(value) {
    const el = document.getElementById('rejected-count');
    let current = parseInt(el.innerText);
    el.innerText = current + value;
}

// Move job to Interview
function moveToInterview(statusId) {
    const statusLabel = document.getElementById(statusId);
    if (statusLabel.innerText !== "INTERVIEW") {
        if (statusLabel.innerText === "REJECTED") {
            updateRejectedCount(-1);
        }
        statusLabel.innerText = "INTERVIEW";
        statusLabel.className = "text-sm font-bold p-2 text-center mt-2 text-green-500 uppercase";

        updateInterviewCount(1);
        refreshCurrentFilter();
    }
}

// Move job to Rejected
function moveToRejected(statusId) {
    const statusLabel = document.getElementById(statusId);
    if (statusLabel.innerText !== "REJECTED") {
        if (statusLabel.innerText === "INTERVIEW") {
            updateInterviewCount(-1);
        }
        statusLabel.innerText = "REJECTED";
        statusLabel.className = "text-sm font-bold p-2 text-center mt-2 text-red-500 uppercase";

        updateRejectedCount(1);
        refreshCurrentFilter();
    }
}

// Delete a job card
function removeJob(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const statusText = card.querySelector('p[id^="status"]').innerText;

    if (statusText === "INTERVIEW") {
        updateInterviewCount(-1);
    } else if (statusText === "REJECTED") {
        updateRejectedCount(-1);
    }

    updateTotal(-1);
    card.remove();
    refreshCurrentFilter();

    const container = document.getElementById('main-container');
    if (container.querySelectorAll('.job-card').length === 0) {
        document.getElementById('no-jobs-msg').classList.remove('hidden');
    }
}

// Filter jobs by status
function filterJobs(type, clickedBtn) {
    currentFilter = type;

    // Style buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-white', 'text-black');
    });

    if (clickedBtn) {
        clickedBtn.classList.remove('bg-white', 'text-black');
        clickedBtn.classList.add('bg-blue-500', 'text-white');
    }

    refreshCurrentFilter();
}

// Show/hide cards based on filter
function refreshCurrentFilter() {
    const cards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.querySelector('p[id^="status"]').innerText;
        let shouldShow = false;

        if (currentFilter === 'all') shouldShow = true;
        else if (currentFilter === 'interview' && status === 'INTERVIEW') shouldShow = true;
        else if (currentFilter === 'rejected' && status === 'REJECTED') shouldShow = true;

        if (shouldShow) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    document.getElementById('section-count').innerText = visibleCount;

    const emptyMsg = document.getElementById('no-jobs-msg');
    if (visibleCount === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }
}