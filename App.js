// src/App.jsx
import "./App.css";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <main className="wrap">
      <h1>React Profile Cards</h1>

      <div className="grid">
        <ProfileCard
          name="Nina Aliyu"
          role="Intern Student"
          bio="Learning fast, asking smart questions, and leveling up daily."
          image="https://i.pravatar.cc/200?img=5"
        />
        <ProfileCard
          name="Alex Kim"
          role="Frontend Developer"
          bio="Builds shiny UIs and breaks them (then fixes them)."
          image="https://i.pravatar.cc/200?img=15"
        />
        <ProfileCard
          name="Sara Lee"
          role="Data Analyst"
          bio="Turns numbers into stories and charts into smiles."
          image="https://i.pravatar.cc/200?img=25"
        />
      </div>
    </main>
  );
}

