

// Dummy Posts for Recent Blogs
let recentPosts = [
  {
    id: 1,
    image: "images/nature1.jpg",
    category: "Nature",
    title: "A Walk in the Forest: The Serenity of Green",
    postDate: "December 20, 2024",
    description: "Explore the lush greenery and the calm atmosphere of a serene forest walk. Discover the magic of nature at its best.",
    profile: {
      image: "images/rpa01.jpg",
      name: "Ruskin Bond"
    }
  },
  {
    id: 2,
    image: "images/rp02.webp",
    category: "Travel",
    title: "The Hidden Beauty of Mountain Trails",
    postDate: "December 15, 2024",
    description: "Mountain trails offer breathtaking views and an escape from the ordinary. Immerse yourself in the journey.",
    profile: {
      image: "images/rpa02.jpg",
      name: "Chetan Bhagat"
    }
  },
  {
    id: 3,
    image: "images/rp03.webp",
    category: "Technology",
    title: "AI in Daily Life: Transforming the Future",
    postDate: "December 10, 2024",
    description: "Artificial Intelligence is revolutionizing everyday life. Discover the ways AI is changing how we live and work.",
    profile: {
      image: "images/rpa03.jpg",
      name: "Anita Desai"
    }
  },
  {
    id: 4,
    image: "images/rp04.webp",
    category: "Food",
    title: "The Art of Baking: Tips for Perfect Pastries",
    postDate: "December 5, 2024",
    description: "Learn the secrets to creating delicious pastries with ease. Perfect for beginners and baking enthusiasts.",
    profile: {
      image: "images/rpa04.jpg",
      name: "Amitav Ghosh"
    }
  },
  {
    id: 5,
    image: "images/nature2.jpg",
    category: "Travel",
    title: "Discovering Hidden Beaches Around the World",
    postDate: "November 30, 2024",
    description: "Uncover the secrets of pristine beaches that are less traveled, offering tranquility and unmatched beauty.",
    profile: {
      image: "images/rpa05.jpg",
      name: "Arundhati Roy"
    }
  }
];


// Retrieve all blogs from local storage and add them to the recentPosts array
// This ensures the most recent posts (from local storage) are displayed first
const recenetBlogData = retrieveBlogData();
recenetBlogData.forEach((post) => {
  recentPosts.push(post); // Add each blog post to the recentPosts array
});

// Function to get the latest blog posts
function getLatestBlog() {
  // Sort the recentPosts array by postDate in descending order
  const sortedPosts = recentPosts.sort((a, b) => {
    const dateA = new Date(a.postDate);
    const dateB = new Date(b.postDate);
    return dateB - dateA; // Posts with the latest date appear first
  });

  // Select the 5 most recent blog posts
  const latestPosts = sortedPosts.slice(0, 5);

  // Create and display a blog card for each of the 5 latest posts
  latestPosts.forEach((recentPost) => {
    createRecentBlog(recentPost);
  });
}

