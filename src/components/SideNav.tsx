import React, { useState } from 'react';
import './SideNav.css';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasChevron?: boolean;
  isDropdown?: boolean;
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const SideNav: React.FC = () => {
  const [isNooksDropdownOpen, setIsNooksDropdownOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Call', 'Engage', 'Prospect', 'Analytics', 'Automation']));

  const toggleCategory = (categoryTitle: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryTitle)) {
      newExpanded.delete(categoryTitle);
    } else {
      newExpanded.add(categoryTitle);
    }
    setExpandedCategories(newExpanded);
  };

  const navigationData: NavCategory[] = [
    {
      title: '',
      items: [
        { 
          id: 'recommendations', 
          label: 'Recommendations', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          )
        },
        { 
          id: 'tasks', 
          label: 'Tasks', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11H15M9 15H15M9 7H15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Call',
      items: [
        { 
          id: 'salesfloor', 
          label: 'Salesfloor', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10L11 14L9 12M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'dial', 
          label: 'Dial', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'call-library', 
          label: 'Call library', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 3V5M16 3V5M3 11H21M3 15H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )
        },
        { 
          id: 'coach', 
          label: 'Coach', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Engage',
      items: [
        { 
          id: 'sequences', 
          label: 'Sequences', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19M16 5V19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'email-outbox', 
          label: 'Email outbox', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'templates', 
          label: 'Templates', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'activity', 
          label: 'Activity', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Prospect',
      items: [
        { 
          id: 'accounts', 
          label: 'Accounts', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'people', 
          label: 'People', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          id: 'enrichment', 
          label: 'Enrichment', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Analytics',
      items: [
        { 
          id: 'reporting', 
          label: 'Reporting', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          hasChevron: true
        }
      ]
    },
    {
      title: 'Automation',
      items: [
        { 
          id: 'automations', 
          label: 'Automations', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15A1.65 1.65 0 0 0 20 14A6 6 0 0 0 14 8A6 6 0 0 0 8 14A6 6 0 0 0 9.4 15L12 17.5L14.6 15Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )
        },
        { 
          id: 'plays', 
          label: 'Plays', 
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          hasChevron: true
        }
      ]
    }
  ];

  const handleNavItemClick = (itemId: string) => {
    console.log(`Navigated to: ${itemId}`);
    // Add your navigation logic here
  };

  return (
    <nav className="side-nav">
      {/* Top border */}
      <div className="nav-border top"></div>
      
      {/* Header */}
      <div className="nav-header">
        <div 
          className="nooks-brand"
          onClick={() => setIsNooksDropdownOpen(!isNooksDropdownOpen)}
        >
          <div className="nooks-icon">N</div>
          <span className="nooks-text">Nooks</span>
          <span className={`chevron ${isNooksDropdownOpen ? 'open' : ''}`}>▼</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        {navigationData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="nav-category">
            {category.title && (
              <div 
                className="category-header"
                onClick={() => toggleCategory(category.title)}
              >
                <h3 className="category-title">{category.title}</h3>
                <span className={`category-chevron ${expandedCategories.has(category.title) ? 'expanded' : ''}`}>
                  {expandedCategories.has(category.title) ? '▼' : '▶'}
                </span>
              </div>
            )}
            {expandedCategories.has(category.title) && category.items.map((item) => (
              <div
                key={item.id}
                className="nav-item"
                onClick={() => handleNavItemClick(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.hasChevron && <span className="item-chevron">›</span>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Settings at bottom */}
      <div className="nav-settings">
        <div className="nav-item">
          <span className="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15A1.65 1.65 0 0 0 20 14A6 6 0 0 0 14 8A6 6 0 0 0 8 14A6 6 0 0 0 9.4 15L12 17.5L14.6 15Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </span>
          <span className="nav-label">Settings</span>
        </div>
      </div>

      {/* Bottom border */}
      <div className="nav-border bottom"></div>
    </nav>
  );
};

export default SideNav;
