document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById("myDropdown");
    
    dropdown.addEventListener("change", function () {
        let selectedOption = dropdown.options[dropdown.selectedIndex];
        let optionColors = {
            option1: "rgb(232, 241, 175)",
            option2: "rgb(175, 239, 241)",
            option3: "rgb(183, 241, 175)",
            option4: "rgb(247, 204, 196)", 
            option5: "rgb(236, 214, 184)", 
        };
    dropdown.style.backgroundColor = optionColors[selectedOption.value] || "white";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById("myDropdown1");
    
    dropdown.addEventListener("change", function () {
        let selectedOption = dropdown.options[dropdown.selectedIndex];
        let optionColors = {
            option1: "rgb(232, 241, 175)",
            option2: "rgb(175, 239, 241)",
            option3: "rgb(183, 241, 175)",
            option4: "rgb(247, 204, 196)", 
            option5: "rgb(236, 214, 184)", 
        };
    dropdown.style.backgroundColor = optionColors[selectedOption.value] || "white";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById("myDropdown2");
    
    dropdown.addEventListener("change", function () {
        let selectedOption = dropdown.options[dropdown.selectedIndex];
        let optionColors = {
            option1: "rgb(232, 241, 175)",
            option2: "rgb(175, 239, 241)",
            option3: "rgb(183, 241, 175)",
            option4: "rgb(247, 204, 196)", 
            option5: "rgb(236, 214, 184)", 
        };
    dropdown.style.backgroundColor = optionColors[selectedOption.value] || "white";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.getElementById("myDropdown3");
    
    dropdown.addEventListener("change", function () {
        let selectedOption = dropdown.options[dropdown.selectedIndex];
        let optionColors = {
            option1: "rgb(232, 241, 175)",
            option2: "rgb(175, 239, 241)",
            option3: "rgb(183, 241, 175)",
            option4: "rgb(247, 204, 196)", 
            option5: "rgb(236, 214, 184)", 
        };
    dropdown.style.backgroundColor = optionColors[selectedOption.value] || "white";
    });
});