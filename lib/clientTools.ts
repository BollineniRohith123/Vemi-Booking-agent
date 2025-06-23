import { ClientToolImplementation } from 'ultravox-client';
import { switchCategory } from './categoryUtils';

// Client-implemented tool for Inquiry Details (updated for commercial vehicles)
export const updateInquiryTool: ClientToolImplementation = (parameters) => {
  const { inquiryData } = parameters;
  console.debug("Received vehicle inquiry update:", inquiryData);

  if (typeof window !== "undefined") {
    const event = new CustomEvent("vehicleInquiryUpdated", {
      detail: inquiryData
    });
    window.dispatchEvent(event);
  }

  return "Updated the vehicle inquiry details.";
};

export const showVehicleDetailsTool: ClientToolImplementation = (parameters) => {
  const { vehicleName } = parameters;
  console.debug(`Showing details for vehicle: ${vehicleName}`);

  if (typeof window !== "undefined") {
    const event = new CustomEvent("showVehicleDetails", {
      detail: {
        vehicleName,
      }
    });
    window.dispatchEvent(event);
  }

  return `Displayed details for ${vehicleName}.`;
};

// Client-implemented tool for Vehicle Highlighting
export const highlightVehicleTool: ClientToolImplementation = (parameters) => {
  const { vehicleName, action } = parameters;
  console.debug(`Highlighting vehicle: ${vehicleName}, action: ${action}`);

  // Normalize the vehicle name to match the display names
  const normalizedName = vehicleName;

  if (typeof window !== "undefined") {
    const event = new CustomEvent("vehicleHighlight", {
      detail: {
        vehicleName: normalizedName,
        action
      }
    });
    window.dispatchEvent(event);
  }

  return `${action === 'show' ? 'Highlighted' : 'Unhighlighted'} ${normalizedName}`;
};

// Client-implemented tool for Category Switching (updated for commercial vehicles)
export const switchCategoryTool: ClientToolImplementation = (parameters) => {
  const { category, subcategory } = parameters;
  console.debug(`Switching to vehicle category: ${category}${subcategory ? `, subcategory: ${subcategory}` : ''}`);

  // Validate the category for commercial vehicles
  const validCategories = ['trucks', 'buses', 'construction', 'specialty'];  if (!validCategories.includes(category.toLowerCase())) {
    return `Invalid vehicle category: ${category}. Valid categories are: ${validCategories.join(', ')}`;
  }

  // Switch the category using our utility function
  switchCategory(category.toLowerCase(), subcategory);

  return `Switched to ${category}${subcategory ? ` (${subcategory})` : ''} vehicle category`;
};
