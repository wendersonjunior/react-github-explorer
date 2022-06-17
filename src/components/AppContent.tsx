import { useEffect, useState } from "react";
import "../styles/inputs.css";

export function AppContent() {
  const [profileName, setProfileName] = useState('');
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profileName}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGithubData(data);
      })
  }, [profileName])
  

  return (
    <main>
      <section>
        <form className="d-flex justify-center margin-top-large-negative">
          <label htmlFor="profileName" hidden></label>
          <input 
            type="text"
            name="profileName" 
            placeholder="Digite o nome do usuário" 
            value={profileName}
            onChange={event => setProfileName(event.target.value)}
          />
        </form>
      </section>
      <section>
        <h1>Dados</h1>
        <div>

        </div>
      </section>
    </main>
  )
}