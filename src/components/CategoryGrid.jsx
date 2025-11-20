const categories = [
  { key: 'men', title: 'Menswear', image: 'https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW5zd2VhcnxlbnwwfDB8fHwxNzYzNjMzMTk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'women', title: 'Womenswear', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop' },
  { key: 'sale', title: 'Sale', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop' },
];

function CategoryGrid() {
  return (
    <section className="py-14" id="new">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Shop by category</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <a key={c.key} href={`#${c.key}`} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-[4/5] bg-slate-200 bg-center bg-cover" style={{ backgroundImage: `url(${c.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-white text-lg font-semibold">{c.title}</p>
                <p className="text-white/80 text-xs">Explore collection</p>
              </div>
              <div className="absolute inset-0 ring-0 ring-white/0 group-hover:ring-8 group-hover:ring-white/20 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;
