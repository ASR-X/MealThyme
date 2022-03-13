# MealThyme - One Meal at a Thyme

## Inspiration 💡
Millions of people from all walks of life suffer from eating disorders. Following diagnosis of diseases such as Anorexia nervosa (AN) and Bulimia nervosa (BN), affected individuals have been known to spiral into excessive depression and anxiety. Because of this, eating disorders are considered to be the most lethal form of mental illness, causing over **7000 self-inflicted deaths** per year since 2010.

Despite facing the arduous prospects one might confront while dealing with eating disorders, several prominent figures in today's world have been open with their respective disease recovery journeys. Celebrities such as Lady Gaga, Taylor Swift, and Demi Lovato have all grappled with eating disorders in the past. Over time, their respective conditions improved, serving as a testament to the vitality of grit and determination in such a comeback. 

The ASR-X team believes in the importance of technology in today's rapidly developing world. Near the start of SF Hacks 2022, we realized the potential rehabilitative power software had for eating disorder-affected patients. With a clear goal in mind, we set out on the development of our project, **MealThyme**.

<img src="https://cdn.discordapp.com/attachments/817192378137051140/952596322106617876/IMG_0250.png" alt="drawing" height="50"/>

## What it does 🤔
MealThyme is a mobile app that gathers individual data (height, weight, age, gender, daily activity levels) to calculate and reach a user's ideal BMI/weight. To treat patients affected by eating disorders, the app collects consumers' dietary preferences (including restrictions/allergens, optimal spice level, optimal sweetness level for desserts), creating daily tailored meal plans that fit recommended calorie intake requirements. 

Furthermore, over the course of the intended treatment period (3 weeks), our app generates graphs relating to nutritional intake. No calorie consumption vs. time or weight gain/loss vs. time graphs are included in this display, since studies have shown that users tend to overanalyze and develop paranoia over these metrics. 

On the other side of a user's treatment plan, his or her therapist has the ability to view all of the selected preferences, user statistics, and meal plans. By connecting with the patient, the therapist can assess our app's performance  and tweak parameters in order to improve upon the computer-generated algorithms and food suggestions if necessary.

Sample of our UI/UX implementation:
<img src="https://cdn.discordapp.com/attachments/817192378137051140/952626179112841236/unknown.png" width="100"/>


## Design and Logo 🎨
Our team's designers and illustrators took to a minimalist **Material UI** design. The color theme of green, black, and white all came about as a result of our app's herbal title, "MealThyme."

Our wireframe:
<p align="center">
<img src="https://cdn.discordapp.com/attachments/817192378137051140/952624715334303784/unknown.png" alt="drawing" width="200"/>
</p>

## How we built it ⚙️
The team used Python for our algorithm work and backend development. In order to interface this work with our frontend (built with TypeScript and React Native), we used FastAPI

![The Tech Stack](https://media.discordapp.net/attachments/817192378137051140/952594494740647936/IMG_0227.png)

## Included Research 📚
The following sources were instrumental in the development of our presentation and work:

[Eating Disorder Statistics](https://anad.org/eating-disorders-statistics/)

[BMI Data](https://www.researchgate.net/publication/23143677_Cross-sectional_study_of_height_and_weight_in_the_population_of_Andalusia_from_age_3_to_adulthood)

## Challenges we ran into 🚫
- Daylight savings tightening deadlines
- Bugs galore
- Faulty Google API Keys
- Perfectly optimal meal plan solutions (fixed by the Monte Carlo tree search algorithm)

## Accomplishments that we're proud of 👍
Although the challenges we faced were abundant, the team successfully developed a working prototype of our idea in under 48 hours. One of the most significant challenges we faced, the aforementioned Google API mishap, took about 4 hours to maneuver around. Although we were frustrated while working through the issue, we felt satisfied after finally resolving the matter. 

## What we learned 🖥️
We learned:

1) The importance of teamwork (our original workflow was hampered by communication mishaps)
2) The value of creativity in programming (we developed our own solution to several API issues we faced)
3) To always reference Google/documentation when stuck on an error
4) To use Github
5) To not pull all-nighters (one can only tolerate a certain amount of Red Bull)

## What's next for MealThyme ▶️
We hope to incoporate some form of daily meal tracking/user interface and create a chatbot-based therapist that can give genuine advice based on these interactions. Additionally, the team has plans to implement peer connections within the app, a feature which would allow friends to connect and encourage each other to overcome their own respective eating disorders.