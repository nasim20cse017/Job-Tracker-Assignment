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

