import { RootLayout } from "../../layouts/root";

export default function Projetos() {
  return (
    <RootLayout>
      <div>
        <header className="bg-green-water text-center py-5 mb-4">
          <div className="container">
            <h1 className="text-white">Projetos Realizados</h1>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://placehold.co/600x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Projeto: XYZ</h5>
                  <div className="card-text text-black-50">Cliente ABC</div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://placehold.co/600x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Projeto: XYZ</h5>
                  <div className="card-text text-black-50">Cliente ABC</div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://placehold.co/600x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Projeto: XYZ</h5>
                  <div className="card-text text-black-50">Cliente ABC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
