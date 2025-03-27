document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contentTitle = document.getElementById("content-title");
    const contentArea = document.getElementById("content-area");

    // Content for each section
    const contentData = {
        "content-strategy": { title: "Content Strategy", text: `<div class="big-box">Info Design for SaaS</div><div class="big-box">DOC Maintenance Mode</div>` },
        "docs-saas": { title: "Docs for SaaS Products", text: `<div class="big-box">User Requirements</div><div class="big-box">Documentation Standards</div>` },
        "knowledge-base": { title: "Knowledge Base", text: `<div class="big-box">Security and Compliance</div><div class="big-box">Technical FAQs</div>` },
        "product-tour": { title: "Product Tour", text: `<div class="big-box">Interactive Walkthrough</div><div class="big-box">Guided Demos</div>` },
        "api-docs": { title: "API Docs", text: `<div class="big-box">REST API Guidelines</div><div class="big-box">Authentication & Usage</div>` },
        "product-writing": { title: "Product Writing", text: `<div class="big-box">Technical Blogs</div><div class="big-box">User Guides</div>` },
        "sops": { title: "SOPs", text: `<div class="big-box">Process Documentation</div><div class="big-box">Operational Standards</div>` },
        "training-content": { title: "Training Content", text: `<div class="big-box">Onboarding Materials</div><div class="big-box">Employee Training</div>` },
        "product-videos": { title: "Product Explainer Videos", text: `<div class="big-box">Feature Walkthroughs</div><div class="big-box">Customer Tutorials</div>` },
        "market-fit": { title: "Market Fit Concept Notes", text: `<div class="big-box">Competitive Analysis</div><div class="big-box">Market Trends</div>` }
    };

    function updateContent(key) {
        contentTitle.innerHTML = contentData[key].title;
        contentArea.innerHTML = contentData[key].text;
    }

    updateContent("content-strategy");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            menuItems.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");
            updateContent(this.getAttribute("data-content"));
        });
    });
});
