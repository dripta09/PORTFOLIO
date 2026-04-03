# 🎨 Personal Portfolio Website

A modern, responsive portfolio website with smooth animations and interactive elements. Built with pure HTML, CSS, and JavaScript.

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Animated loading screen
- 🧭 Smooth scroll navigation
- 💫 Interactive skill cards and project showcases
- 🎠 Auto-rotating testimonials carousel
- 🎨 Customizable color scheme with CSS variables
- ⚡ Optimized performance with minimal dependencies
- 🌙 Clean, modern design aesthetic

## 🚀 Quick Start

### Option 1: Use Separate Files (Recommended for Development)

1. Clone or download this repository
2. Open `index.html` in your browser
3. Edit the content in `index.html`
4. Customize colors in `styles.css`
5. Adjust settings in `script.js`

### Option 2: Use Single File (Easy Deployment)

1. Use `index-all-in-one.html` for a single-file portfolio
2. Upload to any web host
3. Edit all content within the single file

## 📁 File Structure

```
portfolio/
├── index.html                  # Main HTML file with separate CSS/JS
├── index-all-in-one.html      # Single file with everything embedded
├── styles.css                  # All CSS styles
├── script.js                   # All JavaScript functionality
├── CUSTOMIZATION_GUIDE.md     # Detailed customization instructions
└── README.md                   # This file
```

## 🎨 Customization

### Quick Color Change

Edit the CSS variables in `styles.css` (or in the `<style>` tag of `index-all-in-one.html`):

```css
:root {
  --primary-color: #000000;      /* Main text color */
  --secondary-color: #ffffff;    /* Background */
  --accent-color: #ff6b6b;       /* Highlight color - CHANGE ME! */
  --text-color: #333333;         /* Body text */
}
```

**Popular Color Schemes:**
- Purple: `#8b5cf6`
- Blue: `#3b82f6`
- Green: `#10b981`
- Orange: `#f97316`
- Pink: `#ec4899`

### Update Your Information

1. **Personal Info**: Search for "YourName" and replace with your name
2. **Hero Section**: Update the tagline with your unique value proposition
3. **About**: Edit your bio and background
4. **Skills**: Add/remove skill cards
5. **Experience**: Update your work history
6. **Projects**: Showcase your best work
7. **Contact**: Add your email, phone, and social links

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## 🖼️ Adding Images

### Profile Picture

Add this code in the About section:

```html
<img src="images/profile.jpg" alt="Your Name" class="profile-image">
```

### Project Images

Replace emoji placeholders with actual images:

```html
<div class="project-image">
  <img src="images/project1.jpg" alt="Project Name">
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1400px and above
- **Tablet**: 768px - 1399px
- **Mobile**: Below 768px

## ⚙️ Configuration

Edit `script.js` to adjust timings:

```javascript
const CONFIG = {
  loadingDuration: 2000,        // Loading screen duration (ms)
  testimonialInterval: 5000,    // Testimonial rotation speed (ms)
  navScrollThreshold: 100,      // Nav background trigger (pixels)
};
```

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: `firebase deploy`
- **Surge**: `surge`

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Space Grotesk typeface

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to:
- Fork this project
- Create your own version
- Submit pull requests
- Report issues

## 📧 Contact

Have questions or suggestions? Feel free to reach out!

- **Email**: [email protected]
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

## 🌟 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons and emoji from native Unicode
- Font from Google Fonts

---

Made with 💜 by Your Name

⭐ If you found this helpful, please consider giving it a star!
