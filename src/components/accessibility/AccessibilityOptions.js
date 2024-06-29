// src/components/accessibility/AccessibilityOptions.js
import React, { useState, useEffect } from 'react';
import './AccessibilityOptions.css';

function AccessibilityOptions() {
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.body.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
    document.body.classList.toggle('high-contrast', highContrast);
  }, [fontSize, highContrast]);

  return (
    <section className="accessibility-options">
      <div className="container">
        <h2 className="accessibility-headline">Accessibility Options</h2>
        <div className="option">
          <label htmlFor="font-size">Font Size:</label>
          <select id="font-size" value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="high-contrast">High Contrast Mode:</label>
          <input
            type="checkbox"
            id="high-contrast"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
          />
        </div>
      </div>
    </section>
  );
}

export default AccessibilityOptions;
