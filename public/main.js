const btn = document.getElementById('send');

btn.addEventListener('click', () => {
    query();
});

async function query() {
    try {
        const res = await fetch('/run-command', {
            method: "POST"
        });
        const text = await res.text();
        console.log(text);
    } catch (error) {
        console.error('Error:', error);
    }
}
