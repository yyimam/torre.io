// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="space-x-4">
          <Link href="/jobs">Jobs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
