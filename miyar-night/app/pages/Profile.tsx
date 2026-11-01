import { Settings, ShieldCheck, Bookmark, Clock, Award, ChevronLeft } from "lucide-react";

export function Profile() {
  return (
    <div className="p-5 flex flex-col h-full bg-background overflow-y-auto pb-32">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">حسابي</h1>
        <button className="p-2 bg-card rounded-full border border-border shadow-sm hover:bg-card/80 transition-colors text-foreground">
          <Settings size={20} />
        </button>
      </div>

      <div className="bg-card rounded-2xl p-5 border border-border mb-6 flex items-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border-2 border-primary text-xl font-bold text-foreground">
          أ.م
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-foreground mb-1">أحمد محمد</h2>
          <p className="text-sm text-secondary font-bold">مساهم موثوق</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-bold text-sm">
          <Award size={16} />
          المستوى 4
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <div className="text-secondary mb-2 flex items-center gap-1.5">
            <ShieldCheck size={16} />
            <span className="text-[11px] font-bold uppercase tracking-wider">سجل المصداقية</span>
          </div>
          <div className="text-xl font-bold text-verification">موثوق</div>
        </div>
        <div className="bg-card rounded-xl p-4 border border-border shadow-sm">
          <div className="text-secondary mb-2 flex items-center gap-1.5">
            <Bookmark size={16} />
            <span className="text-[11px] font-bold uppercase tracking-wider">المقالات المحفوظة</span>
          </div>
          <div className="text-xl font-bold text-foreground">28</div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-bold text-secondary mb-3">إعدادات ونشاطات</h3>
        
        <ProfileOption icon={<Bookmark size={20} />} title="العناصر المحفوظة" />
        <ProfileOption icon={<Clock size={20} />} title="سجل القراءة" />
        <ProfileOption icon={<ShieldCheck size={20} />} title="إعدادات الثقة والمصادر" />
        <ProfileOption icon={<Award size={20} />} title="لوحة تحكم المساهمين" badge="جديد" />
      </div>
    </div>
  );
}

function ProfileOption({ icon, title, badge }: { icon: React.ReactNode, title: string, badge?: string }) {
  return (
    <button className="w-full bg-card border border-border p-4 rounded-xl flex items-center justify-between hover:border-secondary/30 transition-colors shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-secondary">{icon}</div>
        <span className="font-bold text-foreground">{title}</span>
        {badge && (
          <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <ChevronLeft size={20} className="text-secondary" />
    </button>
  );
}
