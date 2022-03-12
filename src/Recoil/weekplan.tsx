interface Meal {
    protein: string,
    grains: string,
    vegetables: string,
    dairy: string,
    fruits: string,
    completed: boolean,
}

interface Recipe{
    protein: string,
    grains: string,
    vegetables: string,
    dairy: string,
    fruits: string,
}

interface WeekPlan {
    startDate : Date,
    endDate : Date,
    meals: Meal[],
    recipes: Recipe[],
}

export default WeekPlan