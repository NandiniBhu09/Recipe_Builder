
1. Form Structure:

* Recipe Name: A text input to specify the name of the recipe.

* Ingredients: A dynamic list where users can add or remove ingredients. Each ingredient should have:

* Name (text input)

* Quantity (number input)

* Unit (select input with options like "grams," "cups," "tablespoons," etc.)

* Instructions: A text area for adding cooking instructions.

* Preparation Time: A number input for specifying the time required in minutes.

2. Add and Remove Ingredients:

* Include an "Add Ingredient" button to add a new row to the list of ingredients.

* Each ingredient row should have a "Remove" button to delete that ingredient.

3. Validation:

* Recipe Name: Required and should be at least 3 characters.

* Ingredients: Each ingredient should have a name (at least 2 characters) and a quantity (greater than 0).

* Preparation Time: Should be a positive number.

4. Display Recipe Summary:

* On form submission, prevent the default form behavior.

* If validation passes, display a summary of the recipe below the form, including all recipe details and the list of ingredients.

* Show validation errors inline if any fields don’t meet requirements.

5. Clear Form:

* Include a "Clear Form" button that resets all fields to their initial state.

> Bonus Challenges

1. Real-Time Ingredient Calculation:

* Include an option to calculate the total quantity for each unit type (e.g., total grams, cups, etc.) and display it below the ingredient list in real-time.

2. Form Saving:

* Add a “Save Recipe” button to save the form data to the local storage. Allow users to retrieve saved recipes when they return to the app.
