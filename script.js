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
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Information architecture and design principles for SaaS products</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/doc-maintenance.html">
                        <div class="metric-image">
                            <img src="./images/Content/2.jpg" alt="Content Strategy 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Documentation maintenance and update procedures</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/content-strategy3.html">
                        <div class="metric-image">
                            <img src="./images/Content/3.jpg" alt="Content Strategy 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                    <div class="metric-box" data-page="content/Docs for Saas Products/SaaSmile Plugin for eCommerce platform.html">
                        <div class="metric-image">
                            <img src="./images/Content/4.jpg" alt="SaaSmile Plugin">
                        </div>
                        <h3>SaaSmile Plugin for eCommerce platform</h3>
                        <div class="metric-content">
                            <p>User guide and documentation for the SaaSmile eCommerce plugin</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/Docs for Saas Products/THOUGHT LEADERSHIP APPROACH ON PRODUCT.html">
                        <div class="metric-image">
                            <img src="./images/Content/5.jpg" alt="Thought Leadership">
                        </div>
                        <h3>THOUGHT LEADERSHIP APPROACH ON PRODUCT</h3>
                        <div class="metric-content">
                            <p>Sample ideation and product strategy documentation</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/hdd-samples.html">
                        <div class="metric-image">
                            <img src="./images/Content/6.jpg" alt="Docs for SaaS 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                    <div class="metric-box" data-page="content/Knowledge Base/Secuvy - Sample.html">
                        <div class="metric-image">
                            <img src="./images/Content/7.jpg" alt="Secuvy - Sample">
                        </div>
                        <h3>Secuvy - Sample</h3>
                        <div class="metric-content">
                            <p>Sample documentation for Secuvy</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/Knowledge Base/User Guide - Amagi CLOUDPORT LIVE and DYNAMIC.html">
                        <div class="metric-image">
                            <img src="./images/Content/8.jpg" alt="User Guide - Amagi">
                        </div>
                        <h3>User Guide - Amagi CLOUDPORT LIVE and DYNAMIC</h3>
                        <div class="metric-content">
                            <p>Comprehensive user guide for Amagi CLOUDPORT LIVE and DYNAMIC</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/Knowledge Base/Using Document 360 as a Knowledgebase.html">
                        <div class="metric-image">
                            <img src="./images/Content/9.jpg" alt="Document 360">
                        </div>
                        <h3>Using Document 360 as a Knowledgebase</h3>
                        <div class="metric-content">
                            <p>Guide on using Document 360 as a knowledge management platform</p>
                        </div>
                    </div>
                </div>`
        },
        "product-tour": { 
            title: "Product Tour", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="https://chippersageblr.s3.ap-south-1.amazonaws.com/ChippersageS3_data/Learner+-+Demo-+build/start.html" data-external="true">
                        <div class="metric-image">
                            <img src="./images/Content/10.jpg" alt="Product Tour 1">
                        </div>
                        <h3>Flow Of English - Learner</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/product-tour2.html">
                        <div class="metric-image">
                            <img src="./images/Content/11.jpg" alt="Product Tour 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/product-tour3.html">
                        <div class="metric-image">
                            <img src="./images/Content/12.jpg" alt="Product Tour 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                    <div class="metric-box" data-page="content/API Docs/Communication Coach Bot.html">
                        <div class="metric-image">
                            <img src="./images/Content/13.jpg" alt="Communication Coach Bot">
                        </div>
                        <h3>Communication Coach Bot</h3>
                        <div class="metric-content">
                            <p>Workflow Builder & API Documentation</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/api-docs2.html">
                        <div class="metric-image">
                            <img src="./images/Content/14.jpg" alt="API Docs 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/api-docs3.html">
                        <div class="metric-image">
                            <img src="./images/Content/15.jpg" alt="API Docs 3">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        },
        "technical-docs": { 
            title: "Technical Documentation", 
            text: `
                <div class="metrics-container">
                    <div class="metric-box" data-page="content/Technical Documentaion/SUNDOOR.html">
                        <div class="metric-image">
                            <img src="./images/Content/24.jpg" alt="SUNDOOR">
                        </div>
                        <h3>SUNDOOR HW Design Design</h3>
                        <div class="metric-content">
                            <p>Comprehensive system architecture documentation for SUNDOOR</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/technical-doc2.html">
                        <div class="metric-image">
                            <img src="./images/Content/32.jpg" alt="Technical Doc 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Implementation guides and technical specifications</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/technical-doc3.html">
                        <div class="metric-image">
                            <img src="./images/Content/33.jpg" alt="Technical Doc 3">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Troubleshooting and technical support documentation</p>
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
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/sops2.html">
                        <div class="metric-image">
                            <img src="./images/Content/17.jpg" alt="SOPs 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/sops3.html">
                        <div class="metric-image">
                            <img src="./images/Content/18.jpg" alt="SOPs 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/training2.html">
                        <div class="metric-image">
                            <img src="./images/Content/20.jpg" alt="Training Content 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/training3.html">
                        <div class="metric-image">
                            <img src="./images/Content/21.jpg" alt="Training Content 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                    <div class="metric-box" data-page="content/Product Explainer Videos/04. Confidential _ Video - Amagi Now_Navigating Media Library.mp4" data-video="true">
                        <div class="metric-image">
                            <img src="./images/Content/22.jpg" alt="Amagi Now Navigating Media Library">
                        </div>
                        <h3>✅ Amagi Now Navigating Media Library</h3>
                        <div class="metric-content">
                            <p>Video tutorial on navigating the Amagi Now Media Library</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/Product Explainer Videos/05. Confidential _ Video - Amagi_Flexible Duration.mp4" data-video="true">
                        <div class="metric-image">
                            <img src="./images/Content/23.jpg" alt="Amagi Flexible Duration">
                        </div>
                        <h3>✅ Amagi Flexible Duration</h3>
                        <div class="metric-content">
                            <p>Video tutorial on Amagi's Flexible Duration feature</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/videos3.html">
                        <div class="metric-image">
                            <img src="./images/Content/24.jpg" alt="Product Videos 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/marketing2.html">
                        <div class="metric-image">
                            <img src="./images/Content/26.jpg" alt="Product Marketing 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/marketing3.html">
                        <div class="metric-image">
                            <img src="./images/Content/27.jpg" alt="Product Marketing 3">
                        </div>
                        <h3>✅ Empty</h3>
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
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/whitepaper2.html">
                        <div class="metric-image">
                            <img src="./images/Content/29.jpg" alt="White Paper 2">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                    <div class="metric-box" data-page="content/whitepaper3.html">
                        <div class="metric-image">
                            <img src="./images/Content/30.jpg" alt="White Paper 3">
                        </div>
                        <h3>✅ Empty</h3>
                        <div class="metric-content">
                            <p>Content pending</p>
                        </div>
                    </div>
                </div>`
        }
    };

    async function loadContent(pageUrl) {
        try {
            // Check if this is a video file
            if (pageUrl.endsWith('.mp4')) {
                // Create a wrapper for the video content
                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'content-page video-page';
                
                // Add a back button
                const backButton = document.createElement('button');
                backButton.className = 'back-button';
                
                // Set the back button text based on the content type
                if (pageUrl.includes('Communication Coach Bot')) {
                    backButton.textContent = '← Back to API Docs';
                    backButton.addEventListener('click', () => updateContent('api-docs'));
                } else if (pageUrl.includes('SUNDOOR.html')) {
                    backButton.textContent = '← Back to Technical Documentation';
                    backButton.addEventListener('click', () => updateContent('technical-docs'));
                } else if (pageUrl.includes('SaaSmile Plugin for eCommerce platform')) {
                    backButton.textContent = '← Back to Docs for SaaS Products';
                    backButton.addEventListener('click', () => updateContent('docs-saas'));
                } else if (pageUrl.includes('THOUGHT LEADERSHIP APPROACH ON PRODUCT')) {
                    backButton.textContent = '← Back to Docs for SaaS Products';
                    backButton.addEventListener('click', () => updateContent('docs-saas'));
                } else if (pageUrl.includes('Using Document 360 as a Knowledgebase')) {
                    backButton.textContent = '← Back to Knowledge Base';
                    backButton.addEventListener('click', () => updateContent('knowledge-base'));
                } else {
                    backButton.textContent = '← Back to Technical Documentation';
                    backButton.addEventListener('click', () => updateContent('technical-docs'));
                }
                
                contentWrapper.appendChild(backButton);
                
                // Create a video player container
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';
                
                // Create the video element
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = false;
                video.className = 'video-player';
                
                // Set the video source
                const source = document.createElement('source');
                source.src = pageUrl;
                source.type = 'video/mp4';
                video.appendChild(source);
                
                // Add a fallback message
                const fallbackText = document.createElement('p');
                fallbackText.textContent = 'Your browser does not support the video tag.';
                video.appendChild(fallbackText);
                
                // Add the video to the container
                videoContainer.appendChild(video);
                
                // Add the video container to the content wrapper
                contentWrapper.appendChild(videoContainer);
                
                // Replace the content area with our new content
                contentArea.innerHTML = '';
                contentArea.appendChild(contentWrapper);
                
                // Add custom styles for the video
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    .video-page {
                        padding: 20px;
                        max-width: 100%;
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }
                    .back-button {
                        margin-bottom: 20px;
                        padding: 8px 16px;
                        background-color: #002f6c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                    }
                    .back-button:hover {
                        background-color: #004d99;
                    }
                    .video-container {
                        width: 100%;
                        max-width: 1000px;
                        margin: 0 auto;
                        background-color: #000;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                    }
                    .video-player {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                `;
                document.head.appendChild(styleElement);
                
                return;
            }
            
            const response = await fetch(pageUrl);
            if (!response.ok) {
                throw new Error('Page not found');
            }
            const content = await response.text();
            
            // Create a temporary container to parse the HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = content;
            
            // Extract the body content
            const bodyContent = tempContainer.querySelector('body') || tempContainer;
            
            // Create a wrapper for the content with proper styling
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'content-page';
            
            // Add a back button
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            
            // Set the back button text based on the content type
            if (pageUrl.includes('Communication Coach Bot')) {
                backButton.textContent = '← Back to API Docs';
                backButton.addEventListener('click', () => updateContent('api-docs'));
            } else if (pageUrl.includes('SUNDOOR.html')) {
                backButton.textContent = '← Back to Technical Documentation';
                backButton.addEventListener('click', () => updateContent('technical-docs'));
            } else if (pageUrl.includes('SaaSmile Plugin for eCommerce platform')) {
                backButton.textContent = '← Back to Docs for SaaS Products';
                backButton.addEventListener('click', () => updateContent('docs-saas'));
            } else if (pageUrl.includes('THOUGHT LEADERSHIP APPROACH ON PRODUCT')) {
                backButton.textContent = '← Back to Docs for SaaS Products';
                backButton.addEventListener('click', () => updateContent('docs-saas'));
            } else if (pageUrl.includes('Using Document 360 as a Knowledgebase')) {
                backButton.textContent = '← Back to Knowledge Base';
                backButton.addEventListener('click', () => updateContent('knowledge-base'));
            } else {
                backButton.textContent = '← Back to Technical Documentation';
                backButton.addEventListener('click', () => updateContent('technical-docs'));
            }
            
            contentWrapper.appendChild(backButton);
            
            // Add the content
            contentWrapper.appendChild(bodyContent);
            
            // Replace the content area with our new content
            contentArea.innerHTML = '';
            contentArea.appendChild(contentWrapper);
            
            // Fix relative paths for images and other assets
            const basePath = pageUrl.substring(0, pageUrl.lastIndexOf('/') + 1);
            
            // Determine the assets folder based on the pageUrl
            let assetsFolder = '';
            if (pageUrl.includes('Communication Coach Bot') || 
                pageUrl.includes('SaaSmile Plugin for eCommerce platform') || 
                pageUrl.includes('THOUGHT LEADERSHIP APPROACH ON PRODUCT') ||
                pageUrl.includes('Secuvy - Sample') ||
                pageUrl.includes('User Guide - Amagi CLOUDPORT LIVE and DYNAMIC') ||
                pageUrl.includes('Using Document 360 as a Knowledgebase')) {
                // No assets folder needed as images are embedded
                assetsFolder = '';
            } else if (pageUrl.includes('SUNDOOR.html')) {
                assetsFolder = 'content/SUNDOOR/';
            } else if (pageUrl.includes('Sample Ideation')) {
                assetsFolder = 'content/Docs for Saas Products/Sample Ideation/';
            } else {
                assetsFolder = basePath + '/';
            }
            
            // Update image sources for both v:imagedata and img tags
            const vmlImages = contentWrapper.querySelectorAll('v\\:imagedata');
            vmlImages.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    // Extract the filename from the src attribute
                    const filename = src.split('/').pop();
                    img.setAttribute('src', assetsFolder + filename);
                }
            });
            
            const regularImages = contentWrapper.querySelectorAll('img');
            regularImages.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
                    // Extract the filename from the src attribute
                    const filename = src.split('/').pop();
                    img.setAttribute('src', assetsFolder + filename);
                }
            });
            
            // Add custom styles for the content
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                .content-page {
                    padding: 20px;
                    max-width: 100%;
                    overflow-x: auto;
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .back-button {
                    margin-bottom: 20px;
                    padding: 8px 16px;
                    background-color: #002f6c;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                }
                .back-button:hover {
                    background-color: #004d99;
                }
                .content-page img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: 15px 0;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .content-page table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 20px;
                }
                .content-page table, .content-page th, .content-page td {
                    border: 1px solid #ddd;
                }
                .content-page th, .content-page td {
                    padding: 8px;
                    text-align: left;
                }
                .content-page th {
                    background-color: #f2f2f2;
                }
                .content-page h1, .content-page h2, .content-page h3, .content-page h4, .content-page h5, .content-page h6 {
                    color: #002f6c;
                    margin-top: 1.5em;
                    margin-bottom: 0.5em;
                }
                .content-page p {
                    margin-bottom: 1em;
                }
                .content-page ul, .content-page ol {
                    margin-bottom: 1em;
                    padding-left: 2em;
                }
                .content-page li {
                    margin-bottom: 0.5em;
                }
                .content-page pre, .content-page code {
                    background-color: #f5f5f5;
                    padding: 0.2em 0.4em;
                    border-radius: 3px;
                    font-family: monospace;
                }
                .content-page pre {
                    padding: 1em;
                    overflow-x: auto;
                    margin-bottom: 1em;
                }
                .content-page blockquote {
                    border-left: 4px solid #002f6c;
                    padding-left: 1em;
                    margin-left: 0;
                    margin-bottom: 1em;
                    color: #555;
                }
                /* Fix for VML images */
                v\\:* {
                    display: inline-block;
                }
                /* Improve spacing and readability */
                .content-page div {
                    margin-bottom: 1em;
                }
                .content-page p {
                    text-align: justify;
                }
                /* Add a subtle border to images for better visibility */
                .content-page img {
                    border: 1px solid #eee;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
            `;
            document.head.appendChild(styleElement);
            
            // Add a script to fix any remaining image issues
            const fixScript = document.createElement('script');
            fixScript.textContent = `
                // Fix any remaining image issues
                document.addEventListener('DOMContentLoaded', function() {
                    // Find all v:shape elements and convert them to regular images
                    const vmlShapes = document.querySelectorAll('v\\:shape');
                    vmlShapes.forEach(shape => {
                        const imagedata = shape.querySelector('v\\:imagedata');
                        if (imagedata) {
                            const src = imagedata.getAttribute('src');
                            if (src) {
                                const img = document.createElement('img');
                                img.src = src;
                                img.style.maxWidth = '100%';
                                img.style.height = 'auto';
                                shape.parentNode.replaceChild(img, shape);
                            }
                        }
                    });
                    
                    // Fix any remaining image paths
                    const allImages = document.querySelectorAll('img');
                    allImages.forEach(img => {
                        const src = img.getAttribute('src');
                        if (src && (src.includes('Communication Coach Bot Workflow Builder & API Document v2.1_files') || 
                                   src.includes('09. Confidential - User Guide - Amagi CLOUDPORT LIVE and DYNAMIC_files') ||
                                   src.includes('08. Sample _ Ideation _ Product strategy_files') ||
                                   src.includes('12. Secuvy - sample_files') ||
                                   src.includes('10. Confidential _ Using Document 360 as a Knowledgebase_files') ||
                                   src.includes('SUNDOOR_files'))) {
                            const filename = src.split('/').pop();
                            img.setAttribute('src', '${assetsFolder}' + filename);
                        }
                    });
                });
            `;
            document.head.appendChild(fixScript);
            
        } catch (error) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <h2>Error Loading Content</h2>
                    <p>Sorry, the requested page could not be loaded. Please try again later.</p>
                    <p>Error details: ${error.message}</p>
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
                    const isExternal = this.getAttribute('data-external') === 'true';
                    const isVideo = this.getAttribute('data-video') === 'true';
                    
                    if (isExternal) {
                        window.open(pageUrl, '_blank');
                    } else {
                        loadContent(pageUrl);
                    }
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
