import { useState } from "react";
import "../styles/certificates.css";
import DevOpsCertificate from "../assets/DevOps_Certificate.jpg";

type Certificates = "DevOps";

type ImageUrl = {
  imgUrl: string;
};

const CertificateImages: Record<Certificates, ImageUrl> = {
  DevOps: { imgUrl: DevOpsCertificate },
};

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificates | null>(null);

  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className="card">
        <ul className="Detail">
          <li 
            onMouseEnter={() => setSelectedCertificate("DevOps")} 
            className={selectedCertificate === "DevOps" ? "active" : ""}
          >
            DevOps School (Deutsche Telekom)
          </li>
        </ul>

        <div className="Image">
          {selectedCertificate && (
            <img
              src={CertificateImages[selectedCertificate].imgUrl}
              alt={selectedCertificate}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
