// Selecting all the elements related to options buttons
let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");

// Selecting various UI elements related to text styling options
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");

// Buttons for link creation, text alignment, spacing, formatting, and script
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// List of font options for the user to choose from
let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "cursive"];

// Initial Settings
const initializer = () => {
    // function calls for highlighting buttons
    // No highlights for link, unlink, lists, undo, redo, since they are one-time operations
    highlighter(alignButtons, true); // Align buttons allow only one selection at a time
    highlighter(spacingButtons, true); // Spacing buttons allow only one selection at a time
    highlighter(formatButtons, false); // Format buttons allow multiple selections
    highlighter(scriptButtons, true); // Script buttons allow only one selection at a time

    // Populate font name options in the dropdown list
    fontList.map(value => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    // Populate font size options (1-7) in the dropdown list
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    // Set default font size to 3
    fontSizeRef.value = 3;
};

// Main logic for modifying text based on button clicks
const modifyText = (command, defaultUi, value) => {
    // Executes the given command on the selected text
    document.execCommand(command, defaultUi, value);
};

// Event listeners for basic operations that don't require additional values
optionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null); // Execute the command for the respective button
    });
});

// Event listeners for options that require a value parameter (e.g., colors, fonts)
advancedOptionButton.forEach(button => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value); // Execute the command with the selected value
    });
});

// Link creation button event listener
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");

    // If the link has 'http' in it, pass it directly; otherwise, add 'https'
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink); // Pass the complete URL to the modifyText function
    }
});

// Function to highlight the clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            // If 'needsRemoval' is true, only one button can be highlighted at a time
            if (needsRemoval) {
                let alreadyActive = false;

                // If the clicked button is already active, prevent highlighting
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                // Remove the highlight from other buttons
                highlighterRemover(className);
                if (!alreadyActive) {
                    // Highlight the clicked button
                    button.classList.add("active");
                }
            } else {
                // If multiple buttons can be highlighted, toggle the 'active' class
                button.classList.toggle("active");
            }
        });
    });
};

// Function to remove highlights from all buttons
const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

// Initialize settings when the page is loaded
window.onload = initializer();



// Some Images to be used for post, when user create any blog , randomly select images from this based on the blog category
const HealthImages = [
    "images/health00.jpg",
    "images/health01.jpg",
    "images/health02.jpg",
    "images/health03.jpg",
    "images/health04.jpg"
]


const TechImages = [
    "images/tech00.jpg",
    "images/tech01.jpg",
    "images/tech02.jpg",
    "images/tech03.jpg",
    "images/tech04.jpg"
]

const FinanceImages = [
    "images/finance00.jpg",
    "images/finance01.jpg",
    "images/finance02.jpg",
    "images/finance03.jpg",
    "images/finance04.jpg"
]
const FoodImages = [
    "images/food00.jpg",
    "images/food01.jpg",
    "images/food02.jpg",
    "images/food03.jpg",
    "images/food04.jpg",
]
const TravelImages = [
    "images/travel00.jpg",
    "images/travel01.jpg",
    "images/travel02.jpg",
    "images/travel03.jpg",
    "images/travel04.jpg"
]

const NatureImages = [
    "images/nature00.jpg",
    "images/nature01.jpg",
    "images/nature02.jpg",
    "images/nature03.jpg",
    "images/nature04.jpg",
]


const AuthorImages = [
    "images/author00.jpg",
    "images/author01.jpg",
    "images/author02.jpg",
    "images/author03.jpg",
    "images/author04.jpg",
]


// Get references to blog title, description, and post button elements
const blogTitle = document.getElementById('blog-title');
const blogDescription = document.getElementById('blog-description');
const postBlogBtn = document.getElementById('post-blog');

