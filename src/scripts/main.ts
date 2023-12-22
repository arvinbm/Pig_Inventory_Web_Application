import { PigsController } from "./PigsController";
import { Grey, Chestnut, White, Black } from "./Pigs";

window.onload = function() {
    // Populate the main table with objects from the storage.
    populateTheTable();

    // Add the event listener for the add button.
    addEventListenerForAddButton();
}

// Constants holding the inputs.
let newName: string = undefined;
let newBreed: string = undefined;
let newHeight: string = undefined;
let newWeight: string = undefined;
let newPersonality: string = undefined;
let newCategory: string = undefined;

function addEventListenerForAddButton(): void {
    // IDs of HTML elements.
    const addButtonID = document.querySelector('#add_button');
    const addNewContainer = document.querySelector('#add_new_flex');
    const moreInfoContainer = document.querySelector('#more_info_flex');
    const newNameInput = document.querySelector('#new_name') as HTMLInputElement;
    const newBreedInput = document.querySelector('#new_breed') as HTMLInputElement;
    const newHeightInput = document.querySelector('#new_height') as HTMLInputElement;
    const newWeightInput = document.querySelector('#new_weight') as HTMLInputElement;
    const newPersonalityInput = document.querySelector('#new_personality') as HTMLInputElement;
    const newCategoryInput = document.querySelector('#new_category') as HTMLInputElement;

    addButtonID.addEventListener("click", handleAddButtonClick);
    
    function handleAddButtonClick() {
        // Make the table for adding a new pig visible to the user.
        addNewContainer.setAttribute("style", "display: block;");
        deletePreviousRows();
        moreInfoContainer.setAttribute("style", "display: none;");

        // Set event listeners for inputs in the table.
        newNameInput.addEventListener("change", function() {
            newName = newNameInput.value;
            if(allValuesHaveBeenProvided()) {
                addThePig();
            }
        });

        newBreedInput.addEventListener("change", function() {
            if(isValidWord(newBreedInput.value)) {
                newBreed = newBreedInput.value;
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        });

        newHeightInput.addEventListener("change", function() {
            newHeight = newHeightInput.value;
            if(allValuesHaveBeenProvided()) {
                addThePig();
            }
        });

        newWeightInput.addEventListener("change", function() {
            newWeight = newWeightInput.value;
            if(allValuesHaveBeenProvided()) {
                addThePig();
            }
        });

        newPersonalityInput.addEventListener("change", function() {
            if(isValidWord(newPersonalityInput.value) && isDistinctPersonality(newPersonalityInput.value)) {
                newPersonality = newPersonalityInput.value;
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        });

        newCategoryInput.addEventListener("change", function() {
            newCategory = newCategoryInput.value;

            // Add the dynamic row based on the selected pig type.
            addTheDynamicRowForNewTable(newCategory);
        });
    }
}

function addTheDynamicRowForNewTable(newCategory: string){
    const tableBody = document.querySelector('#add_new_table').querySelector('tbody');

    // If the table has a dynamic row, due to previous pig type selection delete it.
    handleAdditionalRow();

    // Creating the dynamic row which includes two td.
    const newRow = document.createElement('tr');

    // Creating the dynamic text field.
    const textCell = document.createElement('td');
    if (newCategory === "Grey") {
        textCell.textContent = 'Swimming Ability (0 - 100)';
        textCell.id = 'new_swimming_ability';
    }
    else if (newCategory === "Chestnut") {
        textCell.textContent = 'Language';
        textCell.id = 'new_language';
    }
    else if (newCategory === 'White') {
        textCell.textContent = 'Running Ability (0 - 100)';
        textCell.id = 'new_running_ability';
    }
    else {
        textCell.textContent = 'Strength Ability (1 - 10)';
        textCell.id = 'new_strength_ability';
    }
    newRow.appendChild(textCell);

    // Creating the dynamic input field.
    const inputCell = document.createElement('td');
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputCell.appendChild(inputElement);
    newRow.appendChild(inputCell);

    // Adding the dynamic row into the table.
    tableBody.appendChild(newRow);

    // Add the event listeners for the dynamic input fields
    addDynamicInputFieldsEventListener(textCell.id, inputElement);
}

function handleAdditionalRow(): void {
    const tableBody = document.querySelector('#add_new_table').querySelector('tbody');

    const rows = tableBody.querySelectorAll('tr');

    // If the length of the table is longer than 5 rows delete the last row.
    if (rows.length > 6) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
}

// Constants holding the inputs.
let newSwimmingAbility: number = undefined;
let newLanguage: string = undefined;
let newRunningAbility: number = undefined;
let newStrengthAbililty: number = undefined;

function addDynamicInputFieldsEventListener(textCellID: string, inputElement: any): void {

    inputElement.addEventListener("change", function() {
        if (textCellID === 'new_swimming_ability') {
            if(isNumberBetween1and100(inputElement.value)) {
                newSwimmingAbility = parseInt(inputElement.value, 10);
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }

        else if (textCellID === 'new_language') {
            if(isValidWord(inputElement.value)) {
                newLanguage = inputElement.value;
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }

        else if (textCellID === 'new_running_ability') {
            if(isNumberBetween1and100(inputElement.value)) {
                newRunningAbility = parseInt(inputElement.value, 10);
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }

        else if (textCellID === 'new_strength_ability') {
            if(isNumberBetween1and10(inputElement.value)) {
                newStrengthAbililty = parseInt(inputElement.value, 10);
                if(allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }
    });
}

function isNumberBetween1and100(value: string): boolean {
    const parsedValue = parseInt(value, 10);
    const alert = "Input must be a number between 0 - 100.";

    if(!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
        return true;
    } else {
        window.alert(alert);
        return false;
    }
}

function isNumberBetween1and10(value: string): boolean {
    const parsedValue = parseInt(value, 10);
    const alert = "Input must be a number between 0 - 10.";

    if(!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 10) {
        return true;
    } else {
        window.alert(alert);
        return false;
    }
}

function isValidWord(word: string): boolean {
    const parsedValue = parseInt(word, 10);
    const alert = "Input must be a valid word.";

    if (!isNaN(parsedValue)) {
        window.alert(alert);
        return false;
    } else {
        return true;
    }
}

function isDistinctPersonality(personality: string): boolean {
    const storedPigs = PigsArray.getAll();
    let isDistinct = true;

    for (const item of storedPigs) {
        if (item.distinct_personality === personality) {
            const alert = `${item.name} already has this personality.`;
            window.alert(alert);
            isDistinct = false;
            break;
        }
    }

    return isDistinct;
}

function allValuesHaveBeenProvided(): boolean {
    if (
        newName && newBreed && newHeight && newWeight && newPersonality && newCategory &&
        (newSwimmingAbility || newLanguage || newRunningAbility || newStrengthAbililty)
    ) {
        return true;
    } else {
        return false;
    }
}

let PigsArray = new PigsController();

function addThePig(): void {

    // The case where the selected pig is Grey.
    if(newSwimmingAbility) {
        const newGreyPig = new Grey(newName, newBreed, newHeight, 
            newWeight, newPersonality, newCategory, newSwimmingAbility);
        
        PigsArray.add(newGreyPig);

        addThePigToTheTable(newGreyPig);
    }

    // The case of Chestnut.
    else if(newLanguage) {
        const newChestnutPig = new Chestnut(newName, newBreed, newHeight, 
            newWeight, newPersonality, newCategory, newLanguage);

        PigsArray.add(newChestnutPig);

        addThePigToTheTable(newChestnutPig);
    }

    // The case of White.
    else if(newRunningAbility) {
        const newWhitePig = new White(newName, newBreed, newHeight, 
            newWeight, newPersonality, newCategory, newRunningAbility);

        PigsArray.add(newWhitePig);
        
        addThePigToTheTable(newWhitePig);
    }

    // The case of Black.
    else if(newStrengthAbililty) {
        const newBlackPig = new Black(newName, newBreed, newHeight, 
            newWeight, newPersonality, newCategory, newStrengthAbililty);

        PigsArray.add(newBlackPig);
        
        addThePigToTheTable(newBlackPig);
    }
}

function addThePigToTheTable(Pig: any): void {
    const mainTableBody = document.querySelector('#main_table').querySelector('tbody');

    const newRow = document.createElement('tr');

    // Creating the cell which contains the name of the new pig.
    const nameCell = document.createElement('td');
    nameCell.textContent = Pig.name;
    newRow.appendChild(nameCell);

    // Creating the cell which contains the category of the new pig.
    const categoryCell = document.createElement('td');
    categoryCell.textContent = Pig.category;
    newRow.appendChild(categoryCell);

    // Creating the cell which contains the link to delete the pig.
    const deleteCell = document.createElement('td');
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = "Remove";
    addEventListenerForDeleteAnchor(deleteLink, Pig);
    deleteCell.appendChild(deleteLink);
    newRow.appendChild(deleteCell);

    // Creating the cell which conatins the link to show more info about the pig.
    const moreInfoCell = document.createElement('td');
    const moreInfoLink = document.createElement('a');
    moreInfoLink.href = '#';
    moreInfoLink.textContent = "More Information";
    addEventListenerForMoreInfoAnchor(moreInfoLink, Pig);
    moreInfoCell.appendChild(moreInfoLink);
    newRow.appendChild(moreInfoCell);

    mainTableBody.appendChild(newRow);

    disappearTheAddtable();
}

function disappearTheAddtable(): void {
    const addNewContainer = document.querySelector('#add_new_flex');

    // Clearing the input fields for the next pig addititon.
    const inputElements = document.querySelectorAll<HTMLInputElement>
    ('#new_name, #new_breed, #new_height, #new_weight, #new_personality, #new_category');
    inputElements.forEach(item => {
        item.value = "";
    });

    const dynamicInputElements = document.querySelectorAll<HTMLInputElement>
    ('#new_swimming_ability, new_language, new_running_ability, new_strength_ability');
    dynamicInputElements.forEach(item => {
        if(item) {
            item.value = "";
        }
    });

    // Remove the last row.
    handleAdditionalRow();

    // Set all the new variables back to undefined for a new addition.
    newName = undefined;
    newBreed = undefined;
    newHeight = undefined;
    newWeight = undefined;
    newPersonality = undefined;
    newCategory = undefined
    newSwimmingAbility = undefined;
    newLanguage = undefined;
    newRunningAbility = undefined;
    newStrengthAbililty = undefined;

    // Disappearing the add table which appear again when the add button is clicked.
    addNewContainer.setAttribute("style", "display: none;");
}

function  addEventListenerForDeleteAnchor(deleteLink: HTMLAnchorElement, Pig: any) {

    deleteLink.addEventListener("click", function(){
        const userConfirmed = window.confirm(`Are you sure you want to remove ${Pig.name}?`);
        const mainTableBody = document.querySelector('#main_table').querySelector('tbody');
        const moreInfoContainer = document.querySelector('#more_info_flex');

        if (userConfirmed) {
            const rows = mainTableBody.querySelectorAll('tr');
            rows.forEach((row) => {
                const cells = row.querySelectorAll('td');
                if (cells[0].textContent === Pig.name) {
                    mainTableBody.removeChild(row);

                    // We also need to delete the pig from are pigs array.
                    PigsArray.delete(Pig);

                    deletePreviousRows();
                    moreInfoContainer.setAttribute("style", "display: none;");
                }
            });
        } 
    });
}

function addEventListenerForMoreInfoAnchor(moreInfoLink: HTMLAnchorElement, Pig: any): void {
    const moreInfoContainer = document.querySelector('#more_info_flex');
    const moreInfoTableBody = document.querySelector('#more_info_table').querySelector('tbody');
    const fieldElements: string[] = ["Name", "Breed", "Height", "Weight", "Personality", "Category"];

    moreInfoLink.addEventListener("click", function() {

        // If the more info table has rows delete them for the new display.
        deletePreviousRows();

        // Adding the generic rows into the info table.
        fieldElements.forEach(item => {
            const newRow = document.createElement('tr');

            const newCellField = document.createElement('td');
            newCellField.textContent = item;
            newRow.appendChild(newCellField);

            const newCellValue = document.createElement('td');
            switch (item) {
                case "Name":
                    newCellValue.textContent = Pig.name;
                    break;
                case "Breed":
                    newCellValue.textContent = Pig.breed;
                    break;
                case "Height":
                    newCellValue.textContent = Pig.height;
                    break;
                case "Weight":
                    newCellValue.textContent = Pig.weight;
                    break;
                case "Personality":
                    newCellValue.textContent = Pig.distinct_personality;
                    break;
                case "Category":
                    console.log(Pig.category);
                    newCellValue.textContent = Pig.category;
                    break;
            }

            newRow.appendChild(newCellValue);
            moreInfoTableBody.appendChild(newRow);
        });

        // Adding the dynamic rows into the more info table.
        const newDynamicRow = document.createElement('tr');
        const newDynamicCellField = document.createElement('td');
        const newDynamicCellValue = document.createElement('td');

        if (Pig.category === "Grey") {
            newDynamicCellField.textContent = "Swimming Ability";
            newDynamicCellValue.textContent = Pig.swimming_ability;

            newDynamicRow.appendChild(newDynamicCellField);
            newDynamicRow.appendChild(newDynamicCellValue);
            moreInfoTableBody.appendChild(newDynamicRow);
        }
        else if (Pig.category === "Chestnut") {
            newDynamicCellField.textContent = "Language";
            newDynamicCellValue.textContent = Pig.language;

            newDynamicRow.appendChild(newDynamicCellField);
            newDynamicRow.appendChild(newDynamicCellValue);
            moreInfoTableBody.appendChild(newDynamicRow);
        }
        else if (Pig.category === "White") {
            newDynamicCellField.textContent = "Running Ability";
            newDynamicCellValue.textContent = Pig.running_ability;

            newDynamicRow.appendChild(newDynamicCellField);
            newDynamicRow.appendChild(newDynamicCellValue);
            moreInfoTableBody.appendChild(newDynamicRow);
        }
        else if (Pig.category === "Black") {
            newDynamicCellField.textContent = "Strength Ability";
            newDynamicCellValue.textContent = Pig.strength_ability;

            newDynamicRow.appendChild(newDynamicCellField);
            newDynamicRow.appendChild(newDynamicCellValue);
            moreInfoTableBody.appendChild(newDynamicRow);
        }

        // Make the table visibile.
        moreInfoContainer.setAttribute("style", "display: block;")
    });
}

function deletePreviousRows(): void {
    const moreInfoTableBody = document.querySelector('#more_info_table').querySelector('tbody');

    const rows = moreInfoTableBody.querySelectorAll('tr');

    if (rows.length > 1) {
        while (moreInfoTableBody.firstChild) {
            moreInfoTableBody.removeChild(moreInfoTableBody.firstChild);
        }
    }
}

function populateTheTable(): void {
    const storedPigs: any[] = PigsArray.getAll();
    
    storedPigs.forEach(item => {
        addThePigToTheTable(item);
    });
}