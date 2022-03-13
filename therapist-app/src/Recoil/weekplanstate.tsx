import { atom } from 'recoil'
import WeekPlan from './weekplan'
import User from './user'

const weekplanstate = atom<WeekPlan>({
    key: 'weekplan-state',
    default: {
        "cIndex": 0,
        "completedMeals": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        "meals":  [
           {
            "entree": "Irish Breakfast Sandwich",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Eggplant Appetizer",
          },
           {
            "entree": "Farmer's Sandwich",
            "fruits": "Fancy Fruit Salad",
            "side": "Hot Mexican Appetizer",
          },
           {
            "entree": "Cheese And Bean Enchiladas",
            "fruits": "Spaghetti Fruit Salad",
            "side": "Shrimp & Cheese Appetizers",
          },
           {
            "entree": "Breakfast Casserole",
            "fruits": "Fresh Fruit Breakfast Lasagna",
            "side": "Best Ever Party Appetizer",
          },
           {
            "entree": "Bean, Cheese, and Corn Enchiladas",
            "fruits": "Fruit Salad or Dessert",
            "side": "Appetizer Meatballs",
          },
           {
            "entree": "Beefy Enchilada Casserole",
            "fruits": "Fruit Cake",
            "side": "Mushroom & Chicken Appetizers",
          },
           {
            "entree": "Breakfast Enchiladas",
            "fruits": "Tropical Fruit Breakfast for One",
            "side": "Eggplant Appetizer",
          },
           {
            "entree": "Bean, Cheese, and Corn Enchiladas",
            "fruits": "Chocolate Fruit",
            "side": "Cheese Stuffed Mushroom Appetizer",
          },
           {
            "entree": "Beefy Enchilada Casserole",
            "fruits": "Dessert",
            "side": "Empanadas (Appetizer)",
          },
           {
            "entree": "Holiday Breakfast Enchiladas",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Mealie Soup",
          },
           {
            "entree": "Breakfast Enchiladas",
            "fruits": "Fancy Fruit Salad",
            "side": "Appetizer Meatballs",
          },
           {
            "entree": "Chicken and Cheese Enchiladas",
            "fruits": "Fruit Cake",
            "side": "Italian Appetizer Bites",
          },
           {
            "entree": "Holiday Breakfast Enchiladas",
            "fruits": "Tomato Breakfast",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Cheese And Bean Enchiladas",
            "fruits": "Big Fruit Salad",
            "side": "Cheese Stuffed Mushroom Appetizer",
          },
           {
            "entree": "Chicken and Cheese Enchiladas",
            "fruits": "Spaghetti Fruit Salad",
            "side": "Appetizer Meatballs",
          },
           {
            "entree": "Holiday Breakfast Enchiladas",
            "fruits": "Summer Breakfast Fruit Salad",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Breakfast Enchiladas",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Cheese Stuffed Mushroom Appetizer",
          },
           {
            "entree": "Beef and Cheese Casserole",
            "fruits": "Spaghetti Fruit Salad",
            "side": "Mexican Pizza Appetizers",
          },
           {
            "entree": "Holiday Breakfast Enchiladas",
            "fruits": "Chocolate Fruit",
            "side": "Italian Bread Appetizer",
          },
           {
            "entree": "Beef and Noodle Casserole",
            "fruits": "Fancy Fruit Salad",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Beef Enchilada Casserole",
            "fruits": "Stuffed Tomatoes",
            "side": "Mexican Pizza Appetizers",
          },
           {
            "entree": "Gary's Breakfast Enchiladas",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Breakfast Quesadilla",
          },
           {
            "entree": "Bean, Cheese, and Corn Enchiladas",
            "fruits": "Big Fruit Salad",
            "side": "Cheese Stuffed Mushroom Appetizer",
          },
           {
            "entree": "Beef Enchilada Casserole",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Breakfast in Bread",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Bacon and Cheese Egg Appetizers",
          },
           {
            "entree": "Farmer's Sandwich",
            "fruits": "Fruit Mince",
            "side": "Hot Mexican Appetizer",
          },
           {
            "entree": "Beef, Vegetable and Cheese Casserole",
            "fruits": "Stuffed Tomatoes",
            "side": "Italian Appetizer Bites",
          },
           {
            "entree": "Irish Breakfast",
            "fruits": "Banana Fruit Salad",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Chicken and Cheese Enchiladas",
            "fruits": "Tropical Fruit Breakfast for One",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Chicken and Cheese Enchiladas",
            "fruits": "Chicken and Pineapple",
            "side": "Empanadas (Appetizer)",
          },
           {
            "entree": "Holiday Breakfast Enchiladas",
            "fruits": "Irish Breakfast Fruit Crisp",
            "side": "Eggplant Appetizer",
          },
           {
            "entree": "Beef and Cheese Enchilada Casserole",
            "fruits": "Fruit Soup",
            "side": "Mushroom & Chicken Appetizers",
          },
           {
            "entree": "Beef and Cheese Enchilada Casserole",
            "fruits": "Fruit Salad",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Breakfast Enchiladas",
            "fruits": "Fruit Salad",
            "side": "Italian Bread Appetizer",
          },
           {
            "entree": "Lunch in the Vineyard",
            "fruits": "Breakfast Fruit Salad",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Cheese and Beef Enchiladas",
            "fruits": "Fruit and Nut Sandwich",
            "side": "Mushroom & Chicken Appetizers",
          },
           {
            "entree": "Fruit and Cheese Blintz or Breakfast Crepes",
            "fruits": "Tropical Fruit Breakfast for One",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Beef and Noodle Casserole",
            "fruits": "Fruit Shake",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Beef and Cheese Enchiladas",
            "fruits": "Stuffed Tomatoes",
            "side": "Italian Appetizer Bites",
          },
           {
            "entree": "Breakfast Casserole",
            "fruits": "Chocolate Fruit",
            "side": "Mexican Breakfast",
          },
           {
            "entree": "Beef and Noodle Casserole",
            "fruits": "Breakfast Fruit Salad",
            "side": "Mealie Soup",
          },
           {
            "entree": "Cheese And Bean Enchiladas",
            "fruits": "Dessert",
            "side": "Mushroom & Chicken Appetizers",
          },
           {
            "entree": "Cheese, Beef and Tater Tots Casserole",
            "fruits": "Banana Fruit Salad",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Breakfast Enchiladas",
            "fruits": "Fancy Fruit Salad",
            "side": "Appetizer Meatballs",
          },
           {
            "entree": "Beef Enchilada Casserole",
            "fruits": "Chicken and Pineapple",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Fruit and Cheese Blintz or Breakfast Crepes",
            "fruits": "Irish Breakfast Fruit Crisp",
            "side": "Italian Bread Appetizer",
          },
           {
            "entree": "Beef and Noodle Casserole",
            "fruits": "Fruit Salad",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Chicken or Beef Enchilada Casserole",
            "fruits": "Chocolate Fruit",
            "side": "Italian Appetizer Bites",
          },
           {
            "entree": "Fruit and Cheese Blintz or Breakfast Crepes",
            "fruits": "Fruit Salad or Dessert",
            "side": "Mexican Appetizer",
          },
           {
            "entree": "Beef and Noodle Casserole",
            "fruits": "Simply Fruit",
            "side": "Mushroom Appetizers",
          },
           {
            "entree": "Beef Enchilada Casserole",
            "fruits": "Stuffed Tomatoes",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Breakfast in Bread",
            "fruits": "Chocolate Fruit",
            "side": "Breakfast Quesadilla",
          },
           {
            "entree": "Pampered Lunch",
            "fruits": "Fruit Shake",
            "side": "Tomato Mushroom Appetizers",
          },
           {
            "entree": "Beef Enchilada Casserole",
            "fruits": "Stuffed Tomatoes",
            "side": "Fruity and Spicy Appetizers",
          },
           {
            "entree": "Breakfast Bar",
            "fruits": "Tomato Breakfast",
            "side": "Veggie Chinese Pancakes Appetizer",
          },
          {
            "entree": "Breakfast Enchiladas",
            "fruits": "Big Fruit Salad",
            "side": "Mexican Appetizer",
          },
          {
            "entree": "Chicken or Beef Enchilada Casserole",
            "fruits": "Dessert",
            "side": "Mushroom & Chicken Appetizers",
          },
          {
            "entree": "Farmers Breakfast",
            "fruits": "Strawberry Bread",
            "side": "Best Ever Party Appetizer",
          },
          {
            "entree": "Breakfast Enchiladas",
            "fruits": "Fruit Salad",
            "side": "Cheese Stuffed Mushroom Appetizer",
          },
          {
            "entree": "Beefy Enchilada Casserole",
            "fruits": "Fruit Cake",
            "side": "Appetizer Meatballs",
          },
          {
            "entree": "Breakfast Apples and Onions",
            "fruits": "Chocolate Fruit",
            "side": "Fruity and Spicy Appetizers",
          },
          {
            "entree": "Farmer's Sandwich",
            "fruits": "Chocolate Fruit",
            "side": "Fruity and Spicy Appetizers",
          },
          {
            "entree": "Cheese, Beef and Tater Tots Casserole",
            "fruits": "Fruit Salad",
            "side": "Tomato Mushroom Appetizers",
          },
        ],
        "selectedDay": 13,
        "selectedDish": 1,
        "selectedMeal": -1,
        "startDate": new Date(2020, 5, 1),
      } as WeekPlan
}) 

export default weekplanstate

const initialState = {
  // user: {
  //   admin: '1',
  //   age: '34',
  //   dose: ['2019-07-27', '2020-07-29', '2021-04-03', '2020-08-01'],
  //   drugs: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '11', '12', '13'],
  //   education: '5',
  //   employment: '2',
  //   firstAge: '25',
  //   gender: '1',
  //   insurance: '4',
  //   marital: '4',
  //   Home: true,
  // },
  user: {
    admin: null as any,
    age: null as any,
    dose: [],
    drugs: [],
    education: null as any,
    employment: null as any,
    firstAge: null as any,
    gender: null as any,
    insurance: null as any,
    marital: null as any,
    Home: null as any,
  },
  error: null as any,
}