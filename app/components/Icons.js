export const CoffeeIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 11.5V14.5M17 11.5H19C20.1046 11.5 21 12.3954 21 13.5V14.5C21 15.6046 20.1046 16.5 19 16.5H17M17 11.5H7M17 14.5H7M7 11.5H5C3.89543 11.5 3 12.3954 3 13.5V14.5C3 15.6046 3.89543 16.5 5 16.5H7M7 11.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8.5V3.5M12 3.5L10 5.5M12 3.5L14 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16.5V19.5C8 20.0523 8.44772 20.5 9 20.5H15C15.5523 20.5 16 20.0523 16 19.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DrinkIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 8.5L6.5 18.5C6.5 19.6046 7.39543 20.5 8.5 20.5H15.5C16.6046 20.5 17.5 19.6046 17.5 18.5L18.5 8.5H5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 13.5V15.5M9 13.5V15.5M12 13.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 8.5H20L19.5 5.5C19.5 4.39543 18.6046 3.5 17.5 3.5H6.5C5.39543 3.5 4.5 4.39543 4.5 5.5L4 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const JuiceIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 14.5C7.5 11.4624 9.96243 9 13 9C16.0376 9 18.5 11.4624 18.5 14.5V19.5C18.5 20.0523 18.0523 20.5 17.5 20.5H8.5C7.94772 20.5 7.5 20.0523 7.5 19.5V14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 9V3.5M13 3.5L11 5.5M13 3.5L15 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DessertIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 11.5H5C4.44772 11.5 4 11.9477 4 12.5V13.5C4 17.366 7.13401 20.5 11 20.5H13C16.866 20.5 20 17.366 20 13.5V12.5C20 11.9477 19.5523 11.5 19 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 11.5V10.5C7.5 7.46243 9.96243 5 13 5C16.0376 5 18.5 7.46243 18.5 10.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LocationIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C16 17 20 13.4183 20 10C20 6.13401 16.4183 3 12 3C7.58172 3 4 6.13401 4 10C4 13.4183 8 17 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function CheckCircle({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );
} 