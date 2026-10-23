import { Outlet, NavLink } from "react-router";
import {
  Home,
  Compass,
  Search,
  PenSquare,
  User,
} from "lucide-react";
import { motion } from "motion/react";

function AppLogo() {
  return (
    <div className="flex items-center gap-2 md:gap-3" dir="rtl">
      {/* Squared rounded logo mark */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: "clamp(2.2rem, 5vw, 3rem)",
          height: "clamp(2.2rem, 5vw, 3rem)",
          background: "#f6e7a1",
          borderRadius: "30%",
          boxShadow: "0 2px 12px rgba(246,231,161,0.22)",
        }}
      >
        <span
          style={{
            fontFamily: "Cairo, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.1rem, 2.8vw, 1.55rem)",
            color: "#06122b",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          ق
        </span>
      </div>
      {/* App name */}
      <span
        style={{
          fontFamily: "Cairo, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.15rem, 3vw, 1.6rem)",
          color: "#ffffff",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        موثوق
      </span>
    </div>
  );
}

export function Root() {
  return (
    <div
      className="flex flex-col h-screen bg-background text-foreground overflow-hidden font-sans"
      dir="rtl"
    >
      {/* Top Header */}
      

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border px-6 md:px-12 py-3 md:py-5 pb-safe z-50 rounded-t-3xl md:rounded-t-[2.5rem] shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
          <NavItem
            to="/"
            icon={
              <Home className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            }
            label="الرئيسية"
          />
          <NavItem
            to="/discover"
            icon={
              <Compass className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            }
            label="استكشف"
          />
          <NavItem
            to="/publish"
            icon={
              <PenSquare className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            }
            label="نشر"
            isCenter
          />
          <NavItem
            to="/search"
            icon={
              <Search className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            }
            label="بحث"
          />
          <NavItem
            to="/profile"
            icon={
              <User className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />
            }
            label="حسابي"
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({
  to,
  icon,
  label,
  isCenter,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  isCenter?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 relative ${
          isActive
            ? "text-verification"
            : "text-secondary hover:text-foreground transition-colors"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isCenter ? (
            <div className="absolute -top-8 md:-top-10 lg:-top-12 bg-card border border-border rounded-full shadow-lg text-primary hover:text-foreground transition-colors px-[25px] py-[12px] md:px-[30px] md:py-[15px] lg:px-[35px] lg:py-[18px]">
              {icon}
            </div>
          ) : (
            <div className="relative">
              {icon}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 md:-bottom-3 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-foreground rounded-full"
                  style={{ x: "-50%" }}
                />
              )}
            </div>
          )}
          <span
            className={`text-[10px] md:text-xs lg:text-sm font-bold mt-1 md:mt-2 ${isCenter ? "mt-6 md:mt-8 lg:mt-10" : ""}`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}
