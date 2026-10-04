export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 border-t border-[#e5e4e7] dark:border-[#2e303a] bg-white/50 dark:bg-[#16171d]/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b6375] dark:text-[#9ca3af]">
        <div>
          <p>© {currentYear} Rayhan Abdallah. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span>Universitas Pasundan</span>
          <span>•</span>
          <span>Informatics Student</span>
        </div>
      </div>
    </footer>
  );
}
