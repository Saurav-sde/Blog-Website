let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");

let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

// list of fontlist
let fontList = ["Arial","Verdana","Times New Roman","Garamond", "Georgia", "Courier New", "cursive"];

// Initial Settings
const initializer = ()=>{
    // function calls for highlighting buttons
    // No highlights for link,unlink,lists,undo,redo,since they are one time opearations
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // create options for font names
    fontList.map(value =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    })

    // fontsize allows only till 7
    for(let i=1;i<=7;i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    //default Size
    fontSizeRef.value = 3;
}


// main logic
const modifyText = (command,defaultUi, value) =>{
    // execCommand executes command on selected text
    document.execCommand(command,defaultUi,value);
};


// For basic Operations which dont need value
optionsButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        modifyText(button.id, false, null);
    })
})

//optionas that are require value parameter(eg colors,fonts)
advancedOptionButton.forEach(button => {
    button.addEventListener('change',()=>{
        modifyText(button.id, false, button.value);
    })
})

// link
linkButton.addEventListener("click",()=>{
    let userLink = prompt("enter a url");

    // if link has http then pass directly else add https
    if(/http/i.test(userLink)) {
        modifyText(linkButton.id,false, userLink)
    }
    else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id,false,linkButton);
    }
})


// highlight clicked button
const highlighter = (className, needsRemoval)=>{
    className.forEach((button) => {
        button.addEventListener("click",()=>{
            // needsRemoval = true means only one button should be highlight and other would be normal
            if(needsRemoval){
                let alreadyActive = false;

                // if currently clicked button is already active
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

                // Remove highlight from other buttons
                highlighterRemover(className);
                if(!alreadyActive){
                    // highlight clicked button
                    button.classList.add("active");
                }
            }
            else {
                // if other buttons can be highlighted
                button.classList.toggle("active");
            }
        })
    });
}

const highlighterRemover = (className) =>{
    className.forEach((button)=>{
        button.classList.remove("active");
    })
}



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


const blogTitle = document.getElementById('blog-title'); 
const blogDescription = document.getElementById('blog-description');
const postBlogBtn = document.getElementById('post-blog');

postBlogBtn.addEventListener('click',(event)=>{
    // event.preventDefault();
    const titleValue = blogTitle.value;
    if(titleValue === "")
    {
        alert("Please! Add Title for Your Blog");
        return;
    }
    const descriptionValue = blogDescription.value;
    if(descriptionValue === "")
    {
        alert("please! add Description for your blog");
        return;
    }
    const categoryValue = categoryDropdown.value;

    const date = new Date().toDateString();
    console.log(date);
    
    const randomIndex = Math.floor(Math.random() * 5);
    console.log(randomIndex);

    const authorImg = AuthorImages[randomIndex];
    let randomImg;
    if(categoryValue === "Tech"){
        randomImg = TechImages[randomIndex];
    } else if(categoryValue === "Health"){
        randomImg = HealthImages[randomIndex];
    } else if(categoryValue === "Finance") {
        randomImg = FinanceImages[randomIndex];
    } else if(categoryValue === "Food") {
        randomImg = FoodImages[randomIndex];
    } else if(categoryValue === "Travel"){
        randomImg = TravelImages[randomIndex];
    } else if(categoryValue === "Nature"){
        randomImg = NatureImages[randomIndex];
    } else {
        randomImg = "images/tech1.jpg"
    }
     

    const obj = {
        data_id:Date.now(),
        image: randomImg,
        category: categoryValue,
        title : titleValue,
        postDate : date,
        description: descriptionValue,
        profile: {
            image: authorImg,
            name: "Saurav Kumar"
        }
    }

    saveBlogsToLocalStorage(obj);
    alert("Blog Posted");
    window.location.href = "index.html";
})

// save Blog to local storage
function saveBlogsToLocalStorage(blogData){
    // check if blogs array exists in local storage
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

    // add new blog object to the array
    blogs.push(blogData);

    // save the updated array back to the local storage
    localStorage.setItem('blogs', JSON.stringify(blogs));
}



// Get references to the theme link element and toggle button
const themeStyle = document.getElementById('theme-style');
const toggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('themeIcon');

// Check localStorage for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';

// changing theme icon based on local storage
if(savedTheme === "light") {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
} else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Apply the saved theme on load
if(savedTheme === 'dark')
    themeStyle.href = 'editorDark.css';
else
    themeStyle.href = 'editor.css';

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    if (themeStyle.href.includes('editor.css')) {
        themeStyle.href = 'editorDark.css';
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        themeStyle.href = 'editor.css';
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});


// notes feature
const widget = document.getElementById('notes-widget');
const notesHeader = document.getElementById('notes-header');
const toggleBtn = document.getElementById('toggle-widget');
const notesBody = document.getElementById('notes-body');
const notesList = document.getElementById('notes-list');
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');


// toggle widget visibility
toggleBtn.addEventListener('click',()=>{
  if(notesBody.style.display === 'none' || !notesBody.style.display){
    notesBody.style.display = 'block';
    toggleBtn.textContent = '-';
  }
  else {
    notesBody.style.display = 'none';
    toggleBtn.textContent = '+';
  }
});

// Load notes from the local storage when page loads
window.onload = function (){
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes.forEach(note => displayNote(note));
};


// Add a new note 
addNoteBtn.addEventListener('click',() =>{
  const noteText = noteInput.value.trim();
  if(noteText === ''){
    alert('Note cannot be empty!');
    return;
  }
  displayNote(noteText);
  saveNoteToLocalStorage(noteText);
  noteInput.value = ''; // after saving clear the input field
});


// Display a note
function displayNote(noteText) {
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  noteDiv.textContent = noteText;

  // Add Delete button
  const deleteNote = document.createElement('button');
  deleteNote.textContent = 'X';
  deleteNote.onclick = () =>{
    notesList.removeChild(noteDiv);
    deleteNoteFromLocalStorage(noteText);
  } ;

  noteDiv.appendChild(deleteNote);
  notesList.appendChild(noteDiv);
}


// save note to local storage
function saveNoteToLocalStorage(noteText) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes.push(noteText);
  localStorage.setItem('notes', JSON.stringify(savedNotes));
}


// Delete note from local storage
function deleteNoteFromLocalStorage(noteText) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const updatedNotes = savedNotes.filter(note => note !== noteText);
  localStorage.setItem('notes', JSON.stringify(updatedNotes));
  alert("Notes Deleted Successfully!!!");
}

// make widget draggable
let isDragging = false;
let offsetX, offsetY;

notesHeader.addEventListener('mousedown', (event) =>{
  isDragging = true;
  offsetX = event.clientX - widget.offsetLeft;
  offsetY = event.clientY - widget.offsetTop;
});


document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    widget.style.left = `${e.clientX - offsetX}px`;
    widget.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});                         


// handle hamburger

// to handle hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
})