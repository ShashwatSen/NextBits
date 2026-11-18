
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";
export const instant = false

export default async function RecipePage({ params }: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link href="/" className="back-link">
        ← All recipes
      </Link>

      <header className="recipe-hero" style={{ background: recipe.gradient }}>
        <span className="emoji" role="img" aria-label={recipe.title}>
          {recipe.emoji}
        </span>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <div className="meta">
          <span>⏱ {recipe.minutes} min</span>
          <span>{recipe.difficulty}</span>
          <span>{recipe.cuisine}</span>
        </div>
      </header>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Method</h2>
        <ol>
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}