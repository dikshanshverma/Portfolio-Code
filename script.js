document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contentTitle = document.getElementById("content-title");
    const contentArea = document.getElementById("content-area");

    // Content for each section
    const contentData = {
        "content-strategy": { 
            title: "Content Strategy", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Info Design for SaaS</div><div class="big-box" data-pdf="dummy.pdf">DOC Maintenance Mode</div>` 
        },
        "docs-saas": { 
            title: "Docs for SaaS Products", 
            text: `<div class="big-box" data-pdf="dummy.pdf">User Requirements</div><div class="big-box" data-pdf="dummy.pdf">Documentation Standards</div>` 
        },
        "knowledge-base": { 
            title: "Knowledge Base", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Security and Compliance</div><div class="big-box" data-pdf="dummy.pdf">Technical FAQs</div>` 
        },
        "product-tour": { 
            title: "Product Tour", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Interactive Walkthrough</div><div class="big-box" data-pdf="dummy.pdf">Guided Demos</div>` 
        },
        "api-docs": { 
            title: "API Docs", 
            text: `<div class="big-box" data-pdf="dummy.pdf">REST API Guidelines</div><div class="big-box" data-pdf="dummy.pdf">Authentication & Usage</div>` 
        },
        "product-writing": { 
            title: "Product Writing", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Technical Blogs</div><div class="big-box" data-pdf="dummy.pdf">User Guides</div>` 
        },
        "sops": { 
            title: "SOPs", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Process Documentation</div><div class="big-box" data-pdf="dummy.pdf">Operational Standards</div>` 
        },
        "training-content": { 
            title: "Training Content", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Onboarding Materials</div><div class="big-box" data-pdf="dummy.pdf">Employee Training</div>` 
        },
        "product-videos": { 
            title: "Product Explainer Videos", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Feature Walkthroughs</div><div class="big-box" data-pdf="dummy.pdf">Customer Tutorials</div>` 
        },
        "market-fit": { 
            title: "Market Fit Concept Notes", 
            text: `<div class="big-box" data-pdf="dummy.pdf">Competitive Analysis</div><div class="big-box" data-pdf="dummy.pdf">Market Trends</div>` 
        }
    };

    function updateContent(key) {
        contentTitle.innerHTML = contentData[key].title;
        contentArea.innerHTML = contentData[key].text;
        
        // Add click event listeners to the new boxes
        const boxes = contentArea.querySelectorAll('.big-box');
        boxes.forEach(box => {
            box.addEventListener('click', function() {
                const pdfPath = this.getAttribute('data-pdf');
                window.open(pdfPath, '_blank');
            });
        });
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
