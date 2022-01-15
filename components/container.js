export default function Container({ children, classes, id }) {
  return (
    <div
      id={`${id ? id : ""}`}
      className={`container mx-auto px-5 ${classes ? classes : ""}`}
    >
      {children}
    </div>
  );
}
