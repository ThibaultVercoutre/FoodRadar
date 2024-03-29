export interface Meals {
    meals: Meal[];
    foods: Meal2[];
}

export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string | null;
    strIngredient17: string | null;
    strIngredient18: string | null;
    strIngredient19: string | null;
    strIngredient20: string | null;
}

export interface Meal2 {
    fdcId: number;
    description: string;
    dataType: string;
    gtinUpc: string;
    publishedDate: string;
    brandOwner: string;
    ingredients: string;
    allHighlightFields: string;
    score: number;
    foodNutrients: FoodNutrient[];
}

export interface FoodNutrient {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber: string;
    unitName: string;
    value: number;
    derivationCode: string;
    derivationDescription: string;
    nutrientSource: string;
    nutrientSourceCode: string;
    valuePer100: number;
}