import { PERSONAL_INFO } from './constants';
import toast from 'react-hot-toast';

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

export const downloadResume = () => {
  try {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = 'Appala_Lohith_Venkata_Guptha_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Downloading Resume PDF...');
  } catch (error) {
    toast.error('Failed to download resume. Please try again.');
  }
};
