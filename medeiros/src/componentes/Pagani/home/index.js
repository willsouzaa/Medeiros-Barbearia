import React, { useEffect, useState, useRef } from 'react';
import "./home.css";
import 'swiper/css';
import 'swiper/css/autoplay';

import { motion, useAnimation } from 'framer-motion';

function Home() {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start({ opacity: 1, x: 0 });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [controls]);

    return (
        <section className="avaliacoes" ref={sectionRef}>
            <h2>O que dizem sobre a Barbearia Medeiros</h2>
            <div className="avaliacoes-grid">
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Melhor atendimento da região"</p>
                    <strong>— Marlon M.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Ambiente limpo, profissionais educados. Melhor barbearia da região!"</p>
                    <strong>— Rafael S.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Ótimo atendimento."</p>
                    <strong>— Paulo A.</strong>
                </div>
            </div>

            {/* Botão de Agendamento com Animação */}
            <div className="botao-agendamento-container">
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        transition={{ duration: 0.8 }}
                        className="mensagem-download"
                    >
                        📲 Baixe o app de agendamento
                    </motion.div>
                )}
                <a
                    href="https://sites.appbarber.com.br/barbershopmedei-r6kc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao-agendamento"
                >
                    Agendar Horário
                </a>
            </div>
        </section>
    );
}

export default Home;
