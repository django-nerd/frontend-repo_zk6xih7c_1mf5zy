const products = [
  {
    id: 1,
    name: "Everyday Tee",
    price: 28,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1520976193296-b1e3d51d2f9a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tailored Chinos",
    price: 68,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Oversized Hoodie",
    price: 58,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 98,
    tag: "Icon",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProductGrid() {
  return (
    <section className="py-14" id="men">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">View all</a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <div className="aspect-[4/5] bg-slate-100 bg-center bg-cover" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="absolute left-3 top-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 ring-1 ring-inset ring-slate-200">
                {p.tag}
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-900">{p.name}</p>
                <p className="text-slate-600 text-sm">${p.price}</p>
                <button className="mt-3 w-full rounded-md bg-slate-900 text-white py-2 text-sm hover:bg-slate-800 transition">Add to bag</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
