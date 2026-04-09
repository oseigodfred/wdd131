// =========================
// DATA
// =========================

const contentData = [
    {
        title: "Recognizing Burnout",
        category: "Awareness",
        description: "Understanding the difference between being tired and being depleted.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
        title: "The Power of Routine",
        category: "Coping",
        description: "How small daily habits stabilize mental health during stress.",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335"
    },
    {
        title: "Seeking Professional Help",
        category: "Support",
        description: "How to find the right therapist for your needs.",
        image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8"
    }
];

const resources = [
    {
        title: "Recognizing Burnout",
        category: "Awareness",
        description: "Burnout is emotional, physical, and mental exhaustion caused by long-term stress.",
        detail: "Signs include fatigue, low motivation, irritability, and feeling overwhelmed.",
        manage: "Take regular breaks, reduce workload, sleep well, and set clear boundaries.",
        image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2"
    },
    {
        title: "Box Breathing Technique",
        category: "Coping",
        description: "A breathing exercise that helps calm the nervous system.",
        detail: "Inhale 4s → hold 4s → exhale 4s → hold 4s.",
        manage: "Practice for 2–5 minutes during stress or anxiety attacks.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },
    {
        title: "Understanding Anxiety",
        category: "Awareness",
        description: "Anxiety is a natural stress response that can become overwhelming.",
        detail: "Includes overthinking, restlessness, and rapid heartbeat.",
        manage: "Use grounding techniques, deep breathing, and limit caffeine.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88"
    },
    {
        title: "Healthy Sleep Habits",
        category: "Coping",
        description: "Good sleep improves mental and emotional health.",
        detail: "Poor sleep can worsen stress and anxiety.",
        manage: "Avoid screens before bed, keep a sleep schedule, and relax before sleeping.",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8"
    },
    {
        title: "Supporting a Friend",
        category: "Support",
        description: "Helping others requires empathy and patience.",
        detail: "Listen and avoid judging or rushing solutions.",
        manage: "Be present, encourage help-seeking, and check in regularly.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
    },
    {
        title: "When to Seek Help",
        category: "Support",
        description: "Professional help is important when symptoms persist.",
        detail: "Mental health issues can affect daily life and relationships.",
        manage: "Talk to a counselor, therapist, or trusted adult early.",
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
    }
];

// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    initYear();
    initHome();
    initResources();
    setupMenu();
});

// =========================
// YEAR
// =========================

function initYear() {
    const yearEl = document.querySelector("#current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// =========================
// HOME
// =========================

function initHome() {
    const container = document.querySelector("#featured-cards");
    if (!container) return;

    renderHomeCards(container, contentData);
    handleWelcomeMessage();
}

function renderHomeCards(container, data) {
    container.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}" class="card-img">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p><strong>${item.category}</strong></p>
                <p>${item.description}</p>
            </div>
        </div>
    `).join("");
}

// =========================
// RESOURCES
// =========================

function initResources() {
    const container = document.querySelector("#resource-grid");
    if (!container) return;

    renderResources(container, resources);
    setupFilters(container);
}

function renderResources(container, data) {
    container.innerHTML = data.map(item => `
        <div class="card">
            <img src="${item.image}" alt="${item.title}" class="card-img">

            <div class="card-content">
                <h3>${item.title}</h3>
                <p><strong>${item.category}</strong></p>
                <p>${item.description}</p>

                <p class="card-detail">${item.detail}</p>

                <p class="card-manage">
                    <strong>Ways to Manage:</strong> ${item.manage}
                </p>
            </div>
        </div>
    `).join("");
}

// =========================
// FILTERS
// =========================

function setupFilters(container) {
    const buttons = document.querySelectorAll(".filter-btn");
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            const filter = btn.dataset.filter;

            const filtered =
                filter === "all"
                    ? resources
                    : resources.filter(item => item.category === filter);

            renderResources(container, filtered);
        });
    });
}

// =========================
// LOCAL STORAGE
// =========================

function handleWelcomeMessage() {
    const welcomeArea = document.querySelector("#welcome-message");
    if (!welcomeArea) return;

    let visits = Number(localStorage.getItem("visits") || 0);
    visits++;

    localStorage.setItem("visits", visits);

    welcomeArea.textContent =
        visits === 1
            ? "Welcome! First time here."
            : `Welcome back! Visit number ${visits}`;
}

// =========================
// MENU
// =========================

function setupMenu() {
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}