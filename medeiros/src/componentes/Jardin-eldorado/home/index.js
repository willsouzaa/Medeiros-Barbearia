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
            <div className="section-shell">
                <div className="avaliacoes-header">
                    <span className="section-badge">Unidade Jardim Eldorado</span>
                    <h2 className="section-heading">Tradição em cortes que impressionam</h2>
                    <p className="section-subtitle">Uma experiência premium com atendimento que valoriza cada detalhe do seu visual.</p>
                </div>

                <div className="avaliacoes-grid">
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Lugar bem especial realmente. Desde o atendimento a qualidade de serviço nota 10.
Não troco de jeito nenhum"</p>
                    <strong>— Adriano M.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Eu super recomendo o trabalho desses profissionais,região do Eldorado trabalho profissional atendimento de qualidade.
Ambiente super sofisticado e elegante super aconchegante."</p>
                    <strong>— Simone P.</strong>
                </div>
                <div className="avaliacao">
                    <span className="estrela">★★★★★</span>
                    <p>"Atendimento excelente, organização o ambiente tudo mt bom,o trabalho é mt top recomendo demais!!!"</p>
                    <strong>— Tiago P.</strong>
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
                        href="https://sites.appbarber.com.br/barbershopmedeiros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao-agendamento"
                    >
                        Agendar Horário
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
