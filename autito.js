document.addEventListener("DOMContentLoaded", function () {
    const auto = document.getElementById("car");
    auto.style.transform = "translateX(calc(100% + 50px))"; // mueve el auto fuera de la pantalla

    function moveCar() {
        const currentTransform = window.getComputedStyle(auto).getPropertyValue("transform");
        const currentX = parseFloat(currentTransform.split(",")[4]);
        if (currentX >= window.innerWidth + 50) {
            // Cuando el auto cruzó toda la pantalla, reinicia la animación
            auto.style.transform = "translateX(calc(100% + 50px))";
        } else {
            // Mueve el auto a la derecha
            auto.style.transform = `translateX(${currentX + 500}px)`;
            requestAnimationFrame(moveCar);
        }
    }

    // Inicia la animación después de 5 segundos
    setTimeout(function () {
        auto.style.transform = "translateX(calc(100% + 50px))"; // Inicializa la posición del auto
        requestAnimationFrame(moveCar);
    }, 5000);
});