// Event listener for the "Post Blog" button
postBlogBtn.addEventListener('click', (event) => {
    // Prevent form submission if necessary (commented out here)
    // event.preventDefault();

    // Get the values entered by the user in the title and description fields
    const titleValue = blogTitle.value;

    // Check if the title is empty, if so, show an alert and stop execution
    if (titleValue === "") {
        alert("Please! Add Title for Your Blog");
        return;
    }

    const descriptionValue = blogDescription.value;

    // Check if the description is empty, if so, show an alert and stop execution
    if (descriptionValue === "") {
        alert("please! add Description for your blog");
        return;
    }

    // Get the selected category from the dropdown
    const categoryValue = categoryDropdown.value;

    // Get the current date to display in the post
    const date = new Date().toDateString();
    console.log(date);

    // Generate a random index to choose an image for the author and post category
    const randomIndex = Math.floor(Math.random() * 5);
    console.log(randomIndex);

    // Select the author image based on the random index
    const authorImg = AuthorImages[randomIndex];

    // Choose an image based on the category selected
    let randomImg;
    if (categoryValue === "Tech") {
        randomImg = TechImages[randomIndex];
    } else if (categoryValue === "Health") {
        randomImg = HealthImages[randomIndex];
    } else if (categoryValue === "Finance") {
        randomImg = FinanceImages[randomIndex];
    } else if (categoryValue === "Food") {
        randomImg = FoodImages[randomIndex];
    } else if (categoryValue === "Travel") {
        randomImg = TravelImages[randomIndex];
    } else if (categoryValue === "Nature") {
        randomImg = NatureImages[randomIndex];
    } else {
        // Default image if no category is matched
        randomImg = "images/tech1.jpg";
    }

    // Create a new blog object with all the data collected
    const obj = {
        data_id: Date.now(), // unique ID based on current time
        image: randomImg, // selected image based on category
        category: categoryValue, // selected category
        title: titleValue, // title entered by the user
        postDate: date, // current date
        description: descriptionValue, // description entered by the user
        profile: {
            image: authorImg, // author image based on random selection
            name: "Saurav Kumar" // static author name
        }
    }

    // Call the function to save the blog data to local storage
    saveBlogsToLocalStorage(obj);

    // Show a success alert and redirect the user
    alert("Blog Posted");
    window.location.href = "index.html"; // Redirect to the home page
});

// Function to save blog data to local storage
function saveBlogsToLocalStorage(blogData) {
    // Retrieve existing blogs from local storage or initialize an empty array
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // Add the new blog object to the blogs array
    blogs.push(blogData);

    // Save the updated array back to local storage
    localStorage.setItem('blogs', JSON.stringify(blogs));
}


// Get references to the theme style link, toggle button, and theme icon
const themeStyle = document.getElementById('theme-style');
const toggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('themeIcon');

// Check localStorage for saved theme preference (defaults to light theme)
const savedTheme = localStorage.getItem('theme') || 'light';

// Change the theme icon based on the saved theme
if (savedTheme === "light") {
    themeIcon.classList.remove('fa-moon'); // Remove moon icon
    themeIcon.classList.add('fa-sun'); // Add sun icon for light mode
} else {
    themeIcon.classList.remove('fa-sun'); // Remove sun icon
    themeIcon.classList.add('fa-moon'); // Add moon icon for dark mode
}

// Apply the saved theme when the page loads
if (savedTheme === 'dark') {
    themeStyle.href = 'editorDark.css'; // Apply dark theme
} else {
    themeStyle.href = 'editor.css'; // Apply light theme
}

// Event listener to toggle the theme when the button is clicked
toggleButton.addEventListener('click', () => {
    // If the current theme is light, switch to dark
    if (themeStyle.href.includes('editor.css')) {
        themeStyle.href = 'editorDark.css'; // Change to dark theme
        themeIcon.classList.remove('fa-sun'); // Remove sun icon
        themeIcon.classList.add('fa-moon'); // Add moon icon for dark mode
        localStorage.setItem('theme', 'dark'); // Save dark theme preference
    } else {
        // If the current theme is dark, switch to light
        themeStyle.href = 'editor.css'; // Change to light theme
        themeIcon.classList.remove('fa-moon'); // Remove moon icon
        themeIcon.classList.add('fa-sun'); // Add sun icon for light mode
        localStorage.setItem('theme', 'light'); // Save light theme preference
    }
});




