export default function PostTitle({ children }) {
  return (
    <h1 className="max-w-4xl mx-auto text-[25px] text-left md:text-5xl text-mz-secondary font-bold tracking-tight leading-tight md:leading-tight mb-5 md:text-center ">
      {children}
    </h1>
  );
}
