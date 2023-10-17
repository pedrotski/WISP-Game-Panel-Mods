(function() {
    function injectRawHtml(htmlString) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString.trim();

        var elements = tempDiv.childNodes;

        for (var i = 0; i < elements.length; i++) {
            document.head.appendChild(elements[i].cloneNode(true));
        }
    }

    // ============================
    // Add your custom HTML content here
    // ============================
    var yourHtmlContentHere = `
        <!-- Paste your HTML content here -->
        <!-- Example: -->
        <script src="https://example.com/example-script.js"></script>
        <link rel="stylesheet" href="https://example.com/example-style.css">
        <!-- End Example -->
    `;

    // ============================
    // End of custom HTML content section
    // ============================

    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        injectRawHtml(yourHtmlContentHere);
        console.log('Custom HTML content injected successfully into the head.');
    });
})();
