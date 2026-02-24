// function for total count
function updateTotal(value) {
    const totalEl = document.getElementById('total-count');
    const sectionEl = document.getElementById('section-count');
    let current = parseInt(totalEl.innerText);
    totalEl.innerText = current + value;
    sectionEl.innerText = current + value;
}

// function for interview count
function updateInterviewCount(value) {
    const el = document.getElementById('interview-count');
    let current = parseInt(el.innerText);
    el.innerText = current + value;
}

// function for rejected count
function updateRejectedCount(value) {
    const el = document.getElementById('rejected-count');
    let current = parseInt(el.innerText);
    el.innerText = current + value;
}


// 1. what happened after click interview button
function moveToInterview(statusId, cardId) {
    const statusLabel = document.getElementById(statusId);
    
    // Check if it was already INTERVIEW, don't double count
    if (statusLabel.innerText !== "INTERVIEW") {
        
        // If it was "REJECTED" before, subtract 1 from rejected
        if (statusLabel.innerText === "REJECTED") {
            updateRejectedCount(-1);
        }

        statusLabel.innerText = "INTERVIEW";
        statusLabel.className = "text-sm font-bold p-2 text-center mt-2 text-green-500 uppercase";
        updateInterviewCount(1);
    }
}

// 2. what happened after click rejected button
function moveToRejected(statusId, cardId) {
    const statusLabel = document.getElementById(statusId);

    if (statusLabel.innerText !== "REJECTED") {
        
        // If it was "INTERVIEW" before, subtract 1 from interview
        if (statusLabel.innerText === "INTERVIEW") {
            updateInterviewCount(-1);
        }

        statusLabel.innerText = "REJECTED";
        statusLabel.className = "text-sm font-bold p-2 text-center mt-2 text-red-500 uppercase";
        updateRejectedCount(1);
    }
}

// 3. what happened after click delete button
function removeJob(cardId) {
    const card = document.getElementById(cardId);
    
    // Find the status text inside this specific card to update counts
    const statusText = card.querySelector('p[id^="status"]').innerText;

    if (statusText === "INTERVIEW") {
        updateInterviewCount(-1);
    } else if (statusText === "REJECTED") {
        updateRejectedCount(-1);
    }

    // Reduce the Total count
    updateTotal(-1);

    // Remove the card from the HTML
    card.remove();

    // Check if there are any cards left at all
    const container = document.getElementById('main-container');
    if (container.querySelectorAll('.job-card').length === 0) {
        document.getElementById('no-jobs-msg').classList.remove('hidden');
    }
}

// 4. tab filtering logic
function filterJobs(type) {
    const cards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.querySelector('p[id^="status"]').innerText;
        
        if (type === 'all') {
            card.classList.remove('hidden');
            visibleCount++;
        } else if (type === 'interview' && status === 'INTERVIEW') {
            card.classList.remove('hidden');
            visibleCount++;
        } else if (type === 'rejected' && status === 'REJECTED') {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Update the section count (right side)
    document.getElementById('section-count').innerText = visibleCount;

    // Show empty state if no cards match the filter
    const emptyMsg = document.getElementById('no-jobs-msg');
    if (visibleCount === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }
}