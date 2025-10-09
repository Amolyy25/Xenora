import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./essentials.css";

const supabase = createClient(
  "https://xoqpszrmiukvfybwdbth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcXBzenJtaXVrdmZ5YndkYnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NjI4OTIsImV4cCI6MjA3NTQzODg5Mn0.kbIQv13atONdc9nxrraYA4K-6oc9IUrUUtzcCkbraro"
);

function Demoback() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    async function checkData() {
      const { data } = await supabase.auth.getSession();
      setUserData(data);
    }
    checkData();
  }, []);

  async function signUp(e: any) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      alert("Erreur lors de l'inscription: " + error.message);
    } else {
      setUserData(data);
    }
  }

  return userData?.session != null ? (
    <>
      <section className="demo-section success-section">
        <div className="demo-container">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <div className="success-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="success-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>

            <h2 className="success-title">Inscription réussie ! 🎉</h2>
            <p className="success-subtitle">Bienvenue sur notre plateforme</p>

            <div className="success-info">
              <div className="info-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{userData.session?.user?.email}</span>
              </div>
            </div>

            <div className="success-message">
              <p>✨ Votre compte a été créé avec succès</p>
              <p>
                🔒 Vos données sont stockées en toute sécurité dans notre base
                de données Supabase
              </p>
              <p>
                🚀 Vous pouvez maintenant profiter de toutes nos fonctionnalités
              </p>
            </div>

            <button
              onClick={() => {
                supabase.auth.signOut();
                setUserData(null);
              }}
              className="success-button"
            >
              <span className="success-button-content">
                Se déconnecter
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  ) : (
    <>
      <section className="demo-section">
        <div className="demo-container">
          {/* En-tête de la section */}
          <div className="demo-header">
            <h2 className="demo-title">
              Créez votre compte en quelques secondes
            </h2>
            <p className="demo-subtitle">Simple, rapide et sécurisé</p>
          </div>

          <div className="demo-content">
            {/* Partie formulaire */}
            <div className="demo-form-container">
              <div className="demo-form-card">
                <div className="demo-form-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 11L19 13L23 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="demo-form-title">Inscription</h3>
                <form
                  className="demo-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="demo-input-group">
                    <label className="demo-label">Email</label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="demo-input"
                      value={email}
                      required
                    />
                  </div>
                  <div className="demo-input-group">
                    <label className="demo-label">Mot de passe</label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="••••••••"
                      className="demo-input"
                      value={password}
                      required
                    />
                  </div>
                  <button
                    onClick={signUp}
                    className="demo-button"
                    type="button"
                  >
                    <span className="demo-button-shine"></span>
                    <span className="demo-button-content">
                      Créer un compte
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Partie code */}
            <div className="demo-code-container">
              <div className="demo-code-card">
                <div className="demo-code-header">
                  <div className="demo-code-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="demo-code-title">signup.tsx</span>
                </div>
                <div className="demo-code-content">
                  <pre className="demo-code-block">
                    <span className="code-line">
                      <span className="code-comment">
                        // Inscription avec Supabase
                      </span>
                    </span>
                    <span className="code-line">
                      <span className="code-keyword">async function</span>{" "}
                      <span className="code-function">signUp</span>() {"{"}
                    </span>
                    <span className="code-line">
                      {" "}
                      <span className="code-keyword">const</span> {"{"} data,
                      error {"}"} ={" "}
                    </span>
                    <span className="code-line">
                      {" "}
                      <span className="code-keyword">await</span> supabase.auth.
                      <span className="code-function">signUp</span>({"{"}
                    </span>
                    <span className="code-line"> email: email,</span>
                    <span className="code-line"> password: password</span>
                    <span className="code-line"> {"})"}</span>
                    <span className="code-line"> </span>
                    <span className="code-line">
                      {" "}
                      <span className="code-keyword">if</span> (error) {"{"}
                    </span>
                    <span className="code-line">
                      {" "}
                      <span className="code-function">alert</span>(
                      <span className="code-string">"Erreur"</span>)
                    </span>
                    <span className="code-line">
                      {" "}
                      {"}"} <span className="code-keyword">else</span> {"{"}
                    </span>
                    <span className="code-line">
                      {" "}
                      <span className="code-function">setUserData</span>(data)
                    </span>
                    <span className="code-line"> {"}"}</span>
                    <span className="code-line">{"}"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Demoback;
