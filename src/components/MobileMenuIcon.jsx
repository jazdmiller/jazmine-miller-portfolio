import React, {useState} from 'react'

function MobileMenuIcon() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <label className="mobile-menu-icon" htmlFor="menu-toggle">
        <input
          type="checkbox"
          id="menu-toggle"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    );
}

export default MobileMenuIcon