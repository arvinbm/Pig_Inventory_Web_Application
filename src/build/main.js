import { PigsController } from "./PigsController.js";
import { Grey, Chestnut, White, Black } from "./Pigs.js";
window.onload = function () {
    // Populate the main table with objects from the storage.
    populateTheTable();
    // Add the event listener for the add button.
    addEventListenerForAddButton();
};
// Constants holding the inputs.
var newName = undefined;
var newBreed = undefined;
var newHeight = undefined;
var newWeight = undefined;
var newPersonality = undefined;
var newCategory = undefined;
function addEventListenerForAddButton() {
    // IDs of HTML elements.
    var addButtonID = document.querySelector('#add_button');
    var addNewContainer = document.querySelector('#add_new_flex');
    var moreInfoContainer = document.querySelector('#more_info_flex');
    var newNameInput = document.querySelector('#new_name');
    var newBreedInput = document.querySelector('#new_breed');
    var newHeightInput = document.querySelector('#new_height');
    var newWeightInput = document.querySelector('#new_weight');
    var newPersonalityInput = document.querySelector('#new_personality');
    var newCategoryInput = document.querySelector('#new_category');
    addButtonID.addEventListener("click", handleAddButtonClick);
    function handleAddButtonClick() {
        // Make the table for adding a new pig visible to the user.
        addNewContainer.setAttribute("style", "display: block;");
        deletePreviousRows();
        moreInfoContainer.setAttribute("style", "display: none;");
        // Set event listeners for inputs in the table.
        newNameInput.addEventListener("change", function () {
            newName = newNameInput.value;
            if (allValuesHaveBeenProvided()) {
                addThePig();
            }
        });
        newBreedInput.addEventListener("change", function () {
            if (isValidWord(newBreedInput.value)) {
                newBreed = newBreedInput.value;
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        });
        newHeightInput.addEventListener("change", function () {
            newHeight = newHeightInput.value;
            if (allValuesHaveBeenProvided()) {
                addThePig();
            }
        });
        newWeightInput.addEventListener("change", function () {
            newWeight = newWeightInput.value;
            if (allValuesHaveBeenProvided()) {
                addThePig();
            }
        });
        newPersonalityInput.addEventListener("change", function () {
            if (isValidWord(newPersonalityInput.value) && isDistinctPersonality(newPersonalityInput.value)) {
                newPersonality = newPersonalityInput.value;
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        });
        newCategoryInput.addEventListener("change", function () {
            newCategory = newCategoryInput.value;
            // Add the dynamic row based on the selected pig type.
            addTheDynamicRowForNewTable(newCategory);
        });
    }
}
function addTheDynamicRowForNewTable(newCategory) {
    var tableBody = document.querySelector('#add_new_table').querySelector('tbody');
    // If the table has a dynamic row, due to previous pig type selection delete it.
    handleAdditionalRow();
    // Creating the dynamic row which includes two td.
    var newRow = document.createElement('tr');
    // Creating the dynamic text field.
    var textCell = document.createElement('td');
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
    var inputCell = document.createElement('td');
    var inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputCell.appendChild(inputElement);
    newRow.appendChild(inputCell);
    // Adding the dynamic row into the table.
    tableBody.appendChild(newRow);
    // Add the event listeners for the dynamic input fields
    addDynamicInputFieldsEventListener(textCell.id, inputElement);
}
function handleAdditionalRow() {
    var tableBody = document.querySelector('#add_new_table').querySelector('tbody');
    var rows = tableBody.querySelectorAll('tr');
    // If the length of the table is longer than 5 rows delete the last row.
    if (rows.length > 6) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
}
// Constants holding the inputs.
var newSwimmingAbility = undefined;
var newLanguage = undefined;
var newRunningAbility = undefined;
var newStrengthAbililty = undefined;
function addDynamicInputFieldsEventListener(textCellID, inputElement) {
    inputElement.addEventListener("change", function () {
        if (textCellID === 'new_swimming_ability') {
            if (isNumberBetween1and100(inputElement.value)) {
                newSwimmingAbility = parseInt(inputElement.value, 10);
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }
        else if (textCellID === 'new_language') {
            if (isValidWord(inputElement.value)) {
                newLanguage = inputElement.value;
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }
        else if (textCellID === 'new_running_ability') {
            if (isNumberBetween1and100(inputElement.value)) {
                newRunningAbility = parseInt(inputElement.value, 10);
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }
        else if (textCellID === 'new_strength_ability') {
            if (isNumberBetween1and10(inputElement.value)) {
                newStrengthAbililty = parseInt(inputElement.value, 10);
                if (allValuesHaveBeenProvided()) {
                    addThePig();
                }
            }
        }
    });
}
function isNumberBetween1and100(value) {
    var parsedValue = parseInt(value, 10);
    var alert = "Input must be a number between 0 - 100.";
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 100) {
        return true;
    }
    else {
        window.alert(alert);
        return false;
    }
}
function isNumberBetween1and10(value) {
    var parsedValue = parseInt(value, 10);
    var alert = "Input must be a number between 0 - 10.";
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 10) {
        return true;
    }
    else {
        window.alert(alert);
        return false;
    }
}
function isValidWord(word) {
    var parsedValue = parseInt(word, 10);
    var alert = "Input must be a valid word.";
    if (!isNaN(parsedValue)) {
        window.alert(alert);
        return false;
    }
    else {
        return true;
    }
}
function isDistinctPersonality(personality) {
    var storedPigs = PigsArray.getAll();
    var isDistinct = true;
    for (var _i = 0, storedPigs_1 = storedPigs; _i < storedPigs_1.length; _i++) {
        var item = storedPigs_1[_i];
        if (item.distinct_personality === personality) {
            var alert_1 = "".concat(item.name, " already has this personality.");
            window.alert(alert_1);
            isDistinct = false;
            break;
        }
    }
    return isDistinct;
}
function allValuesHaveBeenProvided() {
    if (newName && newBreed && newHeight && newWeight && newPersonality && newCategory &&
        (newSwimmingAbility || newLanguage || newRunningAbility || newStrengthAbililty)) {
        return true;
    }
    else {
        return false;
    }
}
var PigsArray = new PigsController();
function addThePig() {
    // The case where the selected pig is Grey.
    if (newSwimmingAbility) {
        var newGreyPig = new Grey(newName, newBreed, newHeight, newWeight, newPersonality, newCategory, newSwimmingAbility);
        PigsArray.add(newGreyPig);
        addThePigToTheTable(newGreyPig);
    }
    // The case of Chestnut.
    else if (newLanguage) {
        var newChestnutPig = new Chestnut(newName, newBreed, newHeight, newWeight, newPersonality, newCategory, newLanguage);
        PigsArray.add(newChestnutPig);
        addThePigToTheTable(newChestnutPig);
    }
    // The case of White.
    else if (newRunningAbility) {
        var newWhitePig = new White(newName, newBreed, newHeight, newWeight, newPersonality, newCategory, newRunningAbility);
        PigsArray.add(newWhitePig);
        addThePigToTheTable(newWhitePig);
    }
    // The case of Black.
    else if (newStrengthAbililty) {
        var newBlackPig = new Black(newName, newBreed, newHeight, newWeight, newPersonality, newCategory, newStrengthAbililty);
        PigsArray.add(newBlackPig);
        addThePigToTheTable(newBlackPig);
    }
}
function addThePigToTheTable(Pig) {
    var mainTableBody = document.querySelector('#main_table').querySelector('tbody');
    var newRow = document.createElement('tr');
    // Creating the cell which contains the name of the new pig.
    var nameCell = document.createElement('td');
    nameCell.textContent = Pig.name;
    newRow.appendChild(nameCell);
    // Creating the cell which contains the category of the new pig.
    var categoryCell = document.createElement('td');
    categoryCell.textContent = Pig.category;
    newRow.appendChild(categoryCell);
    // Creating the cell which contains the link to delete the pig.
    var deleteCell = document.createElement('td');
    var deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = "Remove";
    addEventListenerForDeleteAnchor(deleteLink, Pig);
    deleteCell.appendChild(deleteLink);
    newRow.appendChild(deleteCell);
    // Creating the cell which conatins the link to show more info about the pig.
    var moreInfoCell = document.createElement('td');
    var moreInfoLink = document.createElement('a');
    moreInfoLink.href = '#';
    moreInfoLink.textContent = "More Information";
    addEventListenerForMoreInfoAnchor(moreInfoLink, Pig);
    moreInfoCell.appendChild(moreInfoLink);
    newRow.appendChild(moreInfoCell);
    mainTableBody.appendChild(newRow);
    disappearTheAddtable();
}
function disappearTheAddtable() {
    var addNewContainer = document.querySelector('#add_new_flex');
    // Clearing the input fields for the next pig addititon.
    var inputElements = document.querySelectorAll('#new_name, #new_breed, #new_height, #new_weight, #new_personality, #new_category');
    inputElements.forEach(function (item) {
        item.value = "";
    });
    var dynamicInputElements = document.querySelectorAll('#new_swimming_ability, new_language, new_running_ability, new_strength_ability');
    dynamicInputElements.forEach(function (item) {
        if (item) {
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
    newCategory = undefined;
    newSwimmingAbility = undefined;
    newLanguage = undefined;
    newRunningAbility = undefined;
    newStrengthAbililty = undefined;
    // Disappearing the add table which appear again when the add button is clicked.
    addNewContainer.setAttribute("style", "display: none;");
}
function addEventListenerForDeleteAnchor(deleteLink, Pig) {
    deleteLink.addEventListener("click", function () {
        var userConfirmed = window.confirm("Are you sure you want to remove ".concat(Pig.name, "?"));
        var mainTableBody = document.querySelector('#main_table').querySelector('tbody');
        var moreInfoContainer = document.querySelector('#more_info_flex');
        if (userConfirmed) {
            var rows = mainTableBody.querySelectorAll('tr');
            rows.forEach(function (row) {
                var cells = row.querySelectorAll('td');
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
function addEventListenerForMoreInfoAnchor(moreInfoLink, Pig) {
    var moreInfoContainer = document.querySelector('#more_info_flex');
    var moreInfoTableBody = document.querySelector('#more_info_table').querySelector('tbody');
    var fieldElements = ["Name", "Breed", "Height", "Weight", "Personality", "Category"];
    moreInfoLink.addEventListener("click", function () {
        // If the more info table has rows delete them for the new display.
        deletePreviousRows();
        // Adding the generic rows into the info table.
        fieldElements.forEach(function (item) {
            var newRow = document.createElement('tr');
            var newCellField = document.createElement('td');
            newCellField.textContent = item;
            newRow.appendChild(newCellField);
            var newCellValue = document.createElement('td');
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
        var newDynamicRow = document.createElement('tr');
        var newDynamicCellField = document.createElement('td');
        var newDynamicCellValue = document.createElement('td');
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
        moreInfoContainer.setAttribute("style", "display: block;");
    });
}
function deletePreviousRows() {
    var moreInfoTableBody = document.querySelector('#more_info_table').querySelector('tbody');
    var rows = moreInfoTableBody.querySelectorAll('tr');
    if (rows.length > 1) {
        while (moreInfoTableBody.firstChild) {
            moreInfoTableBody.removeChild(moreInfoTableBody.firstChild);
        }
    }
}
function populateTheTable() {
    var storedPigs = PigsArray.getAll();
    storedPigs.forEach(function (item) {
        addThePigToTheTable(item);
    });
}
