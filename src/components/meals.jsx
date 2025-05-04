import { useState } from "react";


const DisplayMeals = () => {
    const [sumCal, setSumCal] = useState(0)

    const [meals, setMeals] = useState([
        {id: 1, name: "adobo", kcal: 200},
        {id: 2,name: "nilaga", kcal: 450},
        {id: 3,name: "sinigang", kcal: 760},
        {id: 4 ,name: "adidas", kcal: 420},
    ])

    const handleSum = () => {
        const sum = meals.map(meal => meal.kcal).reduce((x,y) => x + y, 0)
        setSumCal(sum)
    }

    const handleDelete = (id) => {
        const newArr = meals.filter((meal) => meal.id !== id)
        setMeals(newArr)
    }

    const handleAadd = () => {
        const maxID = Math.max(0,...meals.map(meal => meal.id))

        const newMeal = {
            id: maxID + 1,
            name: `New Meal: ${maxID + 1}`,
            kcal: 120
        }
        setMeals([...meals, newMeal])
    }


    const style = {
        padding: 20,
        backgroundColor: "gray",
        width: 250,
        height: "auto",
        marginBottom: 10,
    }

    return(
        <div>
            <section>
                <button onClick={handleAadd}>add meall</button>
                <button onClick={handleSum}>sum up meal</button>
            </section>

            <div>
                {/* display the cards */}
                {meals.map((meal, idx) => (
                    <div style={style} key={meal.id}>
                        <p>Meal: {meal.name}</p>
                        <p>kcal: {meal.kcal}</p>
                        <button onClick={() => handleDelete(meal.id)}>delete meal</button>
                    </div>
                ))}
            </div>

            <p>
                {sumCal ? sumCal : "no sum yet"}
            </p>
        </div>
    );
};

export default DisplayMeals;