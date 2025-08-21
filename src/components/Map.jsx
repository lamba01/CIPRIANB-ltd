import React from "react";

function Map() {
  return (
    <div className="relative overflow-hidden w-screen h-[60vh]">
      <iframe
        title="Company Location"
        src="https://www.google.com/maps?q=Flat+6+Braithwaite+Court,+47+Colnhurst+Road,+Watford,+England,+WD17+4BZ&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
