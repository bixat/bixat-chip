import { BixatChip, tags } from "bixat-chip";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeStyles = {
    light: {
      backgroundColor: "#f5f5f5",
      textColor: "#000000",
    },
    dark: {
      backgroundColor: "#1a1a1a",
      textColor: "#ffffff",
    },
  };

  const currentTheme = isDarkMode ? themeStyles.dark : themeStyles.light;

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
        minHeight: "100vh",
        transition: "all 0.3s ease",
        alignItems: "center", // Center horizontally
      }}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          backgroundColor: isDarkMode ? "#ffffff" : "#000000",
          color: isDarkMode ? "#000000" : "#ffffff",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 style={{ textAlign: "center" }}>Technology Stack Example</h1>

      {/* Main content container */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Frontend Technologies */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Frontend Technologies
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.react} withTitle={true} />
            <BixatChip tag={tags.flutter} withTitle={true} />
            <BixatChip tag={tags.angular} withTitle={true} />
            <BixatChip tag={tags.tailwind} withTitle={true} />
            <BixatChip tag={tags.html} withTitle={true} />
            <BixatChip tag={tags.css} withTitle={true} />
          </div>
        </section>

        {/* Backend Technologies */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Backend Technologies
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.nodejs} withTitle={true} />
            <BixatChip tag={tags.django} withTitle={true} />
            <BixatChip tag={tags.firebase} withTitle={true} />
            <BixatChip tag={tags.fastapi} withTitle={true} />
            <BixatChip tag={tags.laravel} withTitle={true} />
          </div>
        </section>

        {/* Design Tools */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Design Tools
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.figma} withTitle={false} />
            <BixatChip tag={tags.adobeXD} withTitle={false} />
            <BixatChip tag={tags.adobeIllustrator} withTitle={false} />
            <BixatChip tag={tags.adobePhotoshop} withTitle={false} />
          </div>
        </section>

        {/* Development Categories */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Development Categories
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.webDev} withTitle={true} />
            <BixatChip tag={tags.mobileDev} withTitle={true} />
            <BixatChip tag={tags.desktopDev} withTitle={true} />
            <BixatChip tag={tags.backendDev} withTitle={true} />
            <BixatChip tag={tags.uiuxDesign} withTitle={true} />
          </div>
        </section>

        {/* Platforms */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Supported Platforms
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.android} withTitle={true} />
            <BixatChip tag={tags.ios} withTitle={true} />
            <BixatChip tag={tags.windows} withTitle={true} />
            <BixatChip tag={tags.linux} withTitle={true} />
            <BixatChip tag={tags.macos} withTitle={true} />
          </div>
        </section>

        {/* Development Tools */}
        <section>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Development Tools
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <BixatChip tag={tags.github} withTitle={true} />
            <BixatChip tag={tags.clickup} withTitle={true} />
            <BixatChip tag={tags.CiCd} withTitle={true} />
            <BixatChip tag={tags.projectManagement} withTitle={true} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
