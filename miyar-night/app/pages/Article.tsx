import { useParams, useNavigate } from "react-router";
import { ArrowRight, Share2, Bookmark, ShieldAlert, CheckCircle, AlertTriangle, ExternalLink, Clock } from "lucide-react";
import { mockArticles } from "../data/mockData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { NewsCard } from "../components/NewsCard";

export function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];
  const relatedArticles = mockArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2);

  const isTrusted = article.trustState === "موثوق";
  const trustColor = isTrusted ? "text-verification" : "text-destructive";
  const trustBg = isTrusted ? "bg-verification/10" : "bg-danger/10";
  const TrustIcon = isTrusted ? CheckCircle : AlertTriangle;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground" dir="rtl">
      {/* App Bar (fixed, solid) */}
      <header className="fixed top-0 left-0 right-0 h-16 md:h-20 lg:h-24 bg-background z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 border-b border-border">
        <button onClick={() => navigate(-1)} className="p-2 md:p-3 lg:p-4 rounded-full bg-card border border-border text-foreground hover:bg-card/80 transition-colors">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
        <div className="flex gap-2 md:gap-4">
          <button className="p-2 md:p-3 lg:p-4 rounded-full bg-card border border-border text-foreground hover:bg-card/80 transition-colors">
            <Bookmark className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
          <button className="p-2 md:p-3 lg:p-4 rounded-full bg-card border border-border text-foreground hover:bg-card/80 transition-colors">
            <Share2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-28 lg:pb-32 overflow-y-auto">
        {/* Hero Image */}
        <div className="relative w-full h-80 md:h-[32rem] lg:h-[40rem] bg-muted">
          <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute top-4 md:top-6 lg:top-8 right-4 md:right-8 lg:right-12">
             <span className="bg-card border border-border text-foreground text-[11px] md:text-sm lg:text-base font-bold px-3 md:px-5 py-1.5 md:py-2.5 rounded-full uppercase shadow-sm">
               {article.category}
             </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-5 md:px-16 lg:px-32 xl:px-48 py-6 md:py-10 lg:py-16 mx-auto max-w-[1400px]">
          {/* Metadata */}
          <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8">
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <div className="bg-card rounded-full px-3 md:px-5 py-1.5 md:py-2 flex items-center gap-2 border border-border shadow-sm">
                <span className="text-foreground font-bold text-xs md:text-sm lg:text-base">{article.source}</span>
                {isTrusted && <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-verification" />}
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm lg:text-base text-secondary font-medium">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                <span>{article.timestamp}</span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-10 lg:mb-14 leading-[1.5] md:leading-[1.6]">
            {article.title}
          </h1>

          {/* AI Verification Section */}
          <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border mb-8 md:mb-12 shadow-sm">
            <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6">
              <div className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl border border-border ${trustBg} ${trustColor}`}>
                <TrustIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <div>
                <h3 className="text-[11px] md:text-sm lg:text-base uppercase tracking-widest text-secondary font-bold mb-1 md:mb-2">حالة المصداقية</h3>
                <span className={`text-lg md:text-2xl lg:text-3xl font-bold ${trustColor}`}>{article.trustState}</span>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-5 bg-background p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-border">
              <ShieldAlert className={`w-4.5 h-4.5 md:w-6 md:h-6 lg:w-8 lg:h-8 ${trustColor}`} style={{ marginTop: '2px' }} />
              <p className="text-sm md:text-lg lg:text-xl text-secondary font-medium leading-relaxed">
                {article.aiAnalysis}
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-10 md:mb-16 lg:mb-20">
            <p className="text-[17px] md:text-xl lg:text-2xl text-foreground/90 leading-[1.8] md:leading-[2] whitespace-pre-line font-medium">
              {article.content}
            </p>
          </div>

          {/* Sources Section */}
          {article.sources && article.sources.length > 0 && (
            <div className="mb-10 md:mb-16 lg:mb-20">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-8">المصادر المرفقة</h2>
              <div className="space-y-3 md:space-y-5">
                {article.sources.map((src, idx) => (
                  <a key={idx} href={src.url} className="flex items-center justify-between p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border hover:border-secondary/30 transition-colors shadow-sm">
                    <div className="flex items-center gap-3 md:gap-5">
                      <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-background flex items-center justify-center border border-border">
                        <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-lg lg:text-xl font-bold text-foreground mb-1">{src.name}</h4>
                        <span className="text-[10px] md:text-sm lg:text-base text-secondary font-bold uppercase">
                          {src.reliability === "high" ? "مصدر موثوق" : src.reliability === "medium" ? "مصدر متوسط الموثوقية" : "مصدر ضعيف الموثوقية"}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4.5 h-4.5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-secondary rotate-180" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-8">أخبار ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {relatedArticles.map((rel) => (
                  <NewsCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
