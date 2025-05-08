import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => {
  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ fontSize: "0.9em", color: "#666" }}>Projekt</div>
      <h3 style={{ margin: "4px 0", color: "#333"}}>{title}</h3>
      <p style={{ fontSize: "0.95em", color: "#333" }}>{description}</p>
      <div style={{ marginTop: "8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 10px",
              backgroundColor: "#f1f1f1",
              borderRadius: "16px",
              fontSize: "0.8em",
              color: "#333",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
