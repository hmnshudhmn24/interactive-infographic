const bars = document.querySelectorAll('.bar');
const tooltip = document.getElementById('tooltip');

bars.forEach(bar => {
    bar.addEventListener('mouseover', (event) => {
        tooltip.textContent = bar.getAttribute('data-info');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        tooltip.style.top = event.pageY - 40 + 'px';
        tooltip.style.left = event.pageX + 'px';
    });

    bar.addEventListener('mousemove', (event) => {
        tooltip.style.top = event.pageY - 40 + 'px';
        tooltip.style.left = event.pageX + 'px';
    });

    bar.addEventListener('mouseout', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});