// References to DOM elements used in the notes widget
const widget = document.getElementById('notes-widget'); // Main notes widget container
const notesHeader = document.getElementById('notes-header'); // Header of the widget (used for dragging)
const toggleBtn = document.getElementById('toggle-widget'); // Button to toggle widget visibility
const notesBody = document.getElementById('notes-body'); // Body of the widget containing notes
const notesList = document.getElementById('notes-list'); // List where notes are displayed
const noteInput = document.getElementById('note-input'); // Input field to enter new notes
const addNoteBtn = document.getElementById('add-note-btn'); // Button to add a new note


// Toggle widget visibility (show/hide the notes body)
toggleBtn.addEventListener('click', () => {
  if (notesBody.style.display === 'none' || !notesBody.style.display) {
    // If notes body is hidden or undefined, show it
    notesBody.style.display = 'block'; 
    toggleBtn.textContent = '-'; // Update button text to indicate the widget can be collapsed
  } else {
    // If notes body is visible, hide it
    notesBody.style.display = 'none'; 
    toggleBtn.textContent = '+'; // Update button text to indicate the widget can be expanded
  }
});

// Load saved notes from local storage when the page loads
window.onload = function () {
  // Get saved notes from local storage or initialize as an empty array if none exist
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  // Loop through each saved note and display it on the widget
  savedNotes.forEach(note => displayNote(note));
};

// Add a new note when the "Add Note" button is clicked
addNoteBtn.addEventListener('click', () => {
  const noteText = noteInput.value.trim(); // Get and trim the input value
  if (noteText === '') { // If the input is empty, show an alert
    alert('Note cannot be empty!');
    return;
  }
  displayNote(noteText); // Display the new note
  saveNoteToLocalStorage(noteText); // Save the note to local storage
  noteInput.value = ''; // Clear the input field after saving
});

// Display a single note in the notes list
function displayNote(noteText) {
  const noteDiv = document.createElement('div'); // Create a div for the note
  noteDiv.classList.add('note'); // Add the 'note' class for styling
  noteDiv.textContent = noteText; // Set the text of the note

  // Create a delete button for the note
  const deleteNote = document.createElement('button');
  deleteNote.textContent = 'X'; // Set the delete button text
  deleteNote.onclick = () => {
    // When delete button is clicked, remove the note from the list and local storage
    notesList.removeChild(noteDiv); 
    deleteNoteFromLocalStorage(noteText); 
  };

  noteDiv.appendChild(deleteNote); // Add the delete button to the note div
  notesList.appendChild(noteDiv); // Add the note to the notes list in the DOM
}

// Save a note to local storage
function saveNoteToLocalStorage(noteText) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve existing notes or initialize an empty array
  savedNotes.push(noteText); // Add the new note to the array
  localStorage.setItem('notes', JSON.stringify(savedNotes)); // Save the updated array to local storage
}

// Delete a note from local storage
function deleteNoteFromLocalStorage(noteText) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve existing notes
  // Filter out the note to delete and create an updated array
  const updatedNotes = savedNotes.filter(note => note !== noteText); 
  localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Save the updated array to local storage
  alert("Notes Deleted Successfully!!!"); // Show a success message after deletion
}

// Make the widget draggable by tracking mouse movements
let isDragging = false; // Boolean to track if the widget is being dragged
let offsetX, offsetY; // Variables to store mouse offset from the widget's position

// Start dragging when the mouse is pressed on the widget's header
notesHeader.addEventListener('mousedown', (event) => {
  isDragging = true; // Set dragging state to true when mouse is pressed
  offsetX = event.clientX - widget.offsetLeft; // Calculate the horizontal offset
  offsetY = event.clientY - widget.offsetTop; // Calculate the vertical offset
});

// Move the widget as the mouse moves during dragging
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    // Update the widget's position based on mouse movement and offsets
    widget.style.left = `${e.clientX - offsetX}px`; 
    widget.style.top = `${e.clientY - offsetY}px`; 
  }
});

// Stop dragging when the mouse button is released
document.addEventListener('mouseup', () => {
  isDragging = false; // Set dragging state to false when mouse button is released
});




// handle hamburger (navbar For Small Devices )

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
})

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    // Check if the click happened outside the menu and hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });