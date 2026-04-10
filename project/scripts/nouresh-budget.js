document.getElementById("currentyear").textContent= new Date().getFullYear();
document.getElementById("lastModified").textContent= document.lastModified;

const hamButton= document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


const recipes ={
  breakfast: [
    {
      title: "Greek Yogurt with Frozen Berries",
      image: "images/yogurt-fruit.webp",
      ingredients: [
        "1 cup Greek yogurt",
        "½ cup frozen berries",
        "1–2 tsp honey (optional)",
        "Optional: chia seeds or granola."
      ],
      instructions:
        "Add the Greek yogurt to a bowl. Top with frozen berries. Drizzle honey on top if you like it sweet. Sprinkle chia seeds or granola if desired."
    },

    {
      title: "Cottage Cheese & Fruit Bowl",
      image: "images/cottage-cheese-fruits.webp",
      ingredients: [
        "1 cup cottage cheese",
        "½ cup fresh or frozen berries (strawberries, blueberries, raspberries)",
        "½ chopped mango",
        "1 kiwi, sliced",
        "1 tsp honey or maple syrup (optional)",
        "Optional: a sprinkle of nuts or seeds (e.g., almonds or chia seeds)"
      ],
      instructions:
        "Scoop the cottage cheese into a bowl. Top with the fruits .Drizzle with honey or maple syrup if desired. Sprinkle nuts or seeds for extra crunch. Serve immediately and enjoy!"
    },
    
    {
      title: "Homemade Muesli",
      image: "images/homemade-muesli.webp",
      ingredients: [
        "2 cups rolled oats",
        "½ cup chopped nuts (almonds, walnuts, or hazelnuts)",
        "½ cup dried fruit (raisins, cranberries, or chopped apricots)",
        "2 tbsp seeds (sunflower, pumpkin, or chia seeds)",
        "Optional: 1 tsp cinnamon or a drizzle of honey and berries"
      ],
      instructions:
        "In a large bowl, mix oats, nuts, seeds, and dried fruit. Add cinnamon or honey if desired and stir well. Serve with milk, yogurt, or your favorite plant-based milk. Store leftovers in an airtight container for up to 2 weeks. You can also toast the oats and nuts lightly in a pan or oven for extra flavor."
    },
    
    {
      title: "Sweet Potato Hash",
      image: "images/sweet-potato-egg.webp",
      ingredients: [
        "2 medium sweet potatoes, peeled and diced",
        "1 small onion, chopped",
        "1 bell pepper, chopped",
        "1–2 tbsp olive oil",
        "Salt and pepper to taste",
        "Optional: garlic, paprika, or fresh herbs",
        "1–2 eggs"
      ],
      instructions:
        "Heat olive oil in a skillet. Add onions and bell peppers; sauté for 2–3 minutes. Add sweet potatoes, salt, and pepper. Cook, for 10–12 minutes until tender and slightly crispy. Push the hash to the side of the skillet and crack the eggs into the empty space. Fry until the whites are set and yolks reach your preferred doneness. Season eggs with a pinch of salt and pepper. Optional: sprinkle fresh herbs or paprika."
    },
    
    {
      title: "Breakfast Quesadilla",
      image: "images/breakfast-quesadilla.webp",
      ingredients: [
        "2 flour tortillas",
        "2 eggs, scrambled",
        "¼ cup shredded cheese (cheddar, mozzarella, or your choice)",
        "Optional: diced bell peppers, onions, or cooked bacon/sausage"
      ],
      instructions:
        "Scramble the eggs in a skillet. Place one tortilla in a clean skillet over medium heat. Spread scrambled eggs and cheese (and optional veggies or meat) on the tortilla. Top with the second tortilla and cook 2–3 minutes per side until golden and cheese melts. Cut into wedges and serve warm."
    },
    
    {
      title: "Banana Breakfast Smoothie",
      image: "images/banana-smoothie.webp",
      ingredients: [
        "1 ripe banana",
        "1 cup milk (or water for extra cheap)",
        "2 tbsp oats",
        "1 tsp peanut butter",
        "Optional: pinch of cinnamon"
      ],
      instructions:
        "Peel the banana and put all the rest of the ingredients in a blender. Add milk, yogurt, and honey if using. Blend until smooth. Add ice cubes and blend again if you want it colder. Pour into a glass and enjoy immediately."
    },

    {
      title: "Green Smoothie with Ginger and Pineapple",
      image: "images/green-smoothie.webp",
      ingredients: [
        "1 cup fresh spinach or kale",
        "1 cup pineapple chunks (fresh or frozen)",
        "1 small piece of fresh ginger (about ½ inch), peeled",
        "1 cup water or coconut water",
        "Optional: ½ banana for creaminess"
      ],
      instructions:
        "Put all ingredients in a blender. Blend until smooth and creamy. Pour into a glass and enjoy immediately."
    },

  ],

  lunch: [
    {
      title: "Mediterranean Pasta Salad",
      image: "images/mediterranean-pasta-salad.webp",
      ingredients: [
        "1 box (16oz) whole wheat rotini or penne pasta",
        "1 can (15oz) white beans (cannellini or chickpeas), drained and rinsed",
        "1 cucumber, diced",
        "1 cup cherry tomatoes, halved (or 2 large tomatoes, chopped)",
        "Dressing: 3 tbsp olive oil, juice of half a lemon (or 1 tbsp vinegar), and 1 tsp dried oregano"
      ],
      instructions:
        "Cook the pasta according to the package directions.  Toss the beans, cucumber, and tomatoes into a large mixing bowl. In a small jar or bowl, whisk together the oil, lemon/vinegar, oregano, a pinch of salt, and pepper.  Toss the pasta into the bowl with the veggies. Finally pour the dressing over everything and stir well."
    },

    {
      title: "The Dense Bean Salad",
      image: "images/dense-bean-salad.webp",
      ingredients: [
        "1 can (15oz) chickpeas, drained and rinsed",
        "1 can (15oz) black beans, drained and rinsed",
        "1 large cucumber, diced",
        "1 pint cherry tomatoes, halved",
        "1/4 red onion, finely diced",
        "Dressing:",
        "3 tbsp olive oil", 
        "2 tbsp vinegar (red wine or apple cider)", 
        "1 tsp dried oregano", 
        "salt, and pepper"
      ],
      instructions:
        "In a large bowl, combine rinsed chickpeas, black beans, cucumber, tomatoes, and red onion. Whisk together olive oil, vinegar, oregano, salt, and pepper. Pour dressing over the salad and toss to coat. Chill 30 min for best flavor (optional). "
        },
    
    {
      title: "Creamy Potato & Kale Soup",
      image: "images/kale-potato-soup.webp",
      ingredients: [
        "1 bunch kale, stems removed, leaves chopped small",
        "3–4 large potatoes, diced",
        "1 onion, chopped",
        "1 can (15oz) white beans (optional, for extra protein)",
        "Seasoning: 1 tsp dried thyme, salt, and plenty of black pepper",
        "Liquid: 6 cups water or vegetable broth"
      ],
      instructions:
        "Sauté onion in oil until soft. Add potatoes, thyme, and broth; simmer 15 min until potatoes are very soft. Mash 1/3 of the potatoes in the pot for creaminess. Stir in kale and white beans; cook 3–5 min until tender. Season with salt and pepper."
    },
    
    {
      title: "Pantry-Style Tuna Power Salad",
      image: "images/tuna-salad.webp",
      ingredients: [
        "2 cans (5oz each) tuna, drained well",
        "1 can (15oz) mixed vegetables (carrots, green beans, corn, peas), drained and rinsed",
        "1/3 cup mayonnaise (adjust to preferred creaminess)",
        "1/2 tsp garlic powder (or onion powder for extra depth)",
        "Salt and plenty of black pepper to taste",
        "Optional: a splash of vinegar or pickle juice to cut through the mayo"
      ],
      instructions:
        "Drain and dry the tuna and mixed vegetables well, then flake the tuna into a large bowl. Add the vegetables and stir in mayo, garlic powder, salt, and pepper until everything is coated. Taste and adjust seasoning or add a splash of vinegar or pickle juice for extra zing."
    },
    
    {
      title: "Simple Avocado-Chicken Salad",
      image: "images/avocado-chicken.webp",
      ingredients: [
        "1 cup cooked chicken (shredded or diced)",
        "1 ripe avocado",
        "1–2 tbsp lemon or lime juice",
        "Red onion, finely diced",
        "1 cup celery, chopped",
        "Green onions (scallions), chopped",
        "Cilantro, roughly chopped",
        "Salt and pepper to taste",
        "Optional: extra chopped cilantro, onion, or tomato"
      ],
      instructions:
        " In a bowl, mash the avocado. Add the chicken, red onion, celey, green onion, cilantro and mix well. Stir in lemon or lime juice. Season with salt and pepper. Add any optional ingredients if you like, and mix. Ready to eat! You can serve it on toast, in a wrap, or by itself."
    },
    
    {
      title: "Bean & Veggie Bowl with Quinoa",
      image: "images/bean-veggie-quinoa-.webp",
      ingredients: [
        "1 cup cooked quinoa",
        "1 cup canned beans (black or pinto), drained",
        "1 cup mixed veggies (fresh or frozen)",
        "2 tbsp salsa or lime juice",
        "Salt & pepper to taste"
      ],
      instructions:
        "Cook quinoa according to package.Heat beans and veggies in a pan (or microwave).Add quinoa to a bowl.Top with beans and veggies.Add salsa or lime, season, and mix."
    },

    {
      title: "The Sweet & Savory Massage Salad",
      image: "images/kale-salad.webp",
      ingredients: [
        "1 bunch kale",
        "1 red apple, diced into small cubes",
        "1/2 cup raisins",
        "1/2 cup toasted sunflower seeds",
        "Massage: 1 tsp oil, pinch of salt",
        "Dressing: 3 tbsp plain Greek yogurt, 1 tbsp apple cider vinegar, 1 tbsp maple syrup or honey"
      ],
      instructions:
        "Strip and finely chop the kale, then massage it with oil and salt for a minute until it softens and turns bright green. Toss in the diced apple, raisins, and toasted sunflower seeds, then drizzle with a yogurt–vinegar–honey dressing and mix until evenly coated. Serve immediately or chill."
    },

  ],

  dinner: [
    {
      title: "Lentils soup",
      image: "images/lentils-soup.webp",
      ingredients: [
        "1 cup dried lentils",
        "1 tablespoon olive oil",
        "1 medium onion, chopped",
        "2–3 carrots, chopped",
        "2 cloves garlic",
        "1 cup diced tomatoes",
        "Bouillon (optional)",
        "Salt and pepper to taste"
      ],
      instructions:
        "Boil the lentils for 1 hour. In other pan heat oil, cook chopped onion, garlic and carrots until soft, Then at the end sauté the tomatoes. Mix everything . Season with salt, pepper, and a little lemon juice (optional). "
    },

    {
      title: "Chickpea and Spinach Curry (Chana Saag)",
      image: "images/chickpea-spinach.webp",
      ingredients: [
        "1 onion, chopped",
        "2 cans (15oz) chickpeas, drained",
        "1 bag (approx. 10oz) frozen spinach",
        "1 can (14oz) crushed or diced tomatoes",
        "1 cup water",
        "2 tbsp olive oil",
        "Seasoning: 1 tbsp curry powder, salt and pepper to taste"
      ],
      instructions:
        "Heat oil in a pan and sauté onion until soft, then stir in curry powder for 30 seconds. Add chickpeas and tomatoes, simmer 5–8 minutes, then fold in frozen spinach until heated through. Season with salt and pepper to taste."
    },
    
    {
      title: "Chicken & Vegetable Soup",
      image: "images/chicken-veggies-soup.webp",
      ingredients: [
        "1 cup cooked chicken (shredded)",
        "1 carrot, sliced",
        "1 celery stalk, chopped",
        "1/2 onion, chopped",
        "1 tomato, chopped",
        "3 cups chicken broth",
        "1 tbsp oil",
        "Salt & pepper to taste"
      ],
      instructions:
        "Heat oil in a pot and cook onion until soft, then add carrot, celery, and tomato; cook 3–4 minutes. Pour in broth and bring to a boil, add chicken, salt, and pepper. Simmer 10–15 minutes until veggies are tender"
    },
    
    {
      title: "Short Veggie & Bean Tacos",
      image: "images/bean-veggie-taco.webp",
      ingredients: [
        "4 small tortillas",
        "1 cup cooked beans (black beans, kidney, or pinto)",
        "1 cup mixed veggies (bell peppers, onions, corn)",
        "1 tsp olive oil",
        "1/2 tsp cumin",
        "Salt & pepper to taste",
        "Toppings: shredded lettuce, salsa, a squeeze of lime, or a dollop of yogurt/sour cream"
      ],
      instructions:
        "Heat a splash of oil in a pan over medium-high heat. Add the frozen veggie mix and cook until tender and slightly browned. Stir in the beans and your taco seasoning. Spoon the bean and veggie mixture into the tortillas and load them up with your favorite toppings."
      },
    
    {
      title: "Carrot Soup",
      image: "images/carrot-soup.webp",
      ingredients: [
        "2 cups carrots, chopped",
        "1 cup cooked chicken",
        "3 cups chicken broth",
        "1/2 onion, chopped",
        "1 tbsp oil",
        "Salt & pepper to taste"
      ],
      instructions:
        "Cook onion in oil until soft. Add carrots and broth; boil until carrots are tender (10–15 min).Add chicken. Blend everything until smooth and creamy. Season with salt and pepper."
    },
    
    {
      title: "Beans soup",
      image: "images/beans.webp",
      ingredients: [
        "1 cup beans (kidney, black, or white; soaked or canned)",
        "1 carrot, chopped",
        "1 celery stalk, chopped",
        "1/2 onion, chopped",
        "3 cups vegetable or chicken broth",
        "1 tbsp oil",
        "Salt & pepper to taste",
        "Optional: garlic, herbs (thyme, bay leaf)"
      ],
      instructions:
        "Heat oil; sauté onion (and garlic if using) until soft. Add carrot, celery, and beans; stir 2–3 minutes. Pour in broth; add herbs if using. Simmer 20–25 minutes until beans and veggies are tender. Season with salt and pepper."
    },

    {
      title: "Whole Pasta with Tomato & Spinach recipe",
      image: "images/whole-pasta.webp",
      ingredients: [
        "2 cups whole wheat pasta",
        "1 cup tomato sauce (or chopped tomatoes)",
        "1 cup fresh spinach",
        "1/2 onion, chopped",
        "1 garlic clove (optional)",
        "1 tbsp oil",
        "Salt & pepper to taste"
      ],
      instructions:
        "Cook pasta according to package; drain. In a pan, cook onion (and garlic) in oil until soft. Add tomato sauce; simmer 5 minutes. Add spinach and cook until wilted. Mix in pasta, season with salt and pepper."
    },

  ],

};


