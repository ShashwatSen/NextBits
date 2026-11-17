import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <div className="card-art" style={{ background: recipe.gradient }}>
        {recipe.emoji}
      </div>
      <div className="card-body">
        <h3>{recipe.title}</h3>
        <p className="card-desc">{recipe.description}</p>
        <div className="card-meta">
          <span className="pill">⏱ {recipe.minutes} min</span>
          <span className="pill">{recipe.difficulty}</span>
          <span className="pill pill-cuisine">{recipe.cuisine}</span>
        </div>
      </div>
    </div>
  );
}