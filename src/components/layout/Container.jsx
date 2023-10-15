import classNames from "classnames";

export default function Container({ className, ...props }) {
  return (
    <div
      className={classNames(
        "mx-auto max-w-7xl px-6  xl:px-0 pt-24 sm:pt-32",
        className
      )}
      {...props}
    />
  );
}
