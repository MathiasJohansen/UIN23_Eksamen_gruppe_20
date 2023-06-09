import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>
          <a href="/">MACs Gamehub</a>
        </h1>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>
          Used RAWG as a source for data and API: <a href="https://rawg.io/">https://rawg.io/</a>
        </p>
      </footer>
    </>
  );
}
