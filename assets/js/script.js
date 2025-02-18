document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("page-list");

    for (let i = 1; i <= 100; i++) {
        let row = document.createElement("tr");

        let numberCell = document.createElement("td");
        numberCell.textContent = `${i}`;

        let previewCell = document.createElement("td");
        let iframe = document.createElement("iframe");

        iframe.src = `pages/page101/index.html`;

        iframe.className = "preview-frame";
        iframe.loading = "lazy";
        previewCell.appendChild(iframe);

        let descCell = document.createElement("td");
        descCell.textContent = "Go to the page and perform a deface using XSS";

        row.addEventListener("click", function() {
            window.location.href = `pages/page${i}/index.html`;
        });

        row.appendChild(numberCell);
        row.appendChild(previewCell);
        row.appendChild(descCell);

        tableBody.appendChild(row);
    }
});
