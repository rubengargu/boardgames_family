import React, { useRef, useState } from "react";
import "../../styles/intro.css"; // Importa tus estilos CSS aquí si es necesario

const Intro = () => {
    const introRef = useRef(null);
    const historiaRef = useRef(null);
    const [showCrawl, setShowCrawl] = useState(false);

    const animar = () => {
        // Ocultar el primer texto (texto-inicial)
        if (introRef.current) {
            introRef.current.style.opacity = 0;
        }

        // Mostrar el segundo texto (texto-secundario) gradualmente
        setTimeout(() => {
            setShowCrawl(true);
        }, 1000); // Espera 1 segundo antes de mostrar el segundo texto
    };

    return (
        <div className="textos">
             <button className="botón" onClick={animar}>Iniciar</button>
            <div className={`texto-1 intro ${showCrawl ? "hide" : ""}`} ref={introRef}>
                <p className="text-inicial">Hace unos meses, en una ciudad muy cercana...</p>
            </div>
            <div className={`texto-2 historia ${showCrawl ? "crawl-text" : ""}`} ref={historiaRef}>
                <p className="texto-secundario texto-largo">
                    Tras muchas partidas jugadas, se convirtieron en algo más que compañeros: Amigos.
                    Solo necesitaron un empujón para formar la Barna Batch. ¿Quienes son?¿Que han hecho?¿Que harán? Entra para descubrirlo
                </p>
            </div>
        </div>
    );
};

export default Intro;

