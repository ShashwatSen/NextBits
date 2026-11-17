
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <h1>
          Find your next <span className="highlight">bite.</span>
        </h1>
        <p className="subtitle">
          {recipes.length} recipes to browse, search, and cook. Pick one and get
          the full method.
        </p>
        <input
          type="text"
          className="search-input"
          placeholder="Search recipes or cuisines..."
          readOnly
        />
      </header>

      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}