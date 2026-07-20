export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const filterProjectsByCategory = (projects, category) => {
  if (!category || category.toLowerCase() === 'all') return projects;
  return projects.filter(p => 
    p.category.toLowerCase() === category.toLowerCase() || 
    p.tags?.some(tag => tag.toLowerCase() === category.toLowerCase())
  );
};
