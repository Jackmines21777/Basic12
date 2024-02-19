// Crear un nuevo objeto Howl
var musica = new Howl({
    src: ['song.mp3'],
    loop: true, // Repetir la música
    volume: 0.5 // Volumen (valor entre 0 y 1)
});

// Reproducir la música
musica.play();

// Pausar la música
// musica.pause();

