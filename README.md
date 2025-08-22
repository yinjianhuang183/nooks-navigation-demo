# Nooks Side Navigation

A modern, responsive side navigation component built with React and TypeScript, featuring a clean design with categorized navigation items.

## Features

- **Responsive Design**: Adapts to different screen sizes
- **Category Organization**: Navigation items grouped by function (Call, Engage, Prospect, Analytics, Automation)
- **Interactive Elements**: Hover effects, click handlers, and dropdown support
- **Accessibility**: Proper semantic HTML and keyboard navigation support
- **Modern Styling**: Clean, professional appearance with smooth transitions

## Navigation Structure

- **Recommendations** - Star icon
- **Tasks** - Checklist icon
- **Call** - Video camera, phone, library, and coaching tools
- **Engage** - Sequences, email, templates, and activity tracking
- **Prospect** - Account and people management, enrichment tools
- **Analytics** - Reporting with expandable submenu
- **Automation** - Workflow automation and playbooks
- **Settings** - Configuration options

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Customization

### Adding New Navigation Items

Edit the `navigationData` array in `src/components/SideNav.tsx`:

```typescript
{
  title: 'New Category',
  items: [
    { id: 'new-item', label: 'New Item', icon: '🔧' }
  ]
}
```

### Styling

Modify `src/components/SideNav.css` to customize:
- Colors and themes
- Spacing and layout
- Typography
- Hover effects and transitions

### Icons

Replace emoji icons with custom SVG icons or icon libraries like:
- React Icons
- Font Awesome
- Material-UI Icons

## Project Structure

```
src/
├── components/
│   ├── SideNav.tsx      # Main navigation component
│   └── SideNav.css      # Navigation styles
├── App.tsx              # Main app component
├── App.css              # App-level styles
├── index.tsx            # Entry point
└── index.css            # Global styles
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
