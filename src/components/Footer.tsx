export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-[0.3em] text-zinc-100 mb-2 uppercase">
              SHACK MOUNTS
            </div>
            <p className="text-sm text-zinc-500">
              Connectivity Anywhere. Built for the Wild.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-500">
              © {currentYear} Shack Mounts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
