import GithubLogoImg from "../assets/github-logo.png";

export function AppHeader() {
  return (
    <header className="dark--bg">
      <div className="container d-flex align-center justify-center flex-column">
        <img 
          src={ GithubLogoImg } 
          alt="github-logo"
          height="75"
          width="75"
        ></img>
        <h1 className="light--text padding-large">GitHub Explorer</h1>
      </div>
    </header>
  )
}