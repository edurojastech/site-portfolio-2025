/* eslint-disable react/jsx-key */
import { RootLayout } from "../../layouts/root";
import { projetos } from "../../data/projetos";
import { Link } from "react-router-dom";

export default function Projetos() {
  return (
    <RootLayout>
      <div className="pb-5">
        <header className="bg-green-water text-center py-5 mb-4">
          <div className="container">
            <h1 className="text-white">Projetos</h1>
          </div>
        </header>

        <div className="container">
          <div className="row">
            {projetos.sort(() => Math.random() - 0.5).map((projeto) => {
              return (
                <Link
                  className="col-xl-4 col-md-6 mb-4 txt-none-decoration"
                  target="_blannk"
                  to={projeto.url}
                >
                  <div className="card border-0 shadow">
                    {
                      projeto.video ? (
                        <video
                          src={projeto.gif}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="card-img-top"
                        />
                      ) : (
                        <img src={projeto.gif} alt="" />
                      )
                    }
                    <div className="card-body text-center">
                      <h5 className="card-title mb-0">{projeto.nome}</h5>
                      <div className="card-text text-black-50">
                        {projeto.descricao}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