// 2. Detect which page we are on
let recipeKey = "";
const page = window.location.pathname;

if (page.includes("breakfast")) recipeKey = "breakfast";
if (page.includes("lunch")) recipeKey = "lunch";
if (page.includes("dinner")) recipeKey = "dinner";

// 3. Insert recipes into the page
const container = document.getElementById("recipe-container");
const recipeList = recipes[recipeKey];

if (container && recipeList){
  recipeList.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <h2 class="recipe-title"> ${recipe.title}</h2>
      <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
      <h3>Ingredients</h3>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <h3>Instructions</h3>
      <p>${recipe.instructions}</p>
    `;

    container.appendChild(card);
  });
}

const randomBtn = document.getElementById("random-btn");
const randomMealContainer = document.getElementById("random-meal");

if (randomBtn && randomMealContainer) {
  const allRecipes = [
    ...recipes.breakfast,
    ...recipes.lunch,
    ...recipes.dinner
  ];
  
  // Process to pick a random recipe
  randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const recipe = allRecipes[randomIndex];

    randomMealContainer.innerHTML = `
      <div class="recipe-card">
        <h2 class="recipe-title">${recipe.title}</h2>
        <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions}</p>
      </div>
    `;
  });
}

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);
document.querySelector("#reviewCounter").textContent = reviewCount;