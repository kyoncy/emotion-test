import "./styles.css";
import styled from "@emotion/styled";

const ignoreSsrWarning =
  "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";

const Container = styled.div(() => ({
  display: "inline-block",
  verticalAlign: "inherit",
  "& > *": {
    marginLeft: 0,
    verticalAlign: "inherit"
  },
  [`& > *:first-child${ignoreSsrWarning}`]: {
    marginLeft: 0
  }
}));

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Container />
    </div>
  );
}
