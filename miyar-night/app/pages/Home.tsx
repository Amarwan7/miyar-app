import { useState } from "react";
import { mockArticles, categories } from "../data/mockData";
import { NewsCard } from "../components/NewsCard";
import { Bell, Activity, Radar } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [isLocal, setIsLocal] = useState(false);

  const filteredArticles = mockArticles.filter((article) => {
    if (activeCategory !== "الكل" && article.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Header */}
      <header className="px-5 md:px-8 lg:px-12 pt-6 md:pt-10 lg:pt-14 pb-4 md:pb-6 sticky top-0 bg-background z-40 border-b border-border">
        <div className="flex items-center justify-between mb-6 md:mb-10">
          {/* Logo + App name */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F35ef38cd5bdf40b6b02e1f614868613b%2F388b8476362243d3bca9dc3e36cab016?format=webp&width=800&height=1200"
              alt="Miyar logo"
              className="shrink-0 rounded-[28%] object-contain"
              style={{
                width: "clamp(2.8rem, 8vw, 3.8rem)",
                height: "clamp(2.8rem, 8vw, 3.8rem)",
              }}
            />
            <span
              className="text-foreground"
              style={{
                fontFamily: "Cairo, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.15rem, 3vw, 1.6rem)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              موثوق
            </span>
          </div>

          {/* Bell button */}
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl md:rounded-3xl bg-card flex items-center justify-center border border-border text-foreground relative shadow-sm hover:bg-card/80 transition-colors">
              <Bell className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              <span className="absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 lg:top-4 lg:right-4 w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-destructive rounded-full border-2 border-card" />
            </button>
          </div>
        </div>

        {/* Global / Local Toggle */}
        <div className="bg-card p-1 md:p-1.5 rounded-xl md:rounded-2xl flex items-center mb-5 md:mb-8 border border-border">
          <button
            onClick={() => setIsLocal(false)}
            className={`flex-1 py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg font-bold rounded-lg md:rounded-xl transition-colors ${
              !isLocal ? "bg-verification text-background" : "text-secondary hover:text-foreground"
            }`}
          >
            الساحة العالمية
          </button>
          <button
            onClick={() => setIsLocal(true)}
            className={`flex-1 py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg font-bold rounded-lg md:rounded-xl transition-colors ${
              isLocal ? "bg-verification text-background" : "text-secondary hover:text-foreground"
            }`}
          >
            الشأن المحلي
          </button>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto overflow-y-hidden gap-2 md:gap-4 pb-3 pt-1 scrollbar-hide -mx-5 px-5 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 scroll-smooth snap-x snap-mandatory touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
          {categories.map((cat) => (
            cat === "محلي" || cat === "عالمي" ? null : (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 whitespace-nowrap rounded-xl md:rounded-2xl text-sm md:text-base lg:text-lg font-bold border transition-colors snap-start ${ activeCategory === cat ? "bg-card text-foreground border-border shadow-sm" : "bg-transparent text-secondary border-border hover:bg-card hover:text-foreground" } px-6 md:px-10 lg:px-14 py-2.5 md:py-3.5 lg:py-4`}
              >
                {cat}
              </button>
            )
          ))}
        </div>
      </header>

      {/* Feed */}
      <div className="p-5 md:p-8 lg:p-12 flex-1 pb-24 md:pb-32 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {filteredArticles.map((article, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={article.id}
          >
            <NewsCard article={article} />
          </motion.div>
        ))}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20 text-secondary col-span-1 md:col-span-2 lg:col-span-3">
            <Radar className="mx-auto mb-4 opacity-20 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <p className="font-medium text-sm md:text-base lg:text-lg">لا توجد أخبار مؤكدة في هذا القسم حالياً.</p>
          </div>
        )}
      </div>
    </div>
  );
}
