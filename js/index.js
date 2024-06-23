function generate() {
    let h1 = document.getElementsByTagName('h1')[0];
    let body = document.getElementById('body');
    let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += n[Math.floor(Math.random() * n.length)]
    }
    h1.innerText = "Generated Color: " + color;
    body.style.backgroundColor = color;
}