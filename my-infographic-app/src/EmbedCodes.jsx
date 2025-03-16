import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./EmbedCodes.css"; // Import CSS file

const EmbedCodes = () => {
  const embedRef = useRef(null);

  const takeScreenshot = () => {
    if (embedRef.current) {
      html2canvas(embedRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "embed-codes-screenshot.png";
        link.click();
      });
    }
  };

  return (
    <div className="embed-container" ref={embedRef}>
      <h2>📌 Embed codes</h2>

      {/* Direct Link Section */}
      <div className="embed-section">
        <h3>Direct links</h3>
        <div className="embed-box">
          <strong>Image link</strong>
          <input
            type="text"
            value="https://ibb.co/PG4h2nzs"
            readOnly
            onClick={(e) => e.target.select()}
          />
        </div>
      </div>

      {/* Full Image (Linked) Section */}
      <div className="embed-section">
        <h3>Full image (linked)</h3>
        <div className="embed-box">
          <strong>HTML</strong>
          <textarea
            readOnly
            onClick={(e) => e.target.select()}
            value={`<a href="https://ibb.co/PG4h2nzs"><img src="https://i.ibb.co/0yZM0/image.png" /></a>`}
          />
        </div>
        <div className="embed-box">
          <strong>BBCode</strong>
          <textarea
            readOnly
            onClick={(e) => e.target.select()}
            value={`[url=https://ibb.co/PG4h2nzs][img]https://i.ibb.co/0yZM0/image.png[/img][/url]`}
          />
        </div>
      </div>

      {/* Thumbnail Image (Linked) Section */}
      <div className="embed-section">
        <h3>Thumbnail image (linked)</h3>
        <div className="embed-box">
          <strong>HTML</strong>
          <textarea
            readOnly
            onClick={(e) => e.target.select()}
            value={`<a href="https://ibb.co/PG4h2nzs"><img src="https://i.ibb.co/PG4h2nzs/image-thumb.png" /></a>`}
          />
        </div>
        <div className="embed-box">
          <strong>BBCode</strong>
          <textarea
            readOnly
            onClick={(e) => e.target.select()}
            value={`[url=https://ibb.co/PG4h2nzs][img]https://i.ibb.co/PG4h2nzs/image-thumb.png[/img][/url]`}
          />
        </div>
      </div>

      {/* Screenshot Button */}
      <button className="screenshot-btn" onClick={takeScreenshot}>Take Screenshot</button>
    </div>
  );
};

export default EmbedCodes;
