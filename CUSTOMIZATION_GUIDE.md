# Portfolio Configuration Guide

This file contains all the customizable content for your portfolio website.
Edit the values in `index.html` to personalize your portfolio.

## 📝 Sections to Customize

### 1. PERSONAL INFORMATION
```html
Line ~40: <div class="logo">YourName</div>
Line ~60: <h2 class="hero-subtitle">YOUR NAME</h2>
Line ~61: <h1 class="hero-title">Your tagline with <span class="highlight">highlighted</span> words</h1>
```

### 2. NAVIGATION MENU
```html
Lines ~44-48: Update navigation links
- Keep #about, #skills, #experience, #projects, #contact for sections
- Add new sections as needed
```

### 3. ABOUT SECTION
```html
Lines ~70-80: Update your bio and introduction
- Describe yourself
- Your background
- Your approach to work
```

### 4. SKILLS SECTION
```html
Lines ~90-140: Edit or add skill cards
Each skill card has:
- skill-icon: Emoji or icon
- skill-title: Skill name
- skill-description: Brief description
```

**How to add a new skill:**
```html
<div class="skill-card">
  <div class="skill-icon">🎨</div>
  <h3 class="skill-title">Your Skill</h3>
  <p class="skill-description">Description of your skill</p>
</div>
```

### 5. EXPERIENCE SECTION
```html
Lines ~150-200: Update work history
Each timeline item has:
- timeline-year: Year or date range
- timeline-role: Job title
- timeline-company: Company name
- timeline-description: Brief description
```

**How to add a new job:**
```html
<div class="timeline-item">
  <div class="timeline-year">2024</div>
  <h3 class="timeline-role">Your Position</h3>
  <div class="timeline-company">Company Name</div>
  <p class="timeline-description">What you did there</p>
</div>
```

### 6. PROJECTS SECTION
```html
Lines ~210-280: Add your projects
Each project card has:
- project-image: Project visual (can replace with actual image)
- project-title: Project name
- project-description: What the project is about
- project-tags: Technologies or categories
```

**How to add a new project:**
```html
<div class="project-card">
  <div class="project-image">🚀</div>
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description of the project</p>
    <div class="project-tags">
      <span class="tag">HTML</span>
      <span class="tag">CSS</span>
      <span class="tag">JavaScript</span>
    </div>
  </div>
</div>
```

**To use actual images:**
```html
Replace:
<div class="project-image">🚀</div>

With:
<div class="project-image">
  <img src="images/project1.jpg" alt="Project Name">
</div>

And add this CSS:
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 7. TESTIMONIALS
```html
Lines ~290-330: Update testimonials
Each testimonial has:
- testimonial-text: The quote
- testimonial-author: Person's name
- testimonial-position: Their role
```

**How to add a new testimonial:**
```html
<div class="testimonial">
  <p class="testimonial-text">"Your testimonial quote here"</p>
  <div class="testimonial-author">Person Name</div>
  <div class="testimonial-position">Their Position, Company</div>
</div>
```

Don't forget to add a dot for navigation:
```html
<span class="testimonial-dot"></span>
```

### 8. CONTACT SECTION
```html
Lines ~345-385: Update contact information
- Email address
- Phone number
- Social media links
```

**Social Links:**
- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile
- Twitter: https://twitter.com/yourhandle
- Dribbble: https://dribbble.com/yourusername
- Behance: https://behance.net/yourusername

## 🎨 Customizing Colors

Edit the CSS variables in `styles.css` (Lines 8-20):

```css
:root {
  --primary-color: #000000;        /* Main text color */
  --secondary-color: #ffffff;      /* Background color */
  --accent-color: #ff6b6b;         /* Highlight color - CHANGE THIS! */
  --text-color: #333333;           /* Body text */
  --light-gray: #f5f5f5;          /* Card backgrounds */
  --medium-gray: #cccccc;         /* Borders */
  --dark-gray: #666666;           /* Secondary text */
}
```

**Popular Color Schemes:**
- Purple: `--accent-color: #8b5cf6;`
- Blue: `--accent-color: #3b82f6;`
- Green: `--accent-color: #10b981;`
- Orange: `--accent-color: #f97316;`
- Pink: `--accent-color: #ec4899;`

## 📱 Adding Images

### Method 1: Using Emoji (Current)
Keep it simple with emoji icons (🚀 💻 🎨 📱)

### Method 2: Using Actual Images
1. Create an `images` folder
2. Add your images
3. Update the HTML:

```html
<!-- For project images -->
<div class="project-image">
  <img src="images/project1.jpg" alt="Project Name">
</div>

<!-- For profile photo in about section -->
<img src="images/profile.jpg" alt="Your Name" class="profile-image">
```

4. Add CSS for the profile image:
```css
.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
}
```

## ⚙️ JavaScript Configuration

Edit `script.js` (Lines 8-12):

```javascript
const CONFIG = {
  loadingDuration: 2000,          // Loading screen time (milliseconds)
  testimonialInterval: 5000,      // Auto-rotate testimonials (milliseconds)
  navScrollThreshold: 100,        // Scroll distance before nav changes
};
```

## 🚀 Advanced Customization

### Add a Contact Form

Replace the contact section with:

```html
<form id="contact-form" class="contact-form">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

Add CSS:
```css
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 2px solid var(--medium-gray);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
}

.contact-form button {
  padding: 1rem 2rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}
```

### Add Google Analytics

Add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Favicon

Add to `<head>`:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

## 📦 File Structure for GitHub

```
your-portfolio/
├── index.html          (Main HTML file)
├── styles.css          (All styles)
├── script.js           (All JavaScript)
├── README.md           (Project description)
├── images/             (Optional: your images)
│   ├── profile.jpg
│   ├── project1.jpg
│   └── project2.jpg
└── favicon.png         (Optional: site icon)
```

## 🌐 Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at: `https://yourusername.github.io/repository-name`

## 📝 README.md Template

```markdown
# My Portfolio

Personal portfolio website showcasing my work and skills.

## 🚀 Live Demo
[View Live](https://yourusername.github.io/portfolio)

## 🛠️ Built With
- HTML5
- CSS3
- JavaScript

## 📧 Contact
- Email: [email protected]
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 📄 License
MIT License
```

---

## 🆘 Need Help?

- Change colors: Edit CSS variables (lines 8-20 in styles.css)
- Add sections: Copy existing section HTML and modify
- Remove sections: Delete the section HTML and update navigation
- Change fonts: Update --font-primary in CSS variables
- Adjust spacing: Modify --spacing-* variables

Happy customizing! 🎉
