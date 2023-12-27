interface ButtonProps {
    children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button style={{ backgroundColor: 'red' }}>{children}</button>;
}

export default Button 