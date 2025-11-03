# Y11 Revision - Specification 0984

A clean, responsive revision website template for Specification 0984, featuring dark/light theme support, syntax highlighting, and a mobile-friendly design.

## Features

- 🌗 **Dark/Light Theme Toggle** - Automatic theme detection with manual override
- 🎨 **Syntax Highlighting** - Enhanced Python code highlighting using Prism.js
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- 🔗 **Smooth Navigation** - Back to top functionality and smooth scrolling
- 🎯 **Clean Structure** - Organized sections for Paper 1 and Paper 2 content

## Structure

```
y11revision/
├── index.html          # Main homepage
├── paper1.html         # Paper 1 content and topics
├── paper2.html         # Paper 2 content and topics
├── assets/
│   ├── style.css       # Main stylesheet with theme support
│   └── theme.js        # Theme toggle and functionality
└── README.md          # This file
```

## Customization

### Adding Content

1. **Update Topics**: Edit the table of contents in each HTML file
2. **Add Sections**: Follow the existing section structure with proper IDs
3. **Include Code**: Use `<pre><code class="language-python">` for syntax highlighting

### Theme Customization

The CSS uses custom properties for easy theme customization:

```css
:root {
  --bg: #0f172a;        /* Background color */
  --text: #e5e7eb;      /* Text color */
  --accent: #38bdf8;    /* Accent/link color */
  --border: #334155;    /* Border color */
  /* ... more variables */
}
```

### Specification Updates

Update references to "Specification 0984" throughout the files to match your actual specification number.

## Usage

1. Open `index.html` in a web browser
2. Navigate between Paper 1 and Paper 2 using the top navigation
3. Use the theme toggle (🌓) to switch between light and dark modes
4. Click "Back to top" links to return to the page header

## Development

To serve locally for development:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Then open http://localhost:8080
```

## License

This template is provided as-is for educational use.