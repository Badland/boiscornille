import React, { useState, useEffect } from "react";
import { css } from "emotion";

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer secret_9vpo9DFywqZUO0dxrNpuf9k3zAiMOQm11PqN5ZYlPN0"
      );
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Notion-Version", "2022-06-28");

      const raw = JSON.stringify({
        filter: {
          property: "flag",
          multi_select: {
            contains: "bloc accueil",
          },
        },
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.notion.com/v1/databases/0200c210-9c7e-4af5-ab37-3da0f0aac185/query",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div className={about}>
      <div className={imageContainer}>
        <img
          className={image}
          src="https://static.wixstatic.com/media/166497_318c48eb0ce742c5a1ad7abef0a0310d~mv2.jpg/v1/fill/w_980,h_822,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/166497_318c48eb0ce742c5a1ad7abef0a0310d~mv2.jpg"
          alt="Vue de la façade du château à voir du côté de vitré"
        />
        <div className={overlay} />
        <div className={text}>
          <h1>Au Bois Cornillé, la promenade est un art de vivre…</h1>
          <p>
            Au Bois Cornillé, la promenade est un art de vivre… Création des
            architectes et des paysagistes le château et son parc ne cessent de
            jouer avec l'histoire et ses souvenirs. Entre les bosquets
            jaillissent les flèches de la demeure néogothique ; elles veillent
            sur le domaine : parterres, futaies, perspectives sur le bocage et
            sur le patrimoine rural.
          </p>
          <p>
            On s’y promène, comme à la Belle époque, sous les ombrages. Par
            l’allée de mousse, le visiteur gagne l’étang muré et les allées
            cavalières qui plongent au cœur du bois. Au retour, il empruntera
            l’allée de ceinture qui mène aux charmants jardinets fleuris des
            pavillons d’octroi et à leurs chemins creux.
          </p>
          <p>
            Pour l'heure, au bord de l’étang muré, sur les marches de
            l’embarcadère, il se prend à rêver d’ombrelles et de canotiers, de
            promenades en barque ou en calèche… Tout y est équilibre et poésie.
            Une invitation à aimer la vie. Tout simplement.
          </p>
        </div>
      </div>
      <div className={imageContainer}>
        <img
          className={image}
          src="https://static.wixstatic.com/media/166497_33cd0d29195c47c88489b613cbbb7008~mv2.jpg/v1/fill/w_1305,h_956,al_c,q_85,enc_auto/166497_33cd0d29195c47c88489b613cbbb7008~mv2.jpg"
          alt="Image 2"
        />
        <div className={overlay} />
        <div className={text}>
          <h1>L’œuvre d’architectes et paysagistes réputés.</h1>
          <p>
            Si l’histoire des lieux remonte aux 13e et 15e siècles, c’est à la
            fin du 19e siècle que le domaine prend son caractère actuel.
          </p>
          <p>
            En 1883 les frères Jules et Henri Mellet remanient le château dans
            le style néogothique.
          </p>

          <p>
            En 1872, Denis Bühler, créateur du Parc Oberthür et du Parc du
            Thabor à Rennes, dessine au Bois Cornillé un « parc agricole ».
            L'organisation des bosquets encadre les vues, dirige le regard et
            valorise le caractère pittoresque du terroir : clochers du village,
            fermes anciennes, chênes remarquables. Les troupeaux, passages de
            gibier et travaux des champs animent le paysage.
          </p>
          <p>
            En 1900, le paysagiste Edouard André conjugue la grande tradition du
            jardin à la Française et l’inspiration anglaise du parc paysager
            pour donner corps à sa devise : l’unité de l’ensemble et la variété
            dans les détails. Au Bois Cornillé, c’est la lisière du bois qui
            fait l’unité visuelle du parc. Edouard André y installe ses
            parterres et magnifie les vues sur les pâtures et les tours du
            château. Puis il dessine au cœur du bois plusieurs scènes
            décoratives qui rythment la promenade et créent un effet de surprise
            sans rompre l’harmonie.
          </p>
        </div>
      </div>
      <div className={imageContainer}>
        <img
          className={image}
          src="https://static.wixstatic.com/media/166497_71c98186229f40dbb1d010a2fdb949ca~mv2.jpg/v1/fill/w_996,h_798,al_c,q_85,enc_auto/166497_71c98186229f40dbb1d010a2fdb949ca~mv2.jpg"
          alt="Image 3"
        />
        <div className={overlay} />
        <div className={text}>
          <h1>Un intérêt historique et esthétique reconnu.</h1>

          <p>
            Ce travail sur la lisière, point de jonction entre la sauvagerie du
            bois, la civilisation rurale et l’élégance du jardin régulier, fait
            de ce domaine un ensemble attachant et caractéristique de l’art des
            jardins au 19 e siècle. Particulièrement bien conservé, le Bois
            Cornillé est un aboutissement des traditions paysagères française et
            anglaise ; il est source d’inspiration pour aménager notre paysage
            rural.{" "}
          </p>
          <p>
            Parc et château sont inscrits à l’Inventaire Supplémentaire des
            Monuments Historiques.{" "}
          </p>
          <p>
            Depuis 2014, le parc est labellisé « Jardin Remarquable » par la
            DRAC.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

const about = css`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const imageContainer = css`

  position: relative;
`;

const image = css`
  width: 100%;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const text = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  text-align: center;

  p {
    margin-bottom: 1em;
  }

  h1 {
    margin-bottom: 1em;
    font-size: 43 px;
  }
`;

export default Home;
