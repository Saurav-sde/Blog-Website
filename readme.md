# Blog Website

## Overview

This project is a fully responsive blog website created using **HTML**, **CSS**, and **JavaScript**, without any frameworks. The website is designed to provide users with an interactive platform to create, read, and manage blogs. It includes features like dynamic blog sections, category filtering, a rich text editor, a notes widget, and light/dark mode preferences. The goal of the project is to deliver an intuitive and visually appealing blogging experience.

---

## Features

### 1. **Dynamic Blog Management**

- **Recent Blog Section**: Displays the most recently created blog dynamically, ensuring that users always see the latest content.
- **Blog Post Section**: Contains all blogs, which can be filtered by category to match user interests. This allows users to focus on their areas of interest effortlessly.
- **Create a Blog**: Users can write and publish blogs via a rich text editor. The created blog appears instantly in both the **Recent Blog Section** and the **Blog Post Section**, streamlining content management.
- **Delete a Blog**: Users can delete their blogs, and the changes reflect dynamically across all sections, maintaining a clean and up-to-date interface.

### 2. **Rich Text Editor**

- Provides a user-friendly interface for creating blog posts and making notes with advanced formatting options.
- Includes features like **light and dark mode**:
  - User preferences are saved in local storage, ensuring a consistent experience across sessions.
  - The preferred mode appears automatically when revisiting the editor, reducing the need for manual adjustments.

### 3. **Notes Widget**

- Users can make notes while creating or reading blogs, enhancing productivity.
- Notes are saved in local storage and can be accessed anytime via the notes widget, ensuring accessibility.
- Includes the ability to delete existing notes if they are no longer needed, allowing users to manage their notes effectively.

### 4. **Dynamic Blog Imagery**

- The blog image is automatically selected based on the category of the blog, ensuring consistency, relevance, and a polished look.

### 5. **Responsive Design**

- The website is fully responsive, ensuring a seamless experience across devices of different screen sizes. This feature enhances accessibility and usability on smartphones, tablets, and desktops.

### 6. **About Me Section**

- Provides detailed information about the creator of the website, adding a personal touch and credibility to the project.

### 7. **Footer**

- Contains additional information and useful links for better navigation, contributing to an enhanced user experience.

---

## Technologies Used

- **HTML**: For structuring the content and creating the layout.
- **CSS**: For styling, animations, and responsiveness.
- **JavaScript**: For adding interactivity, dynamic content generation, and functionality.
- **Local Storage**: For saving user data such as blogs, notes, and theme preferences, ensuring a personalized experience.

---

## How to Use

1. **Homepage**:

   - View the recent blog in the **Recent Blog Section** to stay updated with the latest posts.
   - Browse all blogs in the **Blog Post Section**, conveniently categorized for easy navigation.
   - Filter blogs by categories using the filter options, helping users find relevant content quickly.

2. **Creating a Blog**:

   - Click on the "Create Blog" button to open the rich text editor.
   - Write the blog and select the category from the dropdown menu.
   - Publish the blog to see it in the **Recent Blog Section** and the **Blog Post Section**, ensuring visibility.

3. **Notes Widget**:

   - Open the widget to make notes while reading or creating blogs, promoting multitasking.
   - Save the notes in local storage for future access, ensuring that important points are not lost.
   - Delete notes if they are no longer required, maintaining a clutter-free workspace.

4. **Theme Preferences**:

   - Switch between light and dark modes in the text editor for a comfortable reading and writing experience.
   - The preference is saved, and the selected mode will appear by default on the next visit, adding a personalized touch.

5. **Delete a Blog**:

   - Delete any blog you created, and it will be removed from both the **Recent Blog Section** and the **Blog Post Section**, keeping the content relevant and organized.

---

## Project Structure

```
project-directory
|
├── index.html         # Main HTML file
├── blog.css           # CSS file for styling
├── app.js             # JavaScript file for interactivity of Main page
├── images/            # Directory containing images and icons
├── editor.html        # HTML file for text editor
├── editor.css         # CSS file for styling text editor(light mode)
├── editorDark.css     # CSS file for styling text editor(Dark mode)
├── editor.js          # Javascript file for interactivity of text editor
├── responsive.css     # CSS file for responsive design
└── README.md          # Project documentation (this file)
```

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Open the `index.html` file in any modern web browser to run the website locally. No additional setup or dependencies are required.

---

## Future Enhancements

- Add user authentication for a personalized experience, allowing users to have accounts and save their preferences.
- Enable sharing blogs on social media platforms directly from the website, increasing the reach and engagement of posts.
- Include a backend database for server-side data persistence, providing scalability and data security.
- Enhance the rich text editor with a live preview feature.

---

## Acknowledgments

This project is part of a hackathon submission hosted by [Coder Army/Rohit Bhaiya]. I am grateful for the opportunity to participate in this event, which allowed me to enhance my skills in HTML, CSS, and JavaScript. I would also like to thank my peers, mentors, and everyone who provided guidance and support throughout this project.

