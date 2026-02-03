export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-shadow duration-200 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
