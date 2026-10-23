import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  ShieldCheck,
  AlertTriangle,
  Music,
  Plus
} from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  media: string | string[];
  mediaType: "image" | "video";
  source: string;
  trusted: boolean;
  likes: string;
  comments: string;
};

const exploreNews: NewsItem[] = [
  {
    id: 1,
    title: "الذكاء الاصطناعي يغير مستقبل الوظائف التقنية",
    description: "شركات التكنولوجيا الكبرى بدأت بإعادة هيكلة فرقها بسبب التطور السريع في تقنيات الذكاء الاصطناعي.",
    media: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    mediaType: "image",
    source: "رويترز",
    trusted: false,
    likes: "12K",
    comments: "840",
  },
  {
    id: 2,
    title: "ارتفاع أسعار النفط عالمياً مع تصاعد التوترات الاقتصادية",
    description: "شهدت الأسواق العالمية ارتفاعاً ملحوظاً بأسعار النفط بعد التوترات الاقتصادية الأخيرة.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4",
    mediaType: "video",
    source: "BBC",
    trusted: true,
    likes: "45K",
    comments: "1.2K",
  },
  {
    id: 3,
    title: "تطورات جديدة في مجالات الطاقة المتجددة",
    description: "مجموعة من الصور تظهر أحدث التطورات حول العالم ومحاولات تقليل الانبعاثات الكربونية.",
    media: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1400&auto=format&fit=crop",
    ],
    mediaType: "image",
    source: "الجزيرة",
    trusted: true,
    likes: "3.4K",
    comments: "210",
  },
];

export default function Discover(): JSX.Element {
  const renderMedia = (news: NewsItem) => {
    const isMultipleImages = Array.isArray(news.media) && news.media.length > 1;
    const isVideo = news.mediaType === "video";
    const isSingleImage = news.mediaType === "image" && (!Array.isArray(news.media) || news.media.length === 1);

    if (isSingleImage) {
      const src = Array.isArray(news.media) ? news.media[0] : news.media;
      return (
        <img
          src={src}
          alt={news.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      );
    }

    if (isVideo || isMultipleImages) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#020814] pb-24 pt-4">
          {isVideo ? (
            <video
              src={news.media as string}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-contain rounded-xl overflow-hidden bg-black"
            />
          ) : (
            <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-xl overflow-hidden bg-black">
              {(news.media as string[]).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-full h-full object-contain flex-shrink-0 snap-center"
                  alt={`Image ${i}`}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="h-[calc(100vh-70px)] w-full overflow-y-scroll snap-y snap-mandatory bg-black scrollbar-hide">
      {exploreNews.map((news) => (
        <section
          key={news.id}
          className="h-full w-full snap-start relative bg-black flex-shrink-0"
        >
          {/* MEDIA RENDER */}
          {renderMedia(news)}

          {/* OVERLAY UI */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-end">
            {/* Gradient overlay for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

            <div className="relative z-10 p-5 md:p-8 lg:p-12 pb-8 md:pb-12 flex items-end justify-between pointer-events-auto max-w-[1200px] mx-auto w-full h-full">
              
              {/* Right Content (Text in RTL) */}
              <div className="flex-1 ml-16 md:ml-24 lg:ml-32">
                
                {/* Source & Trust */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#091632] border border-white/20 flex items-center justify-center text-primary font-bold text-xs md:text-sm">
                    {news.source.substring(0, 2)}
                  </div>
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg drop-shadow-md">
                    {news.source}
                  </span>
                  {news.trusted ? (
                    <div className="flex items-center gap-1 bg-verification/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-verification/30">
                      <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-verification" />
                      <span className="text-[10px] md:text-xs text-verification font-bold">موثوق</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 bg-[#E1A000]/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#E1A000]/30">
                      <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-[#E1A000]" />
                      <span className="text-[10px] md:text-xs text-[#E1A000] font-bold">غير مؤكد</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 drop-shadow-md leading-tight">
                  {news.title}
                </h2>
                
                {/* Description */}
                <p className="text-white/90 text-sm md:text-base lg:text-lg line-clamp-2 md:line-clamp-3 drop-shadow-md mb-4 md:mb-6 lg:w-3/4">
                  {news.description}
                </p>

                {/* Audio/Music Track Scroller */}
                <div className="flex items-center gap-2 text-white/80">
                  <Music className="w-4 h-4 md:w-5 md:h-5" />
                  <div className="w-48 md:w-64 overflow-hidden whitespace-nowrap">
                    <div className="inline-block text-xs md:text-sm">
                      الصوت الأصلي - {news.source} • تغطية إخبارية
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Content (Action Buttons in RTL) */}
              <div className="flex flex-col items-center gap-5 md:gap-7 mb-2">
                
                {/* Profile Avatar */}
                <div className="relative mb-2">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white overflow-hidden bg-[#0A1633] flex items-center justify-center">
                    <span className="text-primary font-bold md:text-lg">{news.source.substring(0, 1)}</span>
                  </div>
                  <button className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center text-white border border-white">
                    <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </div>

                <button className="flex flex-col items-center gap-1 md:gap-2 text-white hover:text-white/80 transition-colors">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-transparent drop-shadow-lg" />
                  <span className="text-xs md:text-sm font-bold drop-shadow-md">{news.likes}</span>
                </button>
                
                <button className="flex flex-col items-center gap-1 md:gap-2 text-white hover:text-white/80 transition-colors">
                  <MessageCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-transparent drop-shadow-lg" />
                  <span className="text-xs md:text-sm font-bold drop-shadow-md">{news.comments}</span>
                </button>
                
                <button className="flex flex-col items-center gap-1 md:gap-2 text-white hover:text-white/80 transition-colors">
                  <Share2 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-transparent drop-shadow-lg" />
                  <span className="text-xs md:text-sm font-bold drop-shadow-md">مشاركة</span>
                </button>

                {/* Audio Spin Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center mt-2 md:mt-4">
                  <Music className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white animate-[spin_4s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
