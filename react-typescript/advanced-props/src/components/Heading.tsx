type HeadingProps = {
  children: string;
};

function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}
export default Heading;
