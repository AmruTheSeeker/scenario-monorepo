interface ButtonProps {
    children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className="bg-indigo-500 text-white p-4">{children}</button>;
}

export default Button 