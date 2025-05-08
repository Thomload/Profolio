import React from "react";

type LanguageProgressProps = {
  language: string;
  percentage: number; // prozent wert wie gut
  description: string; // wie gut als Beschreibung
};

const LanguageProgress: React.FC<LanguageProgressProps> = ({
  language,
  percentage,
  description,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", maxWidth: "100%" }}>
      <div style={{ minWidth: "80px", fontWeight: 500 }}>{language}</div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#e0e0e0",
          height: "8px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "#212121",
            borderRadius: "4px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      <div style={{ textAlign: "right", minWidth: "80px" }}>
        <div style={{ fontWeight: 600 }}>{percentage}%</div>
        <div style={{ fontSize: "0.9em", color: "#666" }}>{description}</div>
      </div>
    </div>
  );
};

export default LanguageProgress;
