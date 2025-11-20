function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium ring-1 ring-inset ring-indigo-200">New Season • SS25</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
              Effortless style for every day
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              Discover premium essentials crafted with sustainable materials. From crisp tees to tailored outerwear, elevate your wardrobe with pieces that last.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#men" className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Shop Men</a>
              <a href="#women" className="px-5 py-3 rounded-md ring-1 ring-slate-300 text-slate-900 hover:bg-slate-50 transition">Shop Women</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
              <div>
                <p className="font-semibold text-slate-700">Free shipping</p>
                <p>On orders over $75</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Easy returns</p>
                <p>30-day guarantee</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Sustainable</p>
                <p>Ethically made</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white rounded-2xl shadow-xl p-4 hidden lg:block">
              <p className="text-xs text-slate-500">Featured Fabric</p>
              <p className="font-semibold text-slate-900">CloudKnit™</p>
              <p className="text-xs text-slate-500 mt-1">Soft, breathable, made to move.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