// Function to create a blog card for a single blog post
const recentBlogContainer = document.getElementById('recentBlog'); // Get the container for recent blogs
function createRecentBlog(blogPost) {
  // Create the main blog card container
  const recentBlogCard = document.createElement('div');
  recentBlogCard.setAttribute('class', 'recent-blog-card');

  // Create the image container for the blog
  const recentBlogImgContainer = document.createElement('div');
  recentBlogImgContainer.setAttribute('class', 'recent-blog-img-container');

  // Create and set the blog image
  const recentBlogImg = document.createElement('img');
  recentBlogImg.setAttribute('class', 'recent-blog-img');
  recentBlogImg.setAttribute('src', `${blogPost.image}`);
  recentBlogImgContainer.appendChild(recentBlogImg); // Append the image to its container

  recentBlogCard.appendChild(recentBlogImgContainer); // Add the image container to the blog card

  // Create the content container for the blog card
  const recentBlogContentContainer = document.createElement('div');
  recentBlogContentContainer.setAttribute('class', 'recent-blog-content-container');

  // Create the title container and add the blog title
  const recentBlogTitleContainer = document.createElement('div');
  recentBlogTitleContainer.setAttribute('class', 'recent-blog-title-container');

  const recentBlogTitle = document.createElement('p');
  recentBlogTitle.setAttribute('class', 'recent-blog-title');
  recentBlogTitle.innerText = `${blogPost.title}`; // Set the blog title
  recentBlogTitleContainer.appendChild(recentBlogTitle);

  // Add the current date to the title container
  const recentBlogDate = document.createElement('div');
  recentBlogDate.setAttribute('class', 'recent-blog-date');
  const currentDate = new Date(); // Get the current date
  recentBlogDate.innerText = `${currentDate.toDateString()}`; // Format the date
  recentBlogTitleContainer.appendChild(recentBlogDate);

  recentBlogContentContainer.appendChild(recentBlogTitleContainer); // Add title container to content container

  // Add the blog description
  const recentBlogDecription = document.createElement('p');
  recentBlogDecription.setAttribute('class', 'recent-blog-desc');
  recentBlogDecription.innerText = `${blogPost.description}`;
  recentBlogContentContainer.appendChild(recentBlogDecription);

  // Create the author container and add author details
  const recentBlogAuthorContainer = document.createElement('div');
  recentBlogAuthorContainer.setAttribute('class', 'recent-blog-author-container');

  const recentBlogAuthorImg = document.createElement('img');
  recentBlogAuthorImg.setAttribute('class', 'recent-blog-author-img');
  recentBlogAuthorImg.setAttribute('src', `${blogPost.profile.image}`); // Set author image
  recentBlogAuthorContainer.appendChild(recentBlogAuthorImg);

  const recentBlogAuthorName = document.createElement('p');
  recentBlogAuthorName.setAttribute('class', 'recent-blog-author-name');
  recentBlogAuthorName.innerText = `${blogPost.profile.name}`; // Set author name
  recentBlogAuthorContainer.appendChild(recentBlogAuthorName);

  recentBlogContentContainer.appendChild(recentBlogAuthorContainer); // Add author container to content container

  // Add additional details like category and a "Read More" link
  const recentBlogAddDetails = document.createElement('div');
  recentBlogAddDetails.setAttribute('class', 'recent-blog-add-detail');

  const recentBlogCategory = document.createElement('h2');
  recentBlogCategory.setAttribute('class', 'recent-blog-category');
  recentBlogCategory.innerText = `${blogPost.category}`; // Set blog category
  recentBlogAddDetails.appendChild(recentBlogCategory);

  const readMore = document.createElement('p');
  readMore.setAttribute('class', 'read-more');
  readMore.innerText = 'Read More'; // Add "Read More" link text
  recentBlogAddDetails.appendChild(readMore);

  recentBlogContentContainer.appendChild(recentBlogAddDetails); // Add additional details to content container

  recentBlogCard.appendChild(recentBlogContentContainer); // Add content container to blog card

  recentBlogContainer.appendChild(recentBlogCard); // Add blog card to the main container
}

// Ensure the DOM is fully loaded before fetching and displaying the latest blogs
document.addEventListener('DOMContentLoaded', () => {
  getLatestBlog(); // Fetch and display the latest blogs
});





