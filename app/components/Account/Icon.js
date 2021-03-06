import * as React from "react";

function Icon(props) {
  return (
    <svg width={1000} height={1000} viewBox="0 0 50 50" {...props}>
      <path
        fill="#e5e5e5"
        d="M15 7a4 4 0 118 0 4 4 0 11-8 0m12 0a4 4 0 118 0 4 4 0 11-8 0m0 36a4 4 0 118 0 4 4 0 11-8 0m-12 0a4 4 0 118 0 4 4 0 11-8 0M3 19a4 4 0 118 0 4 4 0 11-8 0m36 0a4 4 0 118 0 4 4 0 11-8 0m0 12a4 4 0 118 0 4 4 0 11-8 0M3 31a4 4 0 118 0 4 4 0 11-8 0"
      />
      <path
        fill="#66cc87"
        d="M3 7a4 4 0 118 0 4 4 0 11-8 0m36 0a4 4 0 118 0 4 4 0 11-8 0m0 36a4 4 0 118 0 4 4 0 11-8 0M3 43a4 4 0 118 0 4 4 0 11-8 0"
      />
      <path
        fill="#4c4c4c"
        d="M13 13h12v12H13zm3 7.5l4.5 4.5 4.5-4.5-4.5-4.5zM37 13v12H25V13zm-7.5 3L25 20.5l4.5 4.5 4.5-4.5zM37 37H25V25h12zm-3-7.5L29.5 25 25 29.5l4.5 4.5zM13 37V25h12v12zm7.5-3l4.5-4.5-4.5-4.5-4.5 4.5z"
      />
    </svg>
  );
}

export default Icon;
