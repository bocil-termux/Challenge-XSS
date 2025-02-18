var script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.3/purify.min.js";
document.head.appendChild(script);

script.onload = function() {
    function sanitizeInput(input, isComment = false) {
        if (isComment) {
            let sanitizedInput = input.replace(/<script.*?>.*?<\/script>/gi, "");
            return sanitizedInput;
        }

        let sanitizedInput = DOMPurify.sanitize(input, {
            SAFE_FOR_JQUERY: true,
            ALLOWED_TAGS: []
        });

        sanitizedInput = sanitizedInput.replace(/&/g, "&amp;")
                                        .replace(/</g, "&lt;")
                                        .replace(/>/g, "&gt;")
                                        .replace(/"/g, "&quot;")
                                        .replace(/'/g, "&#x27;")
                                        .replace(/\?/g, "&#63;")
                                        .replace(/\|/g, "&#124;")
                                        .replace(/\^/g, "&#94;")
                                        .replace(/\$/g, "&#36;")
                                        .replace(/~/g, "&#126;")
                                        .replace(/%/g, "&#37;")
                                        .replace(/{/g, "&#123;")
                                        .replace(/}/g, "&#125;");

        return sanitizedInput;
    }
};
