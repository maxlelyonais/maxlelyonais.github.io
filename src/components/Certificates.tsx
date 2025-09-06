import { useState } from "react";
import "../styles/certificates.css";
import DevOpsCertificate from "../assets/DevOps_Certificate.jpg";

type CertificatesKey = "DevOps (Deutsche Telekom)";

type ImageUrl = {
  imgUrl: string;
};

const CertificateImages: Record<CertificatesKey, ImageUrl> = {
  "DevOps (Deutsche Telekom)": { imgUrl: DevOpsCertificate },
};

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificatesKey | null>(null);
  const [enable, setEnable] = useState(false);
  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className="card">
        <ul className="Detail">

          {Object.keys(CertificateImages).map((key) => {
            
            const certificateKey = key as CertificatesKey; 

            return (
            <li
              key={certificateKey}

              onMouseOver={(e) => {
                (e.target as HTMLElement).style.cursor = "pointer";
              }}

              onMouseDown={() => {
                  if (certificateKey === selectedCertificate) {
                    setEnable(!enable);
                  } else {
                    setSelectedCertificate(certificateKey);
                    setEnable(true)
                  }
              }}

              className={ (selectedCertificate === certificateKey && enable) ? "active" : ""}
            >
              {certificateKey}
            </li>
            )
          })}

        </ul>

        <div className="Image">
          {enable && selectedCertificate && (
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
