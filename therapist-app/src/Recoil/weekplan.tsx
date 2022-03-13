interface Meal {
    entree: string,
    side: string,
    fruits: string,
}

interface Recipe{
    entree: string,
    side: string,
    fruits: string,
}

interface WeekPlan {
    startDate : Date,
    endDate : Date,
    meals: Meal[],
    recipes: Recipe[],
    selectedDay: number,
    selectedMeal: number,
    selectedDish: number,
    cIndex: number,
    completedMeals: number[],
}

export default WeekPlan