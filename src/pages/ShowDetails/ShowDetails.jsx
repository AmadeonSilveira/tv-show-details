import React, { useEffect, useState } from "react";
import { getShowDetails, getShowEpisodes } from "../../services/api";
import Loading from "../../components/Loading/Loading";
import TabsHeader from "../../components/TabsHeader/TabsHeader";
import { FaFaceFrown, FaCirclePlus, FaRecordVinyl, FaSquareShareNodes, FaCirclePlay } from "react-icons/fa6";
import producer from '../../assets/telecine-logo.png';
import "./ShowDetails.scss";

export default function ShowDetails() {
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [expandedEpisode, setExpandedEpisode] = useState(null);
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const showData = await getShowDetails('SHOW123');
        const episodesData = await getShowEpisodes('SHOW123');

        setShow(showData);
        setEpisodes(episodesData.filter(Boolean));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !show) return <Loading />;

  const tabs = [
    { key: 'general', title: 'GERAL' },
    { key: 'cast', title: 'ELENCO' },
    { key: 'awards', title: 'PRINCIPAIS PRÊMIOS' }
  ];

  const seasons = [...new Set(episodes.map((ep) => ep.SeasonNumber))].map((season) => ({ key: season, title: `T${season}` }));
  const filteredEpisodes = episodes.filter((ep) => ep.SeasonNumber === selectedSeason);

  return (
    <div className="show-details">
      <div className="show-details__content" style={{backgroundImage: `url(${show?.Images?.Background})`}}>
        <header className="show-details__header">
          <h1>{show.Title}</h1>
          <p className="show-details__meta">
            {show.Year} / {show.Genres.map((g) => g.Title).join(" ")} / {" "}
            {episodes.length} episódios
          </p>
        </header>

        <div className="show-details__seasons">
          <TabsHeader 
            tabs={seasons}
            activeTab={selectedSeason}
            onClick={(season) => setSelectedSeason(season)}
          />

          <div className="season-episodes">
            {filteredEpisodes.map((ep) => (
              <div key={ep.ID} className="episode">
                <button 
                  className="episode__header"
                  onClick={() => setExpandedEpisode((prev) => (prev === ep.ID ? null : ep.ID))}
                >
                  <div className="episode__title">
                    <h2>{ep?.EpisodeNumber} {ep?.Title}</h2>
                  </div>

                  <FaCirclePlay />
                </button>
                <div className={`episode__infos ${expandedEpisode === ep.ID ? 'active' : ''}`}>
                  <div className="episode__image">
                    <img src={ep.Image} alt={ep.Title} loading="lazy"/>
                    <FaCirclePlay />
                  </div>
                  <p>{ep.Synopsis || "Sem sinopse disponível."}</p>
                  <span>{ep?.Duration}m</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="show-details__infos">
        <TabsHeader 
          tabs={tabs}
          activeTab={activeTab}
          onClick={(tab) => setActiveTab(tab)}
        />

        <div className="show-details__infos-content">
          {activeTab == 'general' && (
            <div className="show-details__infos-item infos-general">
              <div className="actions">
                <button>
                  <FaCirclePlus />
                  <p>Minha Lista</p>
                </button>
                <button>
                  <FaFaceFrown />
                  <p>Avaliar</p>
                </button>
                <button>
                  <FaRecordVinyl />
                  <p>Gravar</p>                  
                </button>
                <button>
                  <FaSquareShareNodes />
                  <p>Compartilhar</p>                  
                </button>
              </div>
              <div className="synopsis">
                <h2>SINOPSE</h2>
                <p>{show?.Synopsis}</p>
              </div>
            </div>
          )}

          {activeTab == 'cast' && (
            <div className="show-details__infos-item infos-cast">
              {show?.Cast.map((person) => (
                <div className="cast-item" key={person.ID}>
                  <p>{person.Name}</p>
                  <span>Personagem/Função</span>
                </div>
              ))}
            </div>
          )}

          {activeTab == 'awards' && (
            <div className="show-details__infos-item infos-awards">
              <p>Informações de prêmios não disponíveis</p>
            </div>
          )}
        </div>

        <div className="show-details__infos-producer">
          <img src={producer} alt="Logo/marca da produtora da série" />
        </div>
      </div>
    </div>
  );
}
