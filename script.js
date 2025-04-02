document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contentTitle = document.getElementById("content-title");
    const contentArea = document.getElementById("content-area");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    // Mobile menu functionality
    function toggleMobileMenu() {
        sidebar.classList.toggle("active");
        sidebarOverlay.classList.toggle("active");
        document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "";
    }

    menuToggle.addEventListener("click", toggleMobileMenu);
    sidebarOverlay.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Content for each section
    const contentData = {
        "content-strategy": { 
            title: "Content Strategy", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/info-design.html">
                        <div class="metric-image">
                            <img src="./images/Content/1.jpg" alt="Content Strategy 1">
                        </div>
                        <h3>Info Design for SaaS</h3>
                        <div class="metric-content">
                            <p>Information architecture and design principles for SaaS products</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/doc-maintenance.html">
                        <div class="metric-image">
                            <img src="./images/Content/2.jpg" alt="Content Strategy 2">
                        </div>
                        <h3>DOC Maintenance Mode</h3>
                        <div class="metric-content">
                            <p>Documentation maintenance and update procedures</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/content-strategy3.html">
                        <div class="metric-image">
                            <img src="./images/Content/3.jpg" alt="Content Strategy 3">
                        </div>
                        <h3>Content Strategy 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "docs-saas": { 
            title: "Docs for SaaS Products", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/docs-saas1.html">
                        <div class="metric-image">
                            <img src="./images/Content/4.jpg" alt="Docs for SaaS 1">
                        </div>
                        <h3>Docs for SaaS 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/door-specs.html">
                        <div class="metric-image">
                            <img src="./images/Content/5.jpg" alt="Docs for SaaS 2">
                        </div>
                        <h3>Door Requirement Specification</h3>
                        <div class="metric-content">
                            <p>Detailed specifications for door requirements</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/hdd-samples.html">
                        <div class="metric-image">
                            <img src="./images/Content/6.jpg" alt="Docs for SaaS 3">
                        </div>
                        <h3>HDD Samples</h3>
                        <div class="metric-content">
                            <p>Sample HDD documentation and examples</p>
                        </div>
                    </div>
                </div>`
        },
        "knowledge-base": { 
            title: "Knowledge Base", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/security-compliance.html">
                        <div class="metric-image">
                            <img src="./images/Content/7.jpg" alt="Knowledge Base 1">
                        </div>
                        <h3>Security and Compliance</h3>
                        <div class="metric-content">
                            <p>Security protocols and compliance documentation</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/kb2.html">
                        <div class="metric-image">
                            <img src="./images/Content/8.jpg" alt="Knowledge Base 2">
                        </div>
                        <h3>Knowledge Base 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/kb3.html">
                        <div class="metric-image">
                            <img src="./images/Content/9.jpg" alt="Knowledge Base 3">
                        </div>
                        <h3>Knowledge Base 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "product-tour": { 
            title: "Product Tour", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/product-tour1.html">
                        <div class="metric-image">
                            <img src="./images/Content/10.jpg" alt="Product Tour 1">
                        </div>
                        <h3>Product Tour 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/product-tour2.html">
                        <div class="metric-image">
                            <img src="./images/Content/11.jpg" alt="Product Tour 2">
                        </div>
                        <h3>Product Tour 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/product-tour3.html">
                        <div class="metric-image">
                            <img src="./images/Content/12.jpg" alt="Product Tour 3">
                        </div>
                        <h3>Product Tour 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "api-docs": { 
            title: "API Docs", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/api-docs1.html">
                        <div class="metric-image">
                            <img src="./images/Content/13.jpg" alt="API Docs 1">
                        </div>
                        <h3>API Docs 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/api-docs2.html">
                        <div class="metric-image">
                            <img src="./images/Content/14.jpg" alt="API Docs 2">
                        </div>
                        <h3>API Docs 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/api-docs3.html">
                        <div class="metric-image">
                            <img src="./images/Content/15.jpg" alt="API Docs 3">
                        </div>
                        <h3>API Docs 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "sops": { 
            title: "SOPs", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/sops1.html">
                        <div class="metric-image">
                            <img src="./images/Content/16.jpg" alt="SOPs 1">
                        </div>
                        <h3>SOPs 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/sops2.html">
                        <div class="metric-image">
                            <img src="./images/Content/17.jpg" alt="SOPs 2">
                        </div>
                        <h3>SOPs 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/sops3.html">
                        <div class="metric-image">
                            <img src="./images/Content/18.jpg" alt="SOPs 3">
                        </div>
                        <h3>SOPs 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "training-content": { 
            title: "Training Content", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/training1.html">
                        <div class="metric-image">
                            <img src="./images/Content/19.jpg" alt="Training Content 1">
                        </div>
                        <h3>Training Content 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/training2.html">
                        <div class="metric-image">
                            <img src="./images/Content/20.jpg" alt="Training Content 2">
                        </div>
                        <h3>Training Content 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/training3.html">
                        <div class="metric-image">
                            <img src="./images/Content/21.jpg" alt="Training Content 3">
                        </div>
                        <h3>Training Content 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "product-videos": { 
            title: "Product Explainer Videos/User Onboarding", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/videos1.html">
                        <div class="metric-image">
                            <img src="./images/Content/22.jpg" alt="Product Videos 1">
                        </div>
                        <h3>Product Videos 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/videos2.html">
                        <div class="metric-image">
                            <img src="./images/Content/23.jpg" alt="Product Videos 2">
                        </div>
                        <h3>Product Videos 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/videos3.html">
                        <div class="metric-image">
                            <img src="./images/Content/24.jpg" alt="Product Videos 3">
                        </div>
                        <h3>Product Videos 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "product-marketing": { 
            title: "Product Marketing", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/marketing1.html">
                        <div class="metric-image">
                            <img src="./images/Content/25.jpg" alt="Product Marketing 1">
                        </div>
                        <h3>Product Marketing 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/marketing2.html">
                        <div class="metric-image">
                            <img src="./images/Content/26.jpg" alt="Product Marketing 2">
                        </div>
                        <h3>Product Marketing 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/marketing3.html">
                        <div class="metric-image">
                            <img src="./images/Content/27.jpg" alt="Product Marketing 3">
                        </div>
                        <h3>Product Marketing 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "white-paper": { 
            title: "White Paper", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/whitepaper1.html">
                        <div class="metric-image">
                            <img src="./images/Content/28.jpg" alt="White Paper 1">
                        </div>
                        <h3>White Paper 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/whitepaper2.html">
                        <div class="metric-image">
                            <img src="./images/Content/29.jpg" alt="White Paper 2">
                        </div>
                        <h3>White Paper 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/whitepaper3.html">
                        <div class="metric-image">
                            <img src="./images/Content/30.jpg" alt="White Paper 3">
                        </div>
                        <h3>White Paper 3</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        }
    };

    async function loadContent(pageUrl) {
        try {
            const response = await fetch(pageUrl);
            if (!response.ok) {
                throw new Error('Page not found');
            }
            const content = await response.text();
            contentArea.innerHTML = content;
        } catch (error) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h2>Error Loading Content</h2>
                    <p>Sorry, the requested page could not be loaded. Please try again later.</p>
                </div>
            `;
        }
    }

    function updateContent(key) {
        contentTitle.innerHTML = contentData[key].title;
        contentArea.innerHTML = contentData[key].text;
        
        // Add click event listeners to the boxes
        const boxes = contentArea.querySelectorAll('.metric-box');
        boxes.forEach(box => {
            if (!box.classList.contains('empty')) {
                box.addEventListener('click', function() {
                    const pageUrl = this.getAttribute('data-page');
                    loadContent(pageUrl);
                });
            }
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

    // Handle window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("active");
            sidebarOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});
