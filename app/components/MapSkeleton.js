export default function MapSkeleton() {
  return (
    <div className="h-full w-full rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse">
      <div className="h-full w-full flex items-center justify-center">
        <svg 
          className="w-12 h-12 text-gray-300 dark:text-gray-600" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 21C16 17 20 13.4183 20 10C20 6.13401 16.4183 3 12 3C7.58172 3 4 6.13401 4 10C4 13.4183 8 17 12 21Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
} 