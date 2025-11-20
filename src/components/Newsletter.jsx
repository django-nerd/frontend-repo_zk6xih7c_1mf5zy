function Newsletter() {
  return (
    <section className="py-16" id="women">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)]" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Join the inner circle</h3>
              <p className="mt-2 text-white/80">Be first to shop new drops, limited runs, and members-only offers.</p>
            </div>
            <form className="relative">
              <input type="email" placeholder="Enter your email" className="w-full rounded-md bg-white text-slate-900 placeholder-slate-500 py-3 px-4 pr-36 focus:outline-none" />
              <button type="submit" className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-slate-900 text-white hover:bg-slate-800">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
