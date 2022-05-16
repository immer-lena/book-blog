document.addEventListener("DOMContentLoaded", function (event) {
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (matched) {
        document.body.classList.toggle('darkmode');
        document.getElementById("checkbox").checked = true;
    }


    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('darkmode');
    })
});