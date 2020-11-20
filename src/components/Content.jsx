import React from 'react';

import logo from '../assets/logo.svg';
import Ecoleta from '../assets/ecoleta.png';
import EcoletaGif from '../assets/ecoleta-gif.gif';
import Backing from '../assets/backingclass.png';
import BackingGif from '../assets/backing-gif.gif';
import Foodgram from '../assets/foodgram.png';
import FoodgramGif from '../assets/foodgram-gif.gif';
import Proffy from '../assets/proffy.png';
import UFirewall from '../assets/ufirewall.png';

import ScrollScript from './scroll'

const Content = () => {
    return (
        <>
            <section id="intro">
                <img src={logo} alt="Logotipo" />

                <h1>Hi, my name is Josélio Samy</h1>
            </section>

            <div id="content-text">
                <div className="apresentation">
                    <div className="consideration">
                        <h1>Quem sou eu?</h1>
                        <h3>
                            Como já se deu por visto, meu nome é Josélio Samy, e eu tenho 20 anos. Sou um desenvolvedor
                            front-end junior que iniciou o aprendizado no mundo do desenvolvimento aos 19 anos de idade
                            e, hoje já conto com projetos front-end <a href="#">concluídos com êxito</a>, que estarão
                            disponíveis abaixo para visualização.
                        </h3>
                        <h3>
                            Após o término do ensino médio técnico, eu buscava novas coisas para aprender, coisas
                            realmente impolgantes, e como diz aquele velho ditado, "quem procura acha", e foi isso que
                            aconteceu, eu descobri esse universo do desenvolvimento web.
                        </h3>
                    </div>
                </div>
                <div className="projects">
                    <div className="grid-item">
                        <h2>Ecoleta</h2>
                        <h3>
                            {' '}
                            O <strong>Ecoleta</strong> é um marketplace de coleta de resíduos projetado para atender a
                            demanda de itens que precisam de reciclagem, de forma rápida, prática e segura.
                        </h3>
                        <div className="grid-img">
                            <img src={EcoletaGif} alt="" />
                        </div>
                    </div>
                    <div className="grid-item2 show-on-scroll">
                        <h2>Backing Class</h2>
                        <h3>
                            O <strong>Backing Class</strong> é uma espécie de rede social, ela é capaz de aramazenar
                            conteúdos educacionais específicos para determinadas áreas do conhecimento.
                        </h3>
                        <div className="grid-img">
                            <img src={BackingGif} alt="" />
                        </div>
                    </div>
                    <div className="grid-item show-on-scroll">
                        <h2>Foodgram</h2>
                        <h3>
                            O <strong>Foodgram</strong> é uma plataforma web que tenta simular o instagram em seus
                            aspectos gerais, tendo como seu objetivo principal a publicação de fotos dos mais variados
                            alimentos e pratos.
                        </h3>
                        <div className="grid-img">
                            <img src={FoodgramGif} alt="" />
                        </div>
                    </div>
                    <div className="grid-item2 show-on-scroll">
                        <h2>Proffy</h2>
                        <h3>
                            O <strong>Proffy</strong> é um site que age como intermeio entre professor/aluno e
                            vice-versa. Seu objetivo é fazer com que os professores possam disponibilizar seus serviços
                            para os alunos que tiverem interesse em contratá-los.
                        </h3>
                        <div className="grid-img">
                            <img src={Proffy} alt="" />
                        </div>
                    </div>
                    <div className="grid-item show-on-scroll">
                        <h2>UFirewall</h2>
                        <h3>
                            O <strong>UFirewall</strong> é uma espécie de rede social, ela é capaz de aramazenar
                            conteúdos educacionais específicos para determinadas áreas do conhecimento.
                        </h3>
                        <div className="grid-img">
                            <img src={UFirewall} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
