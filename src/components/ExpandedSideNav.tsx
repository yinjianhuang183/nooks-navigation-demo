import React, { useState } from 'react';
import './ExpandedSideNav.css';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasChevron?: boolean;
  isDropdown?: boolean;
  subItems?: NavItem[];
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const ExpandedSideNav: React.FC = () => {
  const [isNooksDropdownOpen, setIsNooksDropdownOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['call', 'coach']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const navigationData: NavCategory[] = [
    {
      title: 'Engage',
      items: [
        {
          id: 'call',
          label: 'Call',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          hasChevron: true,
          isDropdown: true,
          subItems: [
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
              id: 'dialer',
              label: 'Dialer',
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 8H16M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                </svg>
              ),
              hasChevron: true,
              isDropdown: true,
              subItems: [
                {
                  id: 'ai-roleplay',
                  label: 'AI roleplay',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  id: 'battlecards',
                  label: 'Battlecards',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )
                }
              ]
            }
          ]
        },
        {
          id: 'tasks',
          label: 'Tasks',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11H15M9 15H15M9 7H15M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
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
          id: 'prospects',
          label: 'Prospects',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        {
          id: 'approval',
          label: 'Approval',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H8M16 4V2M16 4V6M8 4V2M8 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 14L11 16L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      title: 'Tools',
      items: [
        {
          id: 'reporting',
          label: 'Reporting',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
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
          id: 'campaigns',
          label: 'Campaigns',
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5.882V19.24C11 20.212 12.143 20.843 12.928 20.201L20.928 13.201C21.554 12.703 21.554 11.797 20.928 11.299L12.928 4.299C12.143 3.657 11 4.288 11 5.26V5.882Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    }
  ];

  const renderNavItem = (item: NavItem, level: number = 0) => (
    <div key={item.id}>
      <div
        className={`nav-item ${level > 0 ? 'sub-item' : ''}`}
        onClick={() => {
          if (item.isDropdown) {
            toggleSection(item.id);
          } else {
            console.log(`Navigated to: ${item.id}`);
          }
        }}
        style={{ paddingLeft: `${20 + level * 20}px` }}
      >
        <span className="nav-icon">{item.icon}</span>
        <span className="nav-label">{item.label}</span>
        {item.hasChevron && (
          <span className={`item-chevron ${expandedSections.has(item.id) ? 'expanded' : ''}`}>
            {expandedSections.has(item.id) ? '▼' : '▶'}
          </span>
        )}
      </div>
      
      {item.subItems && expandedSections.has(item.id) && (
        <div className="sub-items">
          {item.subItems.map((subItem) => renderNavItem(subItem, level + 1))}
        </div>
      )}
    </div>
  );

  const handleNavItemClick = (itemId: string) => {
    console.log(`Navigated to: ${itemId}`);
    // Add your navigation logic here
  };

  return (
    <nav className="side-nav expanded-nav">
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
              <h3 className="category-title">{category.title}</h3>
            )}
            {category.items.map((item) => renderNavItem(item))}
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

export default ExpandedSideNav;
