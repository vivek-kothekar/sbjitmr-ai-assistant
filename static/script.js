// SBJITMR AI Assistant - Client Script

document.addEventListener('DOMContentLoaded', () => {
    // Style string to inject in shadow roots if present
    const overrideStyles = `
        .bpWebchat,
        div[data-name="webchat"],
        div[class*="bpWebchat"] {
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
            transform: translate(-50%, calc(-50% + 14px)) !important;
            transform-origin: center center !important;
            width: 440px !important;
            max-width: calc(100vw - 32px) !important;
            height: min(670px, calc(100vh - 130px)) !important;
            max-height: 700px !important;
            border-radius: 20px !important;
            box-shadow: 0 16px 40px -8px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04) !important;
            border: 1px solid #e2e8f0 !important;
            z-index: 9999 !important;
            overflow: hidden !important;
        }

        .bpFabWrapper,
        .bpFab,
        .bpFabContainer,
        .bpMessagePreview,
        [class*="bpFab"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        @media (max-width: 768px) {
            .bpWebchat,
            div[data-name="webchat"],
            div[class*="bpWebchat"] {
                width: calc(100vw - 20px) !important;
                height: calc(100vh - 100px) !important;
                transform: translate(-50%, calc(-50% + 12px)) !important;
                border-radius: 16px !important;
            }
        }
    `;

    // Function to apply styles to shadow roots and DOM
    const applyStyling = () => {
        // Automatically open the chat window
        if (window.botpress && typeof window.botpress.open === 'function') {
            try {
                window.botpress.open();
            } catch (e) {
                // Ignore silent errors
            }
        }

        // Check all elements in document for shadowRoots
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
            if (el.shadowRoot && !el.shadowRoot.querySelector('#sbjitmr-override-style')) {
                const styleEl = document.createElement('style');
                styleEl.id = 'sbjitmr-override-style';
                styleEl.textContent = overrideStyles;
                el.shadowRoot.appendChild(styleEl);
            }
        });
    };

    // Listen for Botpress events
    if (window.botpress && typeof window.botpress.on === 'function') {
        window.botpress.on('ready', applyStyling);
        window.botpress.on('webchat:ready', applyStyling);
        window.botpress.on('webchat:opened', applyStyling);
    }

    // Observe DOM mutations to style elements as soon as they are injected
    const observer = new MutationObserver(() => {
        applyStyling();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Run periodic check during initial load
    let iterations = 0;
    const interval = setInterval(() => {
        iterations++;
        applyStyling();
        if (iterations > 60) {
            clearInterval(interval);
        }
    }, 100);
});