// Dummy Blogs 
const blogPosts = [
    {
      id:1,
      image: "images/tech1.jpg",
      category: "Tech",
      title: "Top 5 Tech Trends to Watch In 2025",
      postDate: "January 4, 2025",
      description: "Discover the top 5 tech trends to watch in 2025, including breakthroughs in Artificial Intelligence (AI), Quantum Computing, Extended Reality (XR), 5G connectivity, and sustainable tech innovations. This blog explores how these cutting-edge technologies are set to revolutionize industries like healthcare, gaming, smart cities, and more, offering a glimpse into the future of technology and its impact on our daily lives. Stay ahead of the curve by understanding the transformative changes coming in the tech world!",
      profile: {
        image: "images/testi1.jpg",
        name: "John Doe"
      }
    },
    {
      id:2,
      image: "images/health1.jpg",
      category: "Health",
      title: "10 Tips for a Healthier Lifestyle",
      postDate: "January 3, 2025",
      description: "Adopt a healthier lifestyle in 2025 with these 10 practical tips to enhance your physical and mental well-being. From balanced nutrition and regular exercise to stress management and mindful sleep, this blog offers actionable advice for making small yet impactful changes to improve your overall health. Whether you're looking to boost your energy, improve your mental clarity, or simply feel better day-to-day, these tips will guide you toward a healthier, more fulfilling life. Start today for a better tomorrow!",
      profile: {
        image: "images/testi1.jpg",
        name: "Jane Smith"
      }
    },
    {
      id: 3,
      image: "images/finance1.jpg",
      category: "Finance",
      title: "How to Save Money in 2025",
      postDate: "January 2, 2025",
      description: "In 2025, managing your finances and saving money is more important than ever. This blog offers practical strategies and tips on how to effectively save money, reduce unnecessary expenses, and make smarter financial decisions. Whether you’re aiming to build an emergency fund, pay off debt, or invest for the future, this guide provides actionable steps to help you achieve financial security. Start applying these money-saving techniques today and take control of your financial future in 2025!",
      profile: {
        image: "images/testi1.jpg",
        name: "Alice Brown"
      }
    },
    {
      id:4,
      image: "images/img4.svg",
      category: "Travel",
      title: "Top Destinations to Visit in 2025",
      postDate: "January 1, 2025",
      description: "Planning your next adventure? Discover the top travel destinations to visit in 2025! This blog highlights the most exciting and must-see places around the world, from serene beaches to bustling cities and off-the-beaten-path gems. Whether you're a culture seeker, nature lover, or history enthusiast, these destinations promise unforgettable experiences and breathtaking sights. Get inspired and start planning your 2025 travels with our carefully curated list of the best places to visit this year.",
      profile: {
        image: "images/testi1.jpg",
        name: "David Wilson"
      }
    },
    {
      id:5,
      image: "images/img5.svg",
      category: "Tech",
      title: "The Future of Online Learning in 2025",
      postDate: "December 31, 2024",
      description: "The future of online learning is rapidly evolving, and 2025 is set to bring transformative changes to the educational landscape. In this blog, we explore the trends and innovations shaping online education, from personalized learning experiences to the integration of AI and virtual reality. Discover how technology is enhancing accessibility, interactivity, and engagement in the learning process. Whether you're a student, educator, or lifelong learner, this blog provides insights into the exciting future of online learning and how it will continue to redefine the way we acquire knowledge.",
      profile: {
        image: "images/testi1.jpg",
        name: "Emma Davis"
      }
    },
    {
      id: 6,
      image: "images/nature1.jpg",
      category: "Nature",
      title: "Under the Glow of the Full Moon: A Night of Tranquility",
      postDate: "December 30, 2024",
      description: "Step into the serene beauty of a full moon night, where the world is bathed in a soft, silvery glow. The luminous moon hangs majestically in the sky, casting gentle light over landscapes and creating a magical ambiance. Whether you're gazing at its brilliance from your window, enjoying a quiet walk under its radiance, or simply soaking in the peaceful vibes, a full moon night is a time to pause and reconnect with nature. Let the stillness of the night and the celestial beauty of the moon inspire your thoughts and soothe your soul.",
      profile: {
        image: "images/testi1.jpg",
        name: "Michael Lee"
      }
    },
    {
      id:7,
      image: "images/img7.jpg",
      category: "Food",
      title:  "Sesame Chicken with a Fresh Garden Salad",
      postDate: "December 29, 2024",
      description: "Dive into a plate of pure delight with this beautifully balanced meal. The star of the dish is tender, golden-brown sesame chicken, cooked to perfection and sprinkled with sesame seeds for a nutty crunch. Complementing the chicken is a vibrant garden salad featuring shredded carrots, crisp cabbage, fresh spinach, and a juicy cherry tomato, all paired with a zesty lemon wedge for added freshness. Ideal for a wholesome lunch or dinner, this dish is as satisfying as it is nourishing. Treat your taste buds to a combination of savory, tangy, and fresh flavors in every bite!",
      profile: {
        image: "images/testi1.jpg",
        name: "Sophia Moore"
      }
    },
    {
      id:8,
      image: "images/tech3.jpg",
      category: "Tech",
      title: "AI and Its Impact on the Job Market",
      postDate: "December 28, 2024",
      description: "Artificial Intelligence (AI) is no longer just a buzzword; it's transforming industries and reshaping the job market. In this blog, we delve into how AI is influencing employment opportunities, from automating routine tasks to creating entirely new job roles. Explore the potential risks and rewards of AI integration in the workplace, and how workers and businesses can adapt to this evolving landscape. We also discuss the skills and competencies needed for the future job market and how AI can enhance productivity, creativity, and decision-making. Whether you're an employee, employer, or job seeker, this blog will provide valuable insights into AI's impact on the workforce.",
      profile: {
        image: "images/testi1.jpg",
        name: "Ethan Miller"
      }
    },
    {
      id:9,
      image: "images/health2.jpg",
      category: "Health",
      title: "The Rise of Mental Health Awareness in 2025",
      postDate: "December 27, 2024",
      description: "In 2025, mental health awareness has transcended societal boundaries, emerging as a global priority. This blog delves into the transformative journey of mental health advocacy, exploring how shifting perspectives, technological advancements, and collaborative initiatives have fostered a culture of empathy and support. From destigmatizing conversations to innovative therapeutic tools, discover how individuals, organizations, and governments are working together to redefine mental well-being. Join us as we highlight inspiring stories, impactful campaigns, and the ongoing challenges in creating a world where mental health is valued as much as physical health.",
      profile: {
        image: "images/testi1.jpg",
        name: "Isabella Taylor"
      }
    },
    {
      id:10,
      image: "images/img10.jpg",
      category: "Food",
      title:  "Crispy Fried Chicken with Fresh Broccoli and Poached Egg Salad",
      postDate: "December 26, 2024",
      description: "Indulge in the perfect harmony of crispy, golden fried chicken paired with a wholesome side of fresh broccoli and a vibrant salad. This delightful plate is elevated by a perfectly poached egg, with its silky yolk adding richness to every bite. The crispness of the chicken complements the freshness of the greens, while the salad brings a light and tangy balance. Packed with flavor, protein, and nutrients, this dish is ideal for a satisfying lunch or dinner. A feast for both the eyes and the palate, it’s a combination you’ll crave again and again!",
      profile: {
        image: "images/testi1.jpg",
        name: "James Anderson"
      }
    },
    {
      id:11,
      image: "images/travel2.webp",
      category: "Travel",
      title: "Travel on a Budget: Tips for 2025",
      postDate: "December 25, 2024",
      description: "Dreaming of exploring the world without breaking the bank? In 2025, budget travel is more accessible than ever! This blog shares expert tips and strategies to help you plan unforgettable trips while staying within your budget. From finding the best flight deals and affordable accommodations to leveraging travel apps and discovering hidden gems, we’ve got you covered. Learn how to embrace sustainable travel, make the most of loyalty programs, and uncover smart hacks for stretching your travel dollars. Whether you're a solo adventurer or a family of explorers, these tips will help you travel smarter in 2025!",
      profile: {
        image: "images/testi1.jpg",
        name: "Charlotte White"
      }
    },
    {
      id: 12,
      image: "images/finance2.jpg",
      category: "Finance",
      title: "Understanding the Basics of Financial Planning: A Beginner's Guide",
      postDate: "December 24, 2024",
      description: "In today's fast-paced world, understanding financial planning is crucial to achieving long-term financial stability. Whether you're just starting your career or looking to manage your money better, mastering the basics can help you take control of your financial future. This guide will cover the essentials of budgeting, saving, investing, and debt management, giving you the tools to make informed financial decisions and plan for a secure future.",
      profile: {
        image: "images/testi1.jpg",
        name: "Henry Garcia"
      }
    },
    {
      id: 13,
      image: "images/nature2.jpg",
      category: "Nature",
      title:  "Serenity by the Sea: A Perfect Day at the Beach",
      postDate: "December 23, 2024",
      description: "Feel the gentle embrace of the sea breeze as you step onto the golden sands of a picturesque beach. With the soothing sound of waves crashing against the shore and the endless horizon stretching before you, the beach offers a serene escape from the hustle and bustle of daily life. Whether you're basking in the sun, collecting seashells, or simply listening to the rhythmic melody of the ocean, a day at the beach is a perfect way to rejuvenate your soul. Embrace the beauty of the sea and let its tranquil vibes wash over you!",
      profile: {
        image: "images/testi1.jpg",
        name: "Olivia Martinez"
      }
    },
    {
      id: 14,
      image: "images/travel3.jpg",
      category: "Travel",
      title: "Exploring the Hidden Gems of the World: A Journey Beyond the Tourist Spots",
      postDate: "December 22, 2024",
      description: "Travel is not just about visiting well-known landmarks or crowded tourist destinations; it's about discovering the hidden gems that many miss. In this blog, we dive into the beauty of less-traveled places, offering you tips and insights on how to find these secret spots, immerse yourself in authentic local experiences, and create memories that will last a lifetime. Whether it's a serene beach town or an untouched mountain village, the world has countless places waiting to be explored, away from the hustle and bustle of typical tourism.",
      profile: {
        image: "images/testi1.jpg",
        name: "Benjamin Robinson"
      }
    },
    {
      id:15,
      image: "images/img15.jpg",
      category: "Food",
      title: "A Perfect Balance: Wholesome Veggie Rice Bowl with Soft-Boiled Eggs",
      postDate: "December 21, 2024",
      description: "This delightful veggie rice bowl is a celebration of fresh and wholesome ingredients! Featuring perfectly cooked brown rice, a medley of sautéed zucchini, cabbage, and spring onions, and garnished with vibrant parsley, it’s both nutritious and delicious. The soft-boiled eggs with their golden, creamy yolks add a rich and satisfying touch, making this dish a complete meal. Light, flavorful, and easy to prepare, this bowl is perfect for those seeking a healthy yet hearty meal. Pair it with your favorite herbs for an added burst of freshness!.",
      profile: {
        image: "images/testi1.jpg",
        name: "Amelia Clark"
      }
    },
    {
      id:16,
      image: "images/health3.webp",
      category: "Health",
      title: "Fitness Trends to Watch in 2025",
      postDate: "December 20, 2024",
      description: "Step into the future of fitness with our latest blog on the trends shaping 2025! From cutting-edge wearable technology to personalized AI-driven workout plans, discover how innovation is revolutionizing the way we stay active. Explore the rise of hybrid fitness models combining virtual and in-person training, holistic wellness approaches emphasizing mental health, and the growing popularity of sustainable, eco-friendly fitness gear. Whether you're a gym enthusiast or a home workout fan, this blog offers a glimpse into the exciting fitness landscape of 2025 and how it’s set to inspire healthier, smarter lifestyles for all.",
      profile: {
        image: "images/testi1.jpg",
        name: "Lucas Martinez"
      }
    },
    {
      id:17,
      image: "images/finance3.jpg",
      category: "Finance",
      title: "How to Achieve Financial Freedom",
      postDate: "December 19, 2024",
      description: "Unlock the secrets to financial independence with our comprehensive guide to achieving financial freedom. This blog breaks down practical strategies to help you take control of your finances, eliminate debt, and build lasting wealth. From budgeting and smart investing to creating multiple income streams and mastering financial discipline, discover actionable steps to secure your future. Whether you're just starting your journey or looking to refine your financial plan, this blog offers insights and tools to help you achieve the freedom to live life on your terms. Take the first step toward financial empowerment today!",
      profile: {
        image: "images/testi1.jpg",
        name: "Elijah Hall"
      }
    },
    {
      id:18,
      image: "images/nature3.jpg",
      category: "Nature",
      title: "The Magic of Snowfall: A Winter Wonderland",
      postDate: "December 18, 2024",
      description: "There’s something enchanting about watching soft snowflakes gently descend from the sky, blanketing the world in a pristine white layer. Snowfall transforms ordinary landscapes into dreamy winter wonderlands, where every branch, rooftop, and path sparkles with frosty beauty. Whether it’s sipping hot cocoa by the window, building a snowman, or taking a peaceful walk through the snow-covered streets, this magical phenomenon brings joy and serenity in equal measure. Embrace the quiet charm of snowfall and let its tranquility fill you with wonder this winter season!",
      profile: {
        image: "images/testi1.jpg",
        name: "Grace Young"
      }
    },
];


