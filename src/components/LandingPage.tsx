import React, { useState } from 'react';
import './LandingPage.css';

interface NavOption {
  id: string;
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const LandingPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const navigationOptions: NavOption[] = [
    {
      id: 'side-nav',
      title: 'Side Navigation',
      description: 'Traditional left-side navigation with categorized menu items',
      preview: 'Left sidebar with organized categories and icons',
      component: null
    },
    {
      id: 'expanded-nav',
      title: 'Expanded Navigation',
      description: 'Side navigation with expandable sections and sub-navigation',
      preview: 'Left sidebar with collapsible categories and nested items',
      component: null
    },
    {
      id: 'top-nav',
      title: 'Sequencing Navigation',
      description: 'Side navigation with Sequencing section expanded and Call/Coach collapsed',
      preview: 'Left sidebar with Sequencing expanded and sub-items visible',
      component: null
    },
    {
      id: 'hamburger-menu',
      title: 'Hamburger Menu',
      description: 'Collapsible mobile-first navigation with slide-out panel',
      preview: 'Three-line menu that expands to show navigation',
      component: null
    },
    {
      id: 'tab-navigation',
      title: 'Tab Navigation',
      description: 'Tab-based navigation for content switching',
      preview: 'Horizontal tabs for different content sections',
      component: null
    },
    {
      id: 'tools-nav',
      title: 'Tools Navigation',
      description: 'Side navigation with Reporting, Automations, and Plays under Tools header',
      preview: 'Left sidebar with Tools category containing analytics and automation items',
      component: null
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleBackToLanding = () => {
    setSelectedOption(null);
  };

  if (selectedOption === 'side-nav') {
    // Import and render the SideNav component
    const SideNav = require('./SideNav').default;
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Side Navigation Demo</h2>
        </div>
        <div className="demo-content">
          <SideNav />
          <main className="main-content">
            <div className="content-placeholder">
              {/* Content area is now empty for clean demo */}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (selectedOption === 'expanded-nav') {
    // Import and render the ExpandedSideNav component
    const ExpandedSideNav = require('./ExpandedSideNav').default;
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Expanded Navigation Demo</h2>
        </div>
        <div className="demo-content">
          <ExpandedSideNav />
          <main className="main-content">
            <div className="content-placeholder">
              {/* Content area is now empty for clean demo */}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (selectedOption === 'top-nav') {
    // Import and render the SequencingNav component
    const SequencingNav = require('./SequencingNav').default;
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Sequencing Navigation Demo</h2>
        </div>
        <div className="demo-content">
          <SequencingNav />
          <main className="main-content">
            <div className="content-placeholder">
              {/* Content area is now empty for clean demo */}
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (selectedOption === 'hamburger-menu') {
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Hamburger Menu Demo</h2>
        </div>
        <div className="demo-content">
          <nav className="hamburger-nav-demo">
            <div className="hamburger-button">☰</div>
            <div className="hamburger-menu">
              <a href="#" className="hamburger-item">Home</a>
              <a href="#" className="hamburger-item">About</a>
              <a href="#" className="hamburger-item">Contact</a>
            </div>
          </nav>
          <main className="main-content">
            <div className="content-placeholder">
              <h1>Hamburger Menu Layout</h1>
              <p>Collapsible mobile-first navigation menu.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (selectedOption === 'tab-navigation') {
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Tab Navigation Demo</h2>
        </div>
        <div className="demo-content">
          <nav className="tab-nav-demo">
            <div className="tab-container">
              <button className="tab active">Overview</button>
              <button className="tab">Analytics</button>
              <button className="tab">Reports</button>
              <button className="tab">Settings</button>
            </div>
          </nav>
          <main className="main-content">
            <div className="content-placeholder">
              <h1>Tab Navigation Layout</h1>
              <p>Horizontal tabs for different content sections.</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (selectedOption === 'tools-nav') {
    // Import and render the ToolsNav component
    const ToolsNav = require('./ToolsNav').default;
    return (
      <div className="nav-demo">
        <div className="demo-header">
          <button className="back-button" onClick={handleBackToLanding}>
            ← Back to Navigation Options
          </button>
          <h2>Tools Navigation Demo</h2>
        </div>
        <div className="demo-content">
          <ToolsNav />
          <main className="main-content">
            <div className="content-placeholder">
              {/* Content area is now empty for clean demo */}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="brand">
          <div className="brand-icon">N</div>
          <h1>Navigation Layouts</h1>
        </div>
        <p className="subtitle">Choose your preferred navigation style</p>
      </header>

      <main className="landing-content">
        <div className="options-grid">
          {navigationOptions.map((option) => (
            <div
              key={option.id}
              className={`option-card ${option.id === 'side-nav' || option.id === 'expanded-nav' || option.id === 'top-nav' || option.id === 'tools-nav' ? 'featured' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.id === 'side-nav' && (
                <div className="featured-badge">Option 1</div>
              )}
              {option.id === 'expanded-nav' && (
                <div className="featured-badge">Option 2</div>
              )}
              {option.id === 'top-nav' && (
                <div className="featured-badge">Option 3</div>
              )}
              {option.id === 'tools-nav' && (
                <div className="featured-badge">Option 4</div>
              )}
              <div className="option-preview">
                <div className="preview-placeholder">
                  {option.id === 'side-nav' ? '📱' : option.id === 'expanded-nav' ? '🔽' : option.id === 'top-nav' ? '▶️' : option.id === 'tools-nav' ? '🛠️' : '🔧'}
                </div>
              </div>
              <div className="option-content">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <div className="option-preview-text">{option.preview}</div>
                <button className="select-button">
                  {option.id === 'side-nav' || option.id === 'expanded-nav' || option.id === 'top-nav' || option.id === 'tools-nav' ? 'View Demo' : 'Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="landing-footer">
          <h3>About These Navigation Options</h3>
          <p>
            Each navigation layout is designed with modern UX principles, accessibility in mind, 
            and responsive design. The Side Navigation option is fully implemented and ready to use.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
