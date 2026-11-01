import {
  Search as SearchIcon,
  Filter,
  TrendingUp,
  Hash,
  ShieldCheck,
  AlertTriangle,
  Globe,
  MapPin,
  Newspaper,
  Radio,
  UserRound,
  ChevronLeft,
} from "lucide-react";

import { categories } from "../data/mockData";

const trendingTopics = [
  "الذكاء الاصطناعي",
  "الاقتصاد العالمي",
  "الانتخابات",
  "الطاقة",
  "الأردن",
  "الرياضة",
];

const channels = [
  "الجزيرة",
  "Reuters",
  "BBC",
  "العربية",
  "CNN",
  "CBC",
];

const reporters = [
  "أحمد منصور",
  "فيصل القاسم",
  "محمد الخالدي",
  "Sara Sidner",
];

export function Search() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-y-auto pb-36">
      {/* Header */}
      <div className="px-5 md:px-12 lg:px-24 pt-8 md:pt-12 pb-6 border-b border-border/60 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              البحث
            </h1>

            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-1 md:mt-2">
              ابحث عن الأخبار، القنوات، والصحفيين
            </p>
          </div>

          <button className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl md:rounded-3xl bg-card border border-border flex items-center justify-center">
            <Filter className="text-primary w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>
        </div>

        {/* Main Search */}
        <div className="relative">
          <SearchIcon
            className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />

          <input
            type="text"
            placeholder="ابحث عن خبر، قناة، أو صحفي..."
            className="
              w-full
              h-14
              md:h-16
              lg:h-20
              rounded-2xl
              md:rounded-3xl
              bg-card
              border
              border-border
              pr-14
              md:pr-16
              lg:pr-20
              pl-5
              md:pl-8
              text-[15px]
              md:text-lg
              lg:text-xl
              text-foreground
              placeholder:text-muted-foreground
              focus:outline-none
              focus:border-primary/50
              transition-all
            "
          />
        </div>

        {/* Local / Global */}
        <div className="flex gap-3 md:gap-5 mt-5 md:mt-8">
          <button
            className="
              flex-1
              h-12
              md:h-14
              lg:h-16
              rounded-full
              bg-card
              border
              border-border
              flex
              items-center
              justify-center
              gap-2
              text-sm
              md:text-base
              lg:text-lg
              font-bold
            "
          >
            <MapPin className="text-primary w-4.5 h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            محلي
          </button>

          <button
            className="
              flex-1
              h-12
              md:h-14
              lg:h-16
              rounded-full
              bg-card
              border
              border-border
              flex
              items-center
              justify-center
              gap-2
              text-sm
              md:text-base
              lg:text-lg
              font-bold
            "
          >
            <Globe className="text-primary w-4.5 h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            عالمي
          </button>
        </div>
      </div>

      <div className="px-5 md:px-12 lg:px-24 py-6 md:py-10 space-y-8 md:space-y-12 max-w-5xl mx-auto">
        {/* Trust Filter */}
        <section>
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <ShieldCheck
              className="text-verification w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            />

            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground">
              حالة التحقق
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <button
              className="
                bg-card
                border
                border-border
                rounded-2xl
                md:rounded-3xl
                h-14
                md:h-16
                lg:h-20
                flex
                items-center
                justify-center
                gap-2
                md:gap-3
                transition-all
                hover:border-verification/50
              "
            >
              <ShieldCheck
                className="text-verification w-4.5 h-4.5 md:w-6 md:h-6 lg:w-7 lg:h-7"
              />

              <span className="font-bold text-sm md:text-base lg:text-lg">موثوق</span>
            </button>

            <button
              className="
                bg-card
                border
                border-border
                rounded-2xl
                md:rounded-3xl
                h-14
                md:h-16
                lg:h-20
                flex
                items-center
                justify-center
                gap-2
                md:gap-3
                transition-all
                hover:border-warning/50
              "
            >
              <AlertTriangle
                className="text-[#E1A000] w-4.5 h-4.5 md:w-6 md:h-6 lg:w-7 lg:h-7"
              />

              <span className="font-bold text-sm md:text-base lg:text-lg text-[#E1A000]">
                غير مؤكد
              </span>
            </button>
          </div>
        </section>

        {/* Trending */}
        <section>
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <TrendingUp className="text-primary w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />

            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground">
              المواضيع الشائعة
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                className="
                  px-4
                  md:px-6
                  lg:px-8
                  h-11
                  md:h-14
                  lg:h-16
                  rounded-xl
                  md:rounded-2xl
                  bg-card
                  border
                  border-border
                  flex
                  items-center
                  gap-2
                  md:gap-3
                  text-sm
                  md:text-base
                  lg:text-lg
                  font-bold
                  transition-all
                  hover:border-primary/40
                "
              >
                <Hash className="text-secondary w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* Channels */}
        <section>
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Radio className="text-primary w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />

              <h2 className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground">
                القنوات والمصادر
              </h2>
            </div>

            <button className="text-xs md:text-sm lg:text-base text-primary font-bold flex items-center gap-1 md:gap-2">
              عرض الكل
              <ChevronLeft className="w-3.5 h-3.5 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {channels.map((channel) => (
              <button
                key={channel}
                className="
                  w-full
                  bg-card
                  border
                  border-border
                  rounded-2xl
                  md:rounded-3xl
                  p-4
                  md:p-6
                  flex
                  items-center
                  justify-between
                  transition-all
                  hover:border-primary/30
                "
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div
                    className="
                      w-12
                      md:w-16
                      lg:w-20
                      h-12
                      md:h-16
                      lg:h-20
                      rounded-xl
                      md:rounded-2xl
                      bg-secondary-background
                      border
                      border-border
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Newspaper
                      className="text-primary w-4.5 h-4.5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                    />
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-sm md:text-lg lg:text-xl">
                      {channel}
                    </p>

                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground mt-1 md:mt-2">
                      مصدر إخباري موثوق
                    </p>
                  </div>
                </div>

                <ShieldCheck
                  className="text-verification w-4.5 h-4.5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Reporters */}
        <section>
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <UserRound className="text-primary w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />

            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground">
              الصحفيون والمراسلون
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {reporters.map((reporter) => (
              <button
                key={reporter}
                className="
                  w-full
                  bg-card
                  border
                  border-border
                  rounded-2xl
                  md:rounded-3xl
                  p-4
                  md:p-6
                  flex
                  items-center
                  justify-between
                  transition-all
                  hover:border-primary/30
                "
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div
                    className="
                      w-12
                      md:w-16
                      lg:w-20
                      h-12
                      md:h-16
                      lg:h-20
                      rounded-full
                      bg-secondary-background
                      border
                      border-border
                    "
                  />

                  <div className="text-right">
                    <p className="font-bold text-sm md:text-lg lg:text-xl">
                      {reporter}
                    </p>

                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground mt-1 md:mt-2">
                      مراسل إخباري
                    </p>
                  </div>
                </div>

                <ChevronLeft
                  className="text-muted-foreground w-4.5 h-4.5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Hash className="text-primary w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />

            <h2 className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground">
              التصنيفات
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {categories
              .filter((c) => c !== "الكل")
              .map((cat) => (
                <button
                  key={cat}
                  className="
                    h-14
                    md:h-16
                    lg:h-20
                    rounded-2xl
                    md:rounded-3xl
                    bg-card
                    border
                    border-border
                    text-center
                    px-4
                    font-bold
                    text-sm
                    md:text-base
                    lg:text-lg
                    transition-all
                    hover:border-primary/40
                  "
                >
                  {cat}
                </button>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
