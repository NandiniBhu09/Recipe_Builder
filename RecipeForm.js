import React, { createElement, useEffect, useState , useRef} from 'react'
import "./style.css"


function RecipeForm() {

  const [summary,setSummary] = useState(false)
  const [saveRecipe,setSaveRecipe] = useState([])

  const savedRecipes = ()=>{
      if(data.recipeName.length <= 3){
        alert("recipe name must be more than 3 characters")
        return
      }

      if(ingredientsList.length === 0){
        alert("add altlest one ingredient")
        return
      }

      // creating a new object
      const newRecipe = {
        recipeName: data.recipeName,
        ingredients: ingredientsList,
        instructions: data.instructions,
        time: data.time
      }

      const updatedRecipes = [...saveRecipe,newRecipe]

      setSaveRecipe(updatedRecipes)
      localStorage.setItem("recipes",JSON.stringify(updatedRecipes));

      alert("recipes saved successfully")
  }

  // this will be executed on updation of anything in the component
  useEffect(()=>{
    const recipes = JSON.parse(localStorage.getItem("recipes")) || []
    setSaveRecipe(recipes)
  },[])

  function resetForm(){
    setData(initialState);
    setSummary(false)
    setIngredientsList([])
  }

    function handleSubmit(e){
      e.preventDefault()
      
      if(data.recipeName.length <= 3){
        alert("recipe name must have more than 3 characters")
      }

      if(data.ingredients.name.length <= 2){
        alert("ingredient name must have more than 2 characters")
      }

      if(data.ingredients.quantity <= 0){
        alert("quantity must be greater than zero")
      }

      if(data.ingredients.time <= 0){
        alert("time must be greater than zero")
      }
      else{
        setSummary(true)
        alert('Form submitted successfully!');
      }
    }

    {/* we have created an object */}
    const initialState = {        
      recipeName: "",
      ingredients: {
        name: "",
        quantity: "",
        unit: ""
      },
      instructions: "",
      time: "",
    };

    const [data,setData] = useState(initialState)
    const [ingredientsList, setIngredientsList] = useState([]); // State to store all added ingredients

    const addIngredients = (e)=>{
      e.preventDefault();
      if (
        data.ingredients.name &&
        data.ingredients.quantity > 0 &&
        data.time > 0
      ) {
       
        setIngredientsList((prevList) => [
          ...prevList,
          {
            name: data.ingredients.name,
            quantity: data.ingredients.quantity,
            unit: data.ingredients.unit
          },
        ]);

      
        // after data is stored the fields are empty
        setData((prev) => ({
          ...prev,  
          ingredients: {
            name: "",
            quantity: "",
            unit: ""
          },
        }));

      }else{
       alert("Enter all the inputs")
      }
    }

    function removeIngrdient(indexToRemove){
      setIngredientsList((prevList) =>
        prevList.filter((_, index) => index !== indexToRemove)
      );
    }


  return (
    <>
        <div id="form">
            <form onSubmit={handleSubmit}>
                <label for="recipe-name" className='label'>Recipe Name</label>
                <input type="text" placeholder='recipe name' value={data.recipeName} onChange={(e)=>setData((prev)=>({...prev,recipeName:e.target.value}))} required></input>
                {/* <input type="text" placeholder='recipe name' value={data.recipeName} onChange={handleChange}></input> */}
                <br></br>
                <br></br>
                <label for="ingrdient" className='label'>Ingredient</label>
                <button id="add-ingridient" onClick={addIngredients}>Add Ingredient</button>
                <div id='ingridient'>
                    <input type="text" placeholder='name' value={data.ingredients.name} onChange={(e)=>setData((prev)=>({...prev,ingredients:{...prev.ingredients,name:e.target.value}}))} required></input>
                    <br></br>
                
                    <input type="number" placeholder='quantity' value={data.ingredients.quantity} onChange={(e)=>setData((prev)=>({...prev,ingredients:{...prev.ingredients,quantity:e.target.value}}))} required></input>
                    <br></br>
                
                    <input type="text" placeholder='unit' value={data.ingredients.unit} onChange={(e)=>setData((prev)=>({...prev,ingredients:{...prev.ingredients,unit:e.target.value}}))} required></input>
                    <br></br>
                
                    <textarea placeholder='instructions' value={data.instructions} onChange={(e)=>setData((prev)=>({...prev,instructions:e.target.value}))}></textarea>
                    <br></br>
                    
                    <input type="number" placeholder='time required' value={data.time}  onChange={(e)=>setData((prev)=>({...prev,time:e.target.value}))}></input>
                    <br></br>
                </div>
                <br></br>
                <input type="submit"> 
                </input>
                <button onClick={()=>{(resetForm())}} className='reset'>Clear Form</button>
                <br></br>
                <button onClick={savedRecipes} style={{marginLeft: "10px"}}>Save Recipe</button>
                <br></br>
                <br></br>
                <div className='ingredints-data'>
                  {summary && <div>
                      recipe Name:  {data.recipeName}, instructions: {data.instructions}, time: {data.time}
                    </div>}
                  <ul>
                    {ingredientsList.map((ingr,index)=>(
                      <>
                          <li key={index}>
                            <button onClick={()=>removeIngrdient(index)}>Remove ingredient</button>
                            ingredient: {ingr.name} (Quantity: {ingr.quantity}, Unit: {ingr.unit})
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <h3>Saved Recipes:</h3>
                {saveRecipe.length > 0 ? (
                  <ul>{saveRecipe.map((recipe,index)=>(
                    <li key={index}>
                      <strong>{recipe.recipeName }</strong> : {recipe.instructions} - {" "}
                      {recipe.time} minutes
                      <ul>
                        {recipe.ingredients.map((ingr,i)=>(
                          <li key={i}>
                            {ingr.name} ({ingr.quantity} {ingr.unit})
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}</ul>
                ): <p>No saved recipes found</p>}
            </form>
        </div>
    </>
  )
}

export default RecipeForm