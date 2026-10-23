import { CheckCircle, AlertTriangle, ShieldCheck, Clock, Activity, Fingerprint, MessageSquare, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NewsCardProps {
  article: {
    id: string;
    title: string;
    preview: string;
    source: string;
    timestamp: string;
    trustState: string;
    aiAnalysis: string;
    category: string;
    image: string;
  };
}

export function NewsCard({ article }: NewsCardProps) {
  const isTrusted = article.trustState === "موثوق";
  
  const getTrustColor = () => {
    return isTrusted ? "text-verification" : "text-destructive";
  };

  const getTrustBgColor = () => {
    return isTrusted ? "bg-[#2ED3B715]" : "bg-[#EF444415]"; // Using solid transparency instead of blur
  };

  return (
    <Link to={`/article/${article.id}`} className="block h-full">
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="bg-card rounded-[20px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden border border-border shadow-sm hover:border-secondary/30 transition-colors h-full flex flex-col"
      >
        <div className="relative h-64 md:h-72 lg:h-80 bg-muted shrink-0">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          {/* Solid color gradient fallback using solid overlays instead of blur */}
          <div className="absolute inset-0 bg-[#06122B]/60" />
          
          <div className="absolute top-4 md:top-5 right-4 md:right-5">
            <span className="bg-card text-white text-[10px] md:text-xs lg:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border uppercase tracking-wider">
              {article.category}
            </span>
          </div>
          
          <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5 flex justify-between items-end">
            <div className="flex items-center gap-2">
              <div className="bg-card rounded-full px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 border border-border shadow-sm">
                <span className="text-white font-bold text-xs md:text-sm">{article.source}</span>
                {isTrusted && <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-verification" />}
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className={`flex items-center gap-2 md:gap-3 ${getTrustBgColor()} ${getTrustColor()} px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl border border-border font-bold text-sm md:text-base shadow-sm leading-none`}>
                {isTrusted ? <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> : <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />}
                {article.trustState}
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-[11px] md:text-xs lg:text-sm text-secondary mb-3 md:mb-4 font-medium uppercase tracking-wide">
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{article.timestamp}</span>
          </div>

          <h3 className="text-[1.35rem] md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-[1.4] md:leading-[1.5]">
            {article.title}
          </h3>
          
          <p className="text-[15px] md:text-base lg:text-lg text-secondary/90 line-clamp-2 mb-5 md:mb-6 leading-relaxed flex-1">
            {article.preview}
          </p>

          {/* AI Analysis Terminal Block */}
          <div className="bg-background rounded-xl md:rounded-2xl p-4 md:p-5 border border-border relative overflow-hidden group mb-5 md:mb-6 mt-auto">
            <div className="absolute top-0 right-0 w-1 md:w-1.5 h-full bg-border group-hover:bg-verification transition-colors"></div>
            
            <div className="flex items-start gap-3 md:gap-4">
              <div className={`mt-0.5 p-2 md:p-2.5 rounded-lg md:rounded-xl bg-card border border-border ${getTrustColor()}`}>
                <Fingerprint className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-xs md:text-sm lg:text-base font-bold text-white tracking-wide flex items-center gap-1.5 md:gap-2">
                    <Activity className={`w-3 h-3 md:w-4 md:h-4 ${getTrustColor()}`} />
                    موجز المصداقية
                  </span>
                </div>
                <p className="text-[13px] md:text-sm lg:text-base text-secondary leading-relaxed font-medium">
                  {article.aiAnalysis}
                </p>
              </div>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-end gap-4 md:gap-6 pt-2">
            <button 
              onClick={(e) => e.preventDefault()} 
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-bold mt-0.5">تعليق</span>
            </button>
            <button 
              onClick={(e) => e.preventDefault()} 
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <Share2 className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-bold mt-0.5">مشاركة</span>
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
