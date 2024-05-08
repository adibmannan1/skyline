import { useState } from "react";

const Details = ({property}) => {
    const menuItems = [
        { id: 'overview', content: property.overview },
        { id: 'price', content: property.price },
        { id: 'details', content: property.size }
      ];
    
      const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0]);
    
      const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
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
            <div className="capitalize">{menuItem.id}</div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white p-4 rounded shadow">

          <div key={activeMenuItem.id}>
            <p>{activeMenuItem.content}</p>
          </div>

      </div>
    </div>
  )
}

export default Details