import { useState } from "react";
import { UploadCloud, Link as LinkIcon, ShieldAlert, Cpu } from "lucide-react";

export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");

  return (
    <div className="p-5 flex flex-col h-full bg-background overflow-y-auto pb-32">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-foreground">مساهمة صحفية</h1>
        <p className="text-sm text-secondary font-medium">شارك الأخبار وادعمها بالمصادر ليتم تقييمها بواسطة الذكاء الاصطناعي.</p>
      </div>

      <div className="bg-primary/10 border border-primary/30 p-4 rounded-xl mb-6 flex gap-3 shadow-sm">
        <ShieldAlert className="text-primary shrink-0" size={24} />
        <div>
          <p className="font-bold text-primary mb-1 text-sm">إرشادات المساهمة:</p>
          <ul className="list-disc list-inside space-y-1 text-secondary text-sm font-medium">
            <li>يجب إرفاق مصدرين على الأقل للخبر.</li>
            <li>تجنب استخدام لغة تحريضية أو عاطفية.</li>
            <li>سيتم مراجعة المحتوى بواسطة خوارزميات الثقة.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-foreground mb-2">عنوان الخبر</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-verification transition-colors shadow-sm"
            placeholder="اكتب عنواناً واضحاً ومباشراً"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-foreground mb-2">تفاصيل الخبر</label>
          <textarea 
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-verification transition-colors resize-none shadow-sm"
            placeholder="اكتب تفاصيل الخبر بموضوعية وحيادية..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-foreground mb-2">المصادر المرفقة (روابط)</label>
          <div className="flex gap-2 mb-2">
            <div className="relative flex-1">
              <LinkIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
              <input 
                type="url" 
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full bg-card border border-border rounded-xl py-2.5 pr-10 pl-4 text-foreground focus:outline-none focus:border-verification transition-colors shadow-sm"
                placeholder="أدخل رابط المصدر"
              />
            </div>
            <button className="bg-card border border-border px-4 rounded-xl text-primary hover:border-primary/50 transition-colors shadow-sm font-bold">
              إضافة
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-foreground mb-2">صورة الخبر (اختياري)</label>
          <div className="border-2 border-dashed border-border bg-card rounded-xl p-8 flex flex-col items-center justify-center text-secondary hover:border-secondary/50 transition-colors cursor-pointer shadow-sm">
            <UploadCloud size={32} className="mb-2" />
            <span className="text-sm font-bold">اضغط لرفع صورة</span>
            <span className="text-[11px] mt-1 font-medium">أو اسحب وأفلت الصورة هنا</span>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full bg-verification hover:bg-verification/90 text-background font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
        <Cpu size={20} />
        إرسال للتحليل الأولي
      </button>
    </div>
  );
}
