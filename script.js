document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contentTitle = document.getElementById("content-title");
    const contentArea = document.getElementById("content-area");

    // Create PDF viewer element
    const pdfViewer = document.createElement('div');
    pdfViewer.className = 'pdf-viewer';
    pdfViewer.innerHTML = '<iframe id="pdf-frame"></iframe>';
    document.body.appendChild(pdfViewer);

    // Content for each section
    const contentData = {
        "content-strategy": { 
            title: "Content Strategy", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/1.jpg" alt="Content Strategy 1">
                        </div>
                        <h3>Info Design for SaaS</h3>
                        <div class="metric-content">
                            <p>Information architecture and design principles for SaaS products</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/2.jpg" alt="Content Strategy 2">
                        </div>
                        <h3>DOC Maintenance Mode</h3>
                        <div class="metric-content">
                            <p>Documentation maintenance and update procedures</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/4.jpg" alt="Docs for SaaS 1">
                        </div>
                        <h3>Docs for SaaS 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/5.jpg" alt="Docs for SaaS 2">
                        </div>
                        <h3>Door Requirement Specification</h3>
                        <div class="metric-content">
                            <p>Detailed specifications for door requirements</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/7.jpg" alt="Knowledge Base 1">
                        </div>
                        <h3>Security and Compliance</h3>
                        <div class="metric-content">
                            <p>Security protocols and compliance documentation</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/8.jpg" alt="Knowledge Base 2">
                        </div>
                        <h3>Knowledge Base 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/10.jpg" alt="Product Tour 1">
                        </div>
                        <h3>Product Tour 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/11.jpg" alt="Product Tour 2">
                        </div>
                        <h3>Product Tour 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/13.jpg" alt="API Docs 1">
                        </div>
                        <h3>API Docs 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/14.jpg" alt="API Docs 2">
                        </div>
                        <h3>API Docs 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/16.jpg" alt="SOPs 1">
                        </div>
                        <h3>SOPs 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/17.jpg" alt="SOPs 2">
                        </div>
                        <h3>SOPs 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/19.jpg" alt="Training Content 1">
                        </div>
                        <h3>Training Content 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/20.jpg" alt="Training Content 2">
                        </div>
                        <h3>Training Content 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/22.jpg" alt="Product Videos 1">
                        </div>
                        <h3>Product Videos 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/23.jpg" alt="Product Videos 2">
                        </div>
                        <h3>Product Videos 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/25.jpg" alt="Product Marketing 1">
                        </div>
                        <h3>Product Marketing 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/26.jpg" alt="Product Marketing 2">
                        </div>
                        <h3>Product Marketing 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/28.jpg" alt="White Paper 1">
                        </div>
                        <h3>White Paper 1</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="./images/Content/29.jpg" alt="White Paper 2">
                        </div>
                        <h3>White Paper 2</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
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

    function updateContent(key) {
        contentTitle.innerHTML = contentData[key].title;
        contentArea.innerHTML = contentData[key].text;
        
        // Add click event listeners to the boxes
        const boxes = contentArea.querySelectorAll('.metric-box');
        boxes.forEach(box => {
            if (!box.classList.contains('empty')) {
                box.addEventListener('click', function() {
                    const pdfPath = this.getAttribute('data-pdf');
                    const pdfFrame = document.getElementById('pdf-frame');
                    pdfFrame.src = pdfPath;
                    pdfViewer.classList.add('active');
                });
            }
        });
    }

    // Close PDF viewer when clicking outside
    pdfViewer.addEventListener('click', function(e) {
        if (e.target === pdfViewer) {
            pdfViewer.classList.remove('active');
        }
    });

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
