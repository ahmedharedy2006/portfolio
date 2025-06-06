import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center">
      <p className="text-xl text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} All Rights Reserved For Ahmed Haredy
      </p>

    </footer>
  );
};