// Select the container where blog posts will be appended
const post_container = document.querySelector('#post');

// Counter to keep track of the number of posts; if count > 9, hide extra posts
let count = 0;

// Function to create a single blog post
function createBlogPost(blogPost) {
  // Create a parent container for the blog post and set its attributes
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute('class', `post-box ${blogPost.category}`);
  parentDiv.setAttribute('data_id', `${blogPost.data_id}`);

  // Create and append the blog post image
  const img = document.createElement('img');
  img.setAttribute("src", `${blogPost.image}`);
  img.setAttribute("class", "post-img");
  parentDiv.appendChild(img);

  // Create and append the blog category element
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'category');
  h2.innerText = `${blogPost.category}`;
  colorOfCategory(h2); // Apply category-specific colors
  parentDiv.appendChild(h2);

  // Create and append the blog title
  const a = document.createElement('a');
  a.setAttribute('href', "#");
  a.setAttribute("class", "post-title");
  a.innerText = `${blogPost.title}`;
  parentDiv.appendChild(a);

  // Create and append the blog date
  const span = document.createElement('span');
  span.setAttribute("class", "post-date");
  span.innerText = `${blogPost.postDate}`;
  parentDiv.appendChild(span);

  // Create and append the blog description
  const p = document.createElement('p');
  p.setAttribute("class", "post-description");
  p.innerText = `${blogPost.description}`;
  parentDiv.appendChild(p);

  // Create the container for author profile and delete button
  const profileDivContainer = document.createElement('div');
  profileDivContainer.setAttribute('id', 'profile-div-container');

  // Create the author profile section
  const profileDiv = document.createElement('div');
  profileDiv.setAttribute("class", "profile");

  // Add the author's image
  const profileImg = document.createElement('img');
  profileImg.setAttribute('src', `${blogPost.profile.image}`);
  profileImg.setAttribute('class', 'profile-img');
  profileDiv.appendChild(profileImg);

  // Add the author's name
  const profileName = document.createElement('span');
  profileName.setAttribute('class', 'profile-name');
  profileName.innerText = `${blogPost.profile.name}`;
  profileDiv.appendChild(profileName);

  profileDivContainer.appendChild(profileDiv);

  // Create the delete post button container
  const deleteBtnDiv = document.createElement('div');
  deleteBtnDiv.setAttribute('id', 'delete-btn-div');

  // Add the delete button
  const deletePostBtn = document.createElement('button');
  deletePostBtn.setAttribute('id', 'delete-btn');
  deletePostBtn.textContent = "Delete";
  deleteBtnDiv.appendChild(deletePostBtn);

  profileDivContainer.appendChild(deleteBtnDiv);
  parentDiv.appendChild(profileDivContainer);

  // Increment the post count and hide extra posts if count exceeds 9
  count++;
  if (count > 9)
    parentDiv.classList.add('hidden');

  // Append the parentDiv (blog post) to the container
  post_container.appendChild(parentDiv);
}

