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
