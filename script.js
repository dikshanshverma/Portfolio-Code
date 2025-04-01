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
                            <img src="https://placehold.co/300x200/004d99/ffffff?text=SaaS+Design" alt="SaaS Design">
                        </div>
                        <h3>Info Design for SaaS</h3>
                        <div class="metric-content">
                            <p>Information architecture and design principles for SaaS products</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/004d99/ffffff?text=Doc+Maintenance" alt="Doc Maintenance">
                        </div>
                        <h3>DOC Maintenance Mode</h3>
                        <div class="metric-content">
                            <p>Documentation maintenance and update procedures</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/004d99/ffffff?text=Door+Requirements" alt="Door Requirements">
                        </div>
                        <h3>Door Requirement Specification</h3>
                        <div class="metric-content">
                            <p>Detailed specifications for door requirements</p>
                        </div>
                    </div>
                    <div class="metric-box" data-pdf="dummy.pdf">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/004d99/ffffff?text=HDD+Samples" alt="HDD Samples">
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
                            <img src="https://placehold.co/300x200/004d99/ffffff?text=Security" alt="Security">
                        </div>
                        <h3>Security and Compliance</h3>
                        <div class="metric-content">
                            <p>Security protocols and compliance documentation</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box empty">
                        <div class="metric-image">
                            <img src="https://placehold.co/300x200/cccccc/666666?text=Empty" alt="Empty">
                        </div>
                        <h3>Empty</h3>
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
