export const Star = ({ className, width,
  height }: props) => {
  return (
    <svg
      width={width || "26"}
      height={height || "24"}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.7128 0L15.6196 8.98278H25.0263L17.4161 14.5344L20.3229 23.5172L12.7128 17.9656L5.10263 23.5172L8.00945 14.5344L0.399303 8.98278H9.80596L12.7128 0Z"
        fill="#FFC728"
      />
    </svg>
  );
};
interface props { className?: string, height?: string, width?: string }