
function pulseIcon(icon) {
    icon.classList.remove('pulse-animation');
    void icon.offsetWidth;
    icon.classList.add('pulse-animation');
}
