import { useState } from "react";

const Details = () => {
    const menuItems = [
        { id: 'overview', label: 'Overview', content: 'This is the overview of the product.' },
        { id: 'price', label: 'Price', content: 'This is the price information of the product.' },
        { id: 'details', label: 'Details', content: 'These are the detailed specifications of the product.' }
      ];
    
      const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);
    
      const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        console.log(activeMenuItem)
      };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Horizontal Menu */}
      <div className="flex space-x-4 mb-4">
        {menuItems.map(menuItem => (
          <button
            key={menuItem.id}
            className={`menu-item ${activeMenuItem.id === menuItem.id ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            {menuItem.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white p-4 rounded shadow">

          <div key={activeMenuItem.id}>
            <h2>{activeMenuItem.label}</h2>
            <p>{activeMenuItem.content}</p>
          </div>

      </div>
    </div>
  )
}

export default Details