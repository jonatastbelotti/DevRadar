import React from 'react';

import './global.css';
import './App.css';
import './SideBar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input type="text" name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="tecnologias">Tecnologias</label>
            <input type="text" name="tecnologias" id="tecnologias" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7853869?s=460&v=4" alt="Jonatas"/>
              <div className="user-info">
                <strong>Jonatas Trabuco Belotti</strong>
                <span>React, Java, Python</span>
              </div>
            </header>

            <p>Não tem nada na biografia, mas poderia ter.</p>

            <a href="http://https://github.com/jonatastbelotti">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7853869?s=460&v=4" alt="Jonatas"/>
              <div className="user-info">
                <strong>Jonatas Trabuco Belotti</strong>
                <span>React, Java, Python</span>
              </div>
            </header>

            <p>Não tem nada na biografia, mas poderia ter.</p>

            <a href="http://https://github.com/jonatastbelotti">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7853869?s=460&v=4" alt="Jonatas"/>
              <div className="user-info">
                <strong>Jonatas Trabuco Belotti</strong>
                <span>React, Java, Python</span>
              </div>
            </header>

            <p>Não tem nada na biografia, mas poderia ter.</p>

            <a href="http://https://github.com/jonatastbelotti">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7853869?s=460&v=4" alt="Jonatas"/>
              <div className="user-info">
                <strong>Jonatas Trabuco Belotti</strong>
                <span>React, Java, Python</span>
              </div>
            </header>

            <p>Não tem nada na biografia, mas poderia ter.</p>

            <a href="http://https://github.com/jonatastbelotti">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/7853869?s=460&v=4" alt="Jonatas"/>
              <div className="user-info">
                <strong>Jonatas Trabuco Belotti</strong>
                <span>React, Java, Python</span>
              </div>
            </header>

            <p>Não tem nada na biografia, mas poderia ter.</p>

            <a href="http://https://github.com/jonatastbelotti">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
