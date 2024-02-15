import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackTests,
  SandpackLayout,
} from "@codesandbox/sandpack-react";

export default function Sandpack({ files }) {
  return (
    <SandpackProvider
      files={files}
      autorun={false}
      autoReload={false}
      showConsole={true}
      showConsoleButton={true}
      customSetup={{
        entry: "/app.js",
        main: "/app.test.js",
        environment: "parcel",
        mode: "tests",
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor
          showLineNumbers
          showTabs={false}
          initMode="lazy"
          wrapContent={true}
          style={{
            height: "720px",
            maxHeight: "90%",
          }}
        />
        <SandpackTests
          style={{
            height: "720px",
            maxHeight: "90%",
          }}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}