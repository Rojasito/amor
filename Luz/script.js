function confirmLove() {
            alert("¡Output exitoso! ❤️ Sistema actualizado a: 'En una relación'.");
        }
		
function huir(boton) {
            // Esto hace que el botón "No" se mueva cuando intentas clickearlo
            boton.style.position = 'absolute';
            boton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
            boton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        }