// Retrieve and create blog posts stored in local storage
const data = retrieveBlogData();
data.forEach((post) => {
  createBlogPost(post);
});

// Function to retrieve user-created blog data from localStorage
function retrieveBlogData() {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || []; // Parse blog data or return an empty array if none exists
  return blogs; // Return the retrieved blogs
}

// Create and append dummy blog posts (static predefined posts)
blogPosts.forEach((blogPost) => {
  createBlogPost(blogPost);
});

// Function to set the color scheme for the blog category based on its value
function colorOfCategory(element) {
  const category = element.innerText; // Get the category text
  if (category === "Tech") {
    element.style.color = "#6941c6";
    element.style.backgroundColor = "#f9f5ff";
  } else if (category === "Finance") {
    element.style.color = "#c11574";
    element.style.backgroundColor = "#fdf2fa";
  } else if (category === "Travel") {
    element.style.color = "#026AA2";
    element.style.backgroundColor = "#f0f9ff";
  } else if (category === "Health") {
    element.style.color = "#363f72";
    element.style.backgroundColor = "#f8f9fc";
  } else if (category === "Nature") {
    element.style.color = "#027a48";
    element.style.backgroundColor = "#ecfdf3";
  } else {
    // Default category styling
    element.style.color = "#C4320A";
    element.style.backgroundColor = "#FFF6ED";
  }
}




// Add event listener to each delete button
const deletePostBtns = document.querySelectorAll('#delete-btn'); // Select all delete buttons
deletePostBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // Get the closest parent blog post container associated with the delete button
    const blogPostDiv = event.target.closest('.post-box');

    // Get the blog post ID from the data attribute
    const blogPostId = blogPostDiv.getAttribute('data_id');

    // Check if the blog post is a dummy blog card (without a valid ID)
    if (blogPostId === 'undefined') {
      alert("SORRY, you can't delete the dummy blog cards!");
      return; // Exit the function to prevent deletion
    }

    console.log(blogPostId); // Log the ID of the blog post being deleted

    // Remove the blog post from the DOM
    blogPostDiv.remove();

    // Decrease the count of visible blog posts since one is removed
    count--;

    // Update the recent blog posts by filtering out the deleted post
    recentPosts = recentPosts.filter(
      (recentPost) => String(recentPost.data_id) !== blogPostId
    );

    // Delete all recent blog cards from the DOM to regenerate the updated list
    const recentCard = document.getElementsByClassName('recent-blog-card');
    for (let i = recentCard.length - 1; i >= 0; i--) {
      recentCard[i].remove(); // Remove each recent blog card
    }

    // Regenerate the recent blog posts with the updated list
    getLatestBlog();

    // Delete the corresponding blog post from local storage
    deletePostFromLocalStorage(blogPostId);
  });
});

// Function to delete a blog post from local storage
function deletePostFromLocalStorage(postId) {
  // Retrieve the saved blogs from local storage (or initialize an empty array if none exist)
  const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

  // Filter out the blog post with the matching ID
  const updatedBlogs = savedBlogs.filter(
    (blog) => blog.data_id !== Number(postId) // Convert postId to a number for comparison
  );

  // Save the updated list of blogs back to local storage
  localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
}




// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all filter items and post boxes
  const filterItems = document.querySelectorAll(".filter-item");
  const postBoxes = document.querySelectorAll(".post-box");
  const main = document.querySelector('main');

  // Create the "Show More" button and its container
  const showMoreBtn = document.createElement('button');
  showMoreBtn.id = "show-more-btn"; // Assign an ID for styling and identification
  showMoreBtn.textContent = "Show More"; // Set button text

  const showMoreBtnDiv = document.createElement('div');
  showMoreBtnDiv.id = "show-more-btn-div"; // Assign an ID for the button container
  showMoreBtnDiv.appendChild(showMoreBtn); // Append the button to the container
  main.appendChild(showMoreBtnDiv); // Add the container to the main element

  let showAll = false; // State to track whether all posts are displayed
  const maxVisible = 9; // Maximum number of visible posts by default

  // Function to update the visibility of post boxes based on the filter
  function updatePostBoxVisibility(filterValue) {
      let visibleCount = 0; // Counter for visible posts

      // Loop through each post box to determine visibility
      postBoxes.forEach(function (postBox) {
          if (filterValue === 'all' || postBox.classList.contains(filterValue)) {
              // Show post if it matches the filter and within the visible limit
              if (visibleCount < maxVisible || showAll) {
                  postBox.style.display = "block";
              } else {
                  postBox.style.display = "none"; // Hide post if exceeding limit
              }
              visibleCount++; // Increment the visible counter
          } else {
              // Hide post if it doesn't match the filter
              postBox.style.display = 'none';
          }
      });

      // Update the "Show More" button's visibility and text
      showMoreBtn.style.display = visibleCount > maxVisible ? "inline-block" : "none";
      showMoreBtn.textContent = showAll ? "Show Less" : "Show More";
  }

  // Add event listener for "Show More" button
  showMoreBtn.addEventListener('click', () => {
      showAll = !showAll; // Toggle the showAll state
      const activeFilter = document.querySelector(".filter-item.active-filter"); // Get the currently active filter
      const value = activeFilter ? activeFilter.getAttribute("data-filter") : "all"; // Get the filter value
      updatePostBoxVisibility(value); // Update post visibility
  });

  // Initialize the view with the "all" filter
  filterItems[0].click();

  // Add click event listeners to each filter item
  filterItems.forEach(function (filterItem) {
      filterItem.addEventListener("click", function () {
          const value = this.getAttribute("data-filter"); // Get the filter value of the clicked item

          showAll = false; // Reset the showAll state when switching filters
          updatePostBoxVisibility(value); // Update post visibility based on the new filter

          // Update the 'active-filter' class to highlight the clicked filter
          filterItems.forEach(function (item) {
              item.classList.remove("active-filter"); // Remove active class from all filters
          });
          this.classList.add("active-filter"); // Add active class to the clicked filter
      });
  });
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
    notesBody.style.display = 'block'; // Show the notes body
    toggleBtn.textContent = '-'; // Update button text to indicate collapse
  } else {
    notesBody.style.display = 'none'; // Hide the notes body
    toggleBtn.textContent = '+'; // Update button text to indicate expand
  }
});

