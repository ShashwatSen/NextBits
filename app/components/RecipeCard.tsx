import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div className="card-banner" style={{ background: recipe.gradient }}>
        <span className="emoji" role="img" aria-label={recipe.title}>
          {recipe.emoji}
        </span>
      </div>
      <div className="card-body">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="meta">
          <span>⏱ {recipe.minutes} min</span>
          <span>{recipe.difficulty}</span>
          <span>{recipe.cuisine}</span>
        </div>
      </div>
    </Link>
  );
}