function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-semibold text-slate-900">Shop</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Tops</a></li>
              <li><a href="#" className="hover:text-slate-900">Bottoms</a></li>
              <li><a href="#" className="hover:text-slate-900">Outerwear</a></li>
              <li><a href="#" className="hover:text-slate-900">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Help</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
              <li><a href="#" className="hover:text-slate-900">Returns</a></li>
              <li><a href="#" className="hover:text-slate-900">Size Guide</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Get the latest</p>
            <p className="mt-3 text-slate-600">Sign up for emails to get exclusives, stories and more.</p>
            <form className="mt-3 flex">
              <input className="flex-1 rounded-l-md border border-slate-300 px-3 py-2 text-slate-900" placeholder="Email address" />
              <button className="rounded-r-md bg-slate-900 text-white px-4">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aura Wear. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
