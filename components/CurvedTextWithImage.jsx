import React from 'react';
import CurvedText from 'react-curved-text';

const CurvedTextWithImage = ({ text, imagePath }) => {
  return (
    <div className="curved-text-container">
      <div className="curved-text">
        <CurvedText diameter={200} width={300} height={300}
          cx={150}
          cy={150}
          rx={120}
          ry={120}
          startOffset={50}
          reversed={false}
          text={text}
          textProps={{ style: { fontSize: 24 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={{ className: "rotating-curved-text" }}
        />
      </div>
      <div className="center-image w-48 h-48">
        <img className="w-full h-full rounded-full shadow-2xl" src={imagePath} alt="Curved Text" />
      </div>
    </div>
  );
};

export default CurvedTextWithImage;