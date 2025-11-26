window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textInput');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            alert(input.value);
        }
    });
});
