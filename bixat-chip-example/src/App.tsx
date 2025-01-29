import { BixatChip, BixatTags } from "bixat-chip";
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
            <BixatChip tag={BixatTags.react} withTitle={true} />
            <BixatChip tag={BixatTags.flutter} withTitle={true} />
            <BixatChip tag={BixatTags.angular} withTitle={true} />
            <BixatChip tag={BixatTags.tailwind} withTitle={true} />
            <BixatChip tag={BixatTags.html} withTitle={true} />
            <BixatChip tag={BixatTags.css} withTitle={true} />
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
            <BixatChip tag={BixatTags.nodejs} withTitle={true} />
            <BixatChip tag={BixatTags.django} withTitle={true} />
            <BixatChip tag={BixatTags.firebase} withTitle={true} />
            <BixatChip tag={BixatTags.fastapi} withTitle={true} />
            <BixatChip tag={BixatTags.laravel} withTitle={true} />
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
            <BixatChip tag={BixatTags.figma} withTitle={false} />
            <BixatChip tag={BixatTags.adobeXD} withTitle={false} />
            <BixatChip tag={BixatTags.adobeIllustrator} withTitle={false} />
            <BixatChip tag={BixatTags.adobePhotoshop} withTitle={false} />
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
            <BixatChip tag={BixatTags.webDev} withTitle={true} />
            <BixatChip tag={BixatTags.mobileDev} withTitle={true} />
            <BixatChip tag={BixatTags.desktopDev} withTitle={true} />
            <BixatChip tag={BixatTags.backendDev} withTitle={true} />
            <BixatChip tag={BixatTags.uiuxDesign} withTitle={true} />
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
            <BixatChip tag={BixatTags.android} withTitle={true} />
            <BixatChip tag={BixatTags.ios} withTitle={true} />
            <BixatChip tag={BixatTags.windows} withTitle={true} />
            <BixatChip tag={BixatTags.linux} withTitle={true} />
            <BixatChip tag={BixatTags.macos} withTitle={true} />
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
            <BixatChip tag={BixatTags.github} withTitle={true} />
            <BixatChip tag={BixatTags.clickup} withTitle={true} />
            <BixatChip tag={BixatTags.CiCd} withTitle={true} />
            <BixatChip tag={BixatTags.projectManagement} withTitle={true} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
