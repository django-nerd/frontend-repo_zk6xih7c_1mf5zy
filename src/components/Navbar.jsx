import { Menu, ShoppingBag, Search, User } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 sm:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-slate-900" />
            <span className="font-bold text-lg tracking-tight text-slate-900">Aura Wear</span>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#new" className="hover:text-slate-900">New Arrivals</a>
          <a href="#men" className="hover:text-slate-900">Men</a>
          <a href="#women" className="hover:text-slate-900">Women</a>
          <a href="#sale" className="text-rose-600 font-medium">Sale</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">
            <Search className="h-4 w-4" />
            <span className="text-sm">Search</span>
          </button>
          <button className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