// Load saved notes from local storage when the page loads
window.onload = function () {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve saved notes or initialize as empty array
  savedNotes.forEach(note => displayNote(note)); // Display each saved note in the widget
};

// Add a new note when the "Add Note" button is clicked
addNoteBtn.addEventListener('click', () => {
  const noteText = noteInput.value.trim(); // Get and trim the input value
  if (noteText === '') { // Check if the input is empty
    alert('Note cannot be empty!'); // Alert the user if input is empty
    return;
  }
  displayNote(noteText); // Display the new note in the list
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
  deleteNote.textContent = 'X'; // Set delete button text
  deleteNote.onclick = () => { // Add functionality to delete the note
    notesList.removeChild(noteDiv); // Remove the note from the DOM
    deleteNoteFromLocalStorage(noteText); // Remove the note from local storage
  };

  noteDiv.appendChild(deleteNote); // Append the delete button to the note
  notesList.appendChild(noteDiv); // Add the note to the notes list
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
  const updatedNotes = savedNotes.filter(note => note !== noteText); // Filter out the note to delete
  localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Save the updated notes array
  alert("Notes Deleted Successfully!!!"); // Notify the user of successful deletion
}

// Enable dragging of the notes widget
let isDragging = false; // State to track if the widget is being dragged
let offsetX, offsetY; // Variables to store the mouse offset from the widget's position

// Start dragging when the mouse is pressed on the widget's header
notesHeader.addEventListener('mousedown', (event) => {
  isDragging = true; // Set dragging state to true
  offsetX = event.clientX - widget.offsetLeft; // Calculate horizontal offset
  offsetY = event.clientY - widget.offsetTop; // Calculate vertical offset
});

// Move the widget as the mouse moves during dragging
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    widget.style.left = `${e.clientX - offsetX}px`; // Update widget's left position
    widget.style.top = `${e.clientY - offsetY}px`; // Update widget's top position
  }
});

// Stop dragging when the mouse button is released
document.addEventListener('mouseup', () => {
  isDragging = false; // Set dragging state to false
});




// on click thi btn you will go to text editor for creating a blog
const startYourBlogBtn = document.getElementById("startYourBlogBtn");
startYourBlogBtn.addEventListener('click',()=>{
  window.location.href = "editor.html";
})





// to handle hamburger (For mobile Devices)
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



// filter button when screen size is smaller
// Select Elements
const filterIcon = document.getElementById('filterIcon');
const filterMenu = document.getElementById('filterMenu');
const closeIcon = document.getElementById('closeIcon');
const filterItems = document.querySelectorAll('.filter-item');

// to check is it smaller screen or not,
const isMobileScreen = () => window.innerWidth <= 670;


// Show Filter Menu on Hamburger Click
filterIcon.addEventListener('click', () => {
    filterMenu.classList.add('show');
    filterIcon.style.display = 'none'; // hide the filter button
});

// Hide Filter Menu on Close Icon Click
closeIcon.addEventListener('click', () => {
    filterMenu.classList.remove('show');
    filterIcon.style.display = 'block'; // show the filter btn again
});

// Hide Filter Menu on Clicking a Filter Item
filterItems.forEach(item => {
  item.addEventListener('click', () => {
      filterMenu.classList.remove('show');
      if(isMobileScreen())
        filterIcon.style.display = 'block'; // show the filter btn again. when the screen size is less than 670px
  });
});


// Handle Responsive Behavior on Window Resize
window.addEventListener('resize', () => {
  if (!isMobileScreen()) {
      // On larger screens, reset styles and ensure menu is visible
      filterMenu.classList.remove('show');
      filterIcon.style.display = 'none'; // Hide the hamburger icon
  } else {
      // On smaller screens, ensure the hamburger icon is visible
      filterIcon.style.display = 'block';
  }
});  

//Close Menu on Clicking Outside (Mobile-Friendly)
document.addEventListener('click', (event) => {
    if (!filterMenu.contains(event.target) && !filterIcon.contains(event.target)) {
        filterMenu.classList.remove('show');
        if(isMobileScreen())
          filterIcon.style.display = 'block'; // show the filter btn again. when the screen size is less than 670px
    }
});
