"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ACTIVITIES,
  PROGRAM_GOALS,
  CORPORATE_DIVISIONS,
  MONTHLY_CYCLES,
  FAQS,
  ActivityStep,
} from "./data";
import {
  ClayHeroScene,
  ClayRocket,
  ClayPiggyBank,
  ClayLightbulb,
  ClayBriefcase,
  ClayTrophy,
  ClayMegaphone,
  ClayTarget,
  MemphisPillBadge,
} from "./components/ClayIllustrations";
import {
  ArrowUpRight,
  ChevronRight,
  Search,
  ArrowRight,
  ChevronLeft,
  X,
  Menu,
  ArrowUp,
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  HelpCircle,
  Briefcase,
  Award,
  Layers,
} from "lucide-react";

export default function Home() {
  const [selectedPhase, setSelectedPhase] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeStepModal, setActiveStepModal] = useState<ActivityStep | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "rail">("grid");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeDivision, setActiveDivision] = useState<string>("ceo");
  const [activeMonthCycle, setActiveMonthCycle] = useState<number>(1);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const phases = [
    { id: "all", label: "Semua Tahapan", count: 14 },
    { id: "Inisiasi & Formasi", label: "Fase 01: Inisiasi", count: 4 },
    { id: "Perencanaan & Produk", label: "Fase 02: Perencanaan", count: 3 },
    { id: "Peluncuran & Operasional", label: "Fase 03: Operasional", count: 4 },
    { id: "Sosial & Likuidasi", label: "Fase 04: Likuidasi", count: 3 },
  ];

  // Lock body scroll when modal or mobile menu drawer is open
  useEffect(() => {
    if (activeStepModal || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeStepModal, mobileMenuOpen]);

  // Monitor scroll for floating quick-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredActivities = useMemo(() => {
    return ACTIVITIES.filter((item) => {
      const matchesPhase =
        selectedPhase === "all" || item.phase === selectedPhase;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.number.includes(searchQuery);
      return matchesPhase && matchesQuery;
    });
  }, [selectedPhase, searchQuery]);

  const handleNextStep = useCallback(() => {
    if (!activeStepModal) return;
    const currentIndex = ACTIVITIES.findIndex((s) => s.id === activeStepModal.id);
    if (currentIndex < ACTIVITIES.length - 1) {
      setActiveStepModal(ACTIVITIES[currentIndex + 1]);
    }
  }, [activeStepModal]);

  const handlePrevStep = useCallback(() => {
    if (!activeStepModal) return;
    const currentIndex = ACTIVITIES.findIndex((s) => s.id === activeStepModal.id);
    if (currentIndex > 0) {
      setActiveStepModal(ACTIVITIES[currentIndex - 1]);
    }
  }, [activeStepModal]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeStepModal) return;
      if (e.key === "Escape") {
        setActiveStepModal(null);
      } else if (e.key === "ArrowRight") {
        handleNextStep();
      } else if (e.key === "ArrowLeft") {
        handlePrevStep();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStepModal, handleNextStep, handlePrevStep]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentDivision = useMemo(() => {
    return CORPORATE_DIVISIONS.find((d) => d.id === activeDivision) || CORPORATE_DIVISIONS[0];
  }, [activeDivision]);

  const currentMonthData = useMemo(() => {
    return MONTHLY_CYCLES.find((m) => m.month === activeMonthCycle) || MONTHLY_CYCLES[0];
  }, [activeMonthCycle]);

  // Map phase to friendly clay icon
  const getPhaseIcon = (phaseIndex: number) => {
    switch (phaseIndex) {
      case 1:
        return <ClayBriefcase className="w-12 h-12" />;
      case 2:
        return <ClayLightbulb className="w-12 h-12" />;
      case 3:
        return <ClayRocket className="w-12 h-12" />;
      case 4:
        return <ClayPiggyBank className="w-12 h-12" />;
      default:
        return <ClayTarget className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0F1115] flex flex-col font-sans selection:bg-[#FFE500] selection:text-[#0F1115] relative overflow-x-hidden">
      {/* ------------------------------------------------------------ */}
      {/* 1. DISTINCTIVE DIAGONAL YELLOW STRIPES TOP BANNER */}
      {/* ------------------------------------------------------------ */}
      <div className="w-full bg-[#FFE500] border-b-2 border-[#0F1115] overflow-hidden select-none">
        <div className="flex items-center justify-between px-3 sm:px-6 py-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0F1115]">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
            {/* Diagonal Stripes Mini Box */}
            <div className="w-7 h-4 bg-diagonal-stripes border border-[#0F1115] rounded-xs shrink-0" />
            <span className="truncate">
              SCSMENDA // PROGRAM KEWIRAUSAHAAN SISWA RESMI
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 bg-[#0F1115] text-[#FFE500] text-[10px] rounded-full font-sans font-black">
              100% PRAKTIK MANDIRI
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 shrink-0 text-[11px]">
            <span>14 TAHAPAN</span>
            <span>•</span>
            <span>3 BULAN OPERASI</span>
            <span>•</span>
            <span className="bg-[#0F1115] text-white px-2 py-0.5 rounded text-[10px]">
              TA 2026/2027
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. MODERN CORPORATE MEMPHIS HEADER */}
      {/* ------------------------------------------------------------ */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b-2 border-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Left: Brand with Official Logo & Circular Emblem */}
            <a href="#" className="flex items-center space-x-3 group shrink-0">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#FFE500] border-2 border-[#0F1115] rounded-full p-1.5 flex items-center justify-center shadow-[3px_3px_0px_#0F1115] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_#0F1115] transition-all overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo Student Company of SMENDA"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-full"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#0F1115] leading-none">
                    SCSMENDA
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#FFE500] rounded-full border border-[#0F1115]" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#525866] font-bold block mt-0.5 truncate">
                  STUDENT COMPANY SMENDA
                </span>
              </div>
            </a>

            {/* Middle: Modern Infographic Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0F1115]">
              <button
                onClick={() => scrollToSection("overview")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [01] Esensi
              </button>
              <button
                onClick={() => scrollToSection("kegiatan")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [02] 14 Tahapan
              </button>
              <button
                onClick={() => scrollToSection("siklus")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [03] Siklus 3 Bulan
              </button>
              <button
                onClick={() => scrollToSection("organisasi")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [04] Struktur Tim
              </button>
              <button
                onClick={() => scrollToSection("tujuan")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [05] 6 Capaian
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="px-3 py-2 rounded-lg hover:bg-[#FFE500] transition-colors"
              >
                [06] FAQ
              </button>
            </nav>

            {/* Right: Tactile Action Button & Mobile Hamburger */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <button
                onClick={() => scrollToSection("kegiatan")}
                className="btn-clay-yellow hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-black tracking-wider uppercase"
              >
                <span>Mulai Eksplorasi</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 text-[#0F1115] border-2 border-[#0F1115] bg-[#FFE500] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center"
                aria-label="Buka menu navigasi"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-[#0F1115]/60 backdrop-blur-xs z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative z-40 lg:hidden border-b-2 border-[#0F1115] bg-[#FAF9F5] px-4 py-6 shadow-2xl max-h-[calc(100dvh-5rem)] overflow-y-auto animate-in slide-in-from-top duration-200">
              <div className="max-w-7xl mx-auto space-y-4">
                <div className="flex items-center justify-between border-b-2 border-[#0F1115] pb-3 text-xs font-mono font-bold text-[#525866]">
                  <span>NAVIGASI PROGRAM</span>
                  <span className="bg-[#FFE500] text-[#0F1115] px-2 py-0.5 rounded-full border border-[#0F1115]">
                    VOL. 2026
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm font-mono font-bold uppercase">
                  <button
                    onClick={() => scrollToSection("overview")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 01 ] Definisi & 3 Pilar</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("kegiatan")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 02 ] 14 Tahapan Lengkap</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("siklus")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 03 ] Siklus 3 Bulan Operasi</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("organisasi")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 04 ] Struktur 5 Divisi</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("tujuan")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 05 ] 6 Capaian Mutu</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="flex items-center justify-between p-3.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[3px_3px_0px_#0F1115] text-left hover:bg-[#FFE500] transition-colors"
                  >
                    <span>[ 06 ] FAQ & Tanya Jawab</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection("kegiatan")}
                    className="btn-clay-yellow w-full py-3.5 text-xs font-black tracking-wider uppercase flex items-center justify-center space-x-2"
                  >
                    <span>Jelajahi 14 Tahapan Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* ------------------------------------------------------------ */}
      {/* 3. HERO SECTION (CORPORATE MEMPHIS + 3D CLAY CENTERPIECE) */}
      {/* ------------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b-2 border-[#0F1115] bg-[#FAF9F5]">
        {/* Playful Memphis Abstract Decorations in Background */}
        <div className="absolute top-10 right-1/3 w-32 h-32 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="absolute bottom-6 left-10 w-24 h-24 bg-dot-pattern-yellow opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Asymmetric Typography & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Memphis Top Pill Tag */}
              <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#0F1115]">
                <span className="w-3 h-3 bg-diagonal-stripes rounded-full border border-[#0F1115]" />
                <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase text-[#0F1115]">
                  PROGRAM KEWIRAUSAHAAN UNGGULAN
                </span>
                <span className="text-[10px] bg-[#FFE500] px-2 py-0.5 rounded-full font-black border border-[#0F1115]">
                  SMENDA
                </span>
              </div>

              {/* Expressive Massive Headline with Yellow Stripe Accent */}
              <div className="space-y-2">
                <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.98] tracking-tight uppercase text-[#0F1115]">
                  MENCETAK <br />
                  <span className="relative inline-block my-1">
                    <span className="relative z-10 px-2 text-[#0F1115]">WIRAUSAHA</span>
                    <span className="absolute inset-x-0 bottom-1 sm:bottom-2 h-6 sm:h-9 bg-[#FFE500] -z-0 rounded-lg transform -rotate-1 border-2 border-[#0F1115]" />
                  </span>
                  <br />
                  MUDA MANDIRI.
                </h1>

                <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#525866] pt-1 font-bold">
                  STUDENT COMPANY OF SMENDA (SCSMENDA) // TAHUN AJARAN 2026/2027
                </p>
              </div>

              {/* Punchy Narrative Paragraph */}
              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0px_#0F1115] relative overflow-hidden">
                {/* Diagonal Stripe accent ribbon on top edge of card */}
                <div className="absolute top-0 inset-x-0 h-2 bg-diagonal-stripes border-b border-[#0F1115]" />
                <p className="text-sm sm:text-base md:text-lg text-[#181A20] leading-relaxed font-sans pt-1">
                  Program pendidikan kewirausahaan modern dengan membentuk korporasi riil yang{" "}
                  <strong className="bg-[#FFE500] px-1.5 py-0.5 rounded text-[#0F1115] border border-[#0F1115]/30">
                    beranggotakan siswa
                  </strong>
                  ,{" "}
                  <strong className="bg-[#FFE500] px-1.5 py-0.5 rounded text-[#0F1115] border border-[#0F1115]/30">
                    dijalankan siswa
                  </strong>
                  , dan{" "}
                  <strong className="bg-[#FFE500] px-1.5 py-0.5 rounded text-[#0F1115] border border-[#0F1115]/30">
                    dikembangkan oleh siswa
                  </strong>
                  .
                </p>
              </div>

              {/* Interactive CTA Button Cluster */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection("kegiatan")}
                  className="btn-clay-yellow px-6 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center space-x-2"
                >
                  <span>Jelajahi 14 Tahapan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection("siklus")}
                  className="btn-clay-white px-6 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-[#0F1115]" />
                  <span>Siklus 3 Bulan</span>
                </button>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs font-mono font-bold text-[#525866]">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Terverifikasi Kurikulum</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>0 Modal Beban Siswa</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Dividen & Gaji Riil</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Clay Illustration Centerpiece */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-lg lg:max-w-none">
                <ClayHeroScene className="w-full transform hover:scale-[1.01] transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4. CONTEMPORARY INFOGRAPHIC BENTO METRICS BAR */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white border-b-2 border-[#0F1115] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Metric 1 */}
            <div className="clay-card p-5 sm:p-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFE500]/20 rounded-bl-full pointer-events-none" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#525866] font-bold uppercase tracking-wider block">
                    ALUR SISTEMATIS
                  </span>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] mt-1">
                    14
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-[#0F1115] rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_#0F1115]">
                  <Target className="w-6 h-6 text-[#0F1115]" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono font-bold text-[#525866]">
                Tahapan Kegiatan Terstruktur
              </div>
            </div>

            {/* Metric 2 */}
            <div className="clay-card p-5 sm:p-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0284C7]/20 rounded-bl-full pointer-events-none" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#525866] font-bold uppercase tracking-wider block">
                    MASA INKUBASI
                  </span>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] mt-1">
                    03 <span className="text-base font-bold text-[#525866]">Bulan</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#38BDF8] border-2 border-[#0F1115] rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_#0F1115]">
                  <Calendar className="w-6 h-6 text-[#0F1115]" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono font-bold text-[#525866]">
                Praktik Eksekusi Pasar Riil
              </div>
            </div>

            {/* Metric 3 */}
            <div className="clay-card p-5 sm:p-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF5A36]/20 rounded-bl-full pointer-events-none" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#525866] font-bold uppercase tracking-wider block">
                    STRUKTUR TIM
                  </span>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] mt-1">
                    05 <span className="text-base font-bold text-[#525866]">Divisi</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#FF5A36] border-2 border-[#0F1115] rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_#0F1115]">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono font-bold text-[#525866]">
                CEO, CFO, CMO, COO, & HRD
              </div>
            </div>

            {/* Metric 4 */}
            <div className="clay-card p-5 sm:p-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/20 rounded-bl-full pointer-events-none" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs text-[#525866] font-bold uppercase tracking-wider block">
                    HASIL NYATA
                  </span>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] mt-1">
                    100%
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#10B981] border-2 border-[#0F1115] rounded-2xl flex items-center justify-center shadow-[2px_2px_0px_#0F1115]">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono font-bold text-[#525866]">
                Hak Dividen & Gaji Siswa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. SECTION 01: DEFINITION & 3 CORE PILLARS (INFOGRAPHIC SPREAD) */}
      {/* ------------------------------------------------------------ */}
      <section id="overview" className="border-b-2 border-[#0F1115] bg-[#FAF9F5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Label with Diagonal Yellow Stripe Accent */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
              SEKSI [ 01 ] // DEFINISI DAN ESENSI UTAMA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Big Headline & Context */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] leading-tight tracking-tight uppercase">
                Apa Sebenarnya <br />
                <span className="bg-[#FFE500] px-2 py-0.5 rounded-lg border-2 border-[#0F1115] shadow-[3px_3px_0px_#0F1115] inline-block my-1">
                  Student Company?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#525866] leading-relaxed">
                Diambil dari bahasa Inggris yang secara harfiah berarti{" "}
                <strong className="text-[#0F1115] font-black underline decoration-[#FFE500] decoration-4 underline-offset-4">
                  &quot;Perusahaan Siswa&quot;
                </strong>
                . Ini bukan sekadar simulasi teori di dalam kelas, melainkan pembentukan entitas bisnis riil yang memiliki akuntabilitas legal intra-sekolah.
              </p>

              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-5 shadow-[4px_4px_0px_#0F1115] space-y-3">
                <div className="font-mono text-xs font-black text-[#0F1115] uppercase tracking-wider flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Karakteristik Kunci Perusahaan Siswa</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#525866]">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#FFE500] border border-[#0F1115] mt-1.5 mr-2 shrink-0" />
                    <span>Perusahaan beranggotakan siswa lintas kelas & jurusan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#FFE500] border border-[#0F1115] mt-1.5 mr-2 shrink-0" />
                    <span>Struktur manajemen lengkap setara korporasi profesional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#FFE500] border border-[#0F1115] mt-1.5 mr-2 shrink-0" />
                    <span>Laporan keuangan transparan diaudit guru pembimbing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#FFE500] border border-[#0F1115] mt-1.5 mr-2 shrink-0" />
                    <span>Alokasi laba bersih untuk dividen, gaji, dan CSR sosial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: The 3 Core Pillars in Tactile Bento Cards */}
            <div className="lg:col-span-7 space-y-4">
              {/* Pillar 1 */}
              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-6 sm:p-7 shadow-[5px_5px_0px_#0F1115] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#FFE500] text-[#0F1115] border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-black uppercase">
                    PILAR 01
                  </span>
                  <span className="text-xs font-mono font-bold text-[#525866] uppercase">
                    REKRUTMEN & ORGANISASI
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F1115] mb-2">
                  Beranggotakan Siswa
                </h3>
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Seluruh anggota adalah siswa SMENDA yang disaring melalui pendaftaran saat kegiatan MPLS dan proses wawancara kompetensi. Setiap siswa ditempatkan pada posisi strategis sesuai minat dan bakat manajerialnya.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-6 sm:p-7 shadow-[5px_5px_0px_#0F1115] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#0284C7] text-white border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-black uppercase">
                    PILAR 02
                  </span>
                  <span className="text-xs font-mono font-bold text-[#525866] uppercase">
                    EKSEKUSI & TATA KELOLA
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F1115] mb-2">
                  Dijalankan Siswa
                </h3>
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Siswa sendiri yang merumuskan Standard Operating Procedure (SOP), menyusun Business Plan (BP), mengadakan weekly meeting berkala, mengatur rantai pasok produksi, dan memasarkan produk langsung ke konsumen.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-6 sm:p-7 shadow-[5px_5px_0px_#0F1115] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#10B981] text-white border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-black uppercase">
                    PILAR 03
                  </span>
                  <span className="text-xs font-mono font-bold text-[#525866] uppercase">
                    HASIL NYATA & DAMPAK
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F1115] mb-2">
                  Dikembangkan oleh Siswa
                </h3>
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  Siswa secara mandiri mengembangkan nilai merek (brand equity), menyalurkan kepedulian sosial melalui program CSR dari laba bersih, serta menikmati hasil nyata berupa dividen saham dan gaji bulanan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 6. SECTION 02: 14 TAHAPAN KEGIATAN (MASTER INFOGRAPHIC EXPLORER) */}
      {/* ------------------------------------------------------------ */}
      <section id="kegiatan" className="border-b-2 border-[#0F1115] bg-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-[#0F1115]">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
                <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
                  SEKSI [ 02 ] // PANDUAN LENGKAP
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight uppercase leading-tight">
                14 Tahapan Kegiatan
              </h2>
              <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                Jelajahi alur terstruktur setiap langkah perjalanan perusahaan siswa dari pendaftaran awal MPLS hingga likuidasi dan pembagian keuntungan.
              </p>
            </div>

            {/* View Mode Toggle Button */}
            <div className="flex items-center space-x-2 self-start lg:self-end">
              <span className="text-xs font-mono font-bold text-[#525866] uppercase mr-1 hidden sm:inline">
                Tampilan:
              </span>
              <div className="bg-[#FAF9F5] border-2 border-[#0F1115] rounded-full p-1 flex items-center space-x-1 shadow-[2px_2px_0px_#0F1115]">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-black uppercase transition-all ${
                    viewMode === "grid"
                      ? "bg-[#FFE500] text-[#0F1115] shadow-xs"
                      : "text-[#525866] hover:text-[#0F1115]"
                  }`}
                >
                  Kartu Infografis
                </button>
                <button
                  onClick={() => setViewMode("rail")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-black uppercase transition-all ${
                    viewMode === "rail"
                      ? "bg-[#FFE500] text-[#0F1115] shadow-xs"
                      : "text-[#525866] hover:text-[#0F1115]"
                  }`}
                >
                  Subway Rail
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Phase Filters & Search Bar */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]">
            {/* Horizontal Scrolling Phase Filter Buttons */}
            <div className="flex items-center overflow-x-auto touch-scroll scrollbar-none gap-2 pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {phases.map((p) => {
                const isActive = selectedPhase === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPhase(p.id)}
                    className={`whitespace-nowrap shrink-0 px-4 py-2 text-xs font-mono font-black uppercase rounded-full border-2 transition-all flex items-center space-x-2 ${
                      isActive
                        ? "bg-[#0F1115] text-[#FFE500] border-[#0F1115] shadow-[2px_2px_0px_#FFE500]"
                        : "bg-white text-[#0F1115] border-[#0F1115] hover:bg-[#FFE500]/20 shadow-[2px_2px_0px_#0F1115]"
                    }`}
                  >
                    <span>{p.label}</span>
                    <span
                      className={`px-1.5 py-0.5 text-[10px] rounded-full font-sans ${
                        isActive
                          ? "bg-[#FFE500] text-[#0F1115]"
                          : "bg-[#0F1115] text-white"
                      }`}
                    >
                      {p.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#525866]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata kunci / tahapan..."
                className="w-full pl-10 pr-9 py-2.5 text-xs font-mono bg-white border-2 border-[#0F1115] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFE500] transition-colors shadow-[2px_2px_0px_#0F1115]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#525866] hover:text-[#0F1115] p-1"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Status Bar */}
          <div className="py-3 flex items-center justify-between text-xs font-mono font-bold text-[#525866]">
            <div>
              MENAMPILKAN{" "}
              <span className="text-[#0F1115] font-black">{filteredActivities.length}</span> DARI 14 TAHAPAN RESMI
            </div>
            {searchQuery && (
              <div className="truncate max-w-[200px] sm:max-w-none text-[#0F1115]">
                Filter: &quot;{searchQuery}&quot;
              </div>
            )}
          </div>

          {/* ----------------- MODE A: KARTU INFOGRAFIS MEMPHIS ----------------- */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {filteredActivities.map((step) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStepModal(step)}
                  className="clay-card p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden bg-white"
                >
                  {/* Diagonal Stripe Accent on Card Header when hovered */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-diagonal-stripes opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Step Meta: Number & Clay Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] group-hover:text-[#F59E0B] transition-colors">
                          {step.number}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#FAF9F5] border border-[#0F1115] rounded-full uppercase">
                          {step.tag}
                        </span>
                      </div>
                      <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {getPhaseIcon(step.phaseIndex)}
                      </div>
                    </div>

                    {/* Phase Badge */}
                    <div className="font-mono text-[11px] font-black text-[#0F1115] uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FFE500] border border-[#0F1115]" />
                      <span>{step.phase}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-lg sm:text-xl text-[#0F1115] mb-2.5 group-hover:underline decoration-[#FFE500] decoration-2 underline-offset-4">
                      {step.title}
                    </h3>

                    {/* Description preview */}
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="pt-4 mt-5 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono font-bold text-[#0F1115] group-hover:text-[#0F1115]">
                    <span className="flex items-center space-x-1">
                      <span>Buka Panduan Detail</span>
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#FFE500] border border-[#0F1115] flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ----------------- MODE B: SUBWAY RAIL TIMELINE ----------------- */
            <div className="pt-6 relative">
              {/* Central Subway Rail Line */}
              <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1 bg-[#0F1115] -translate-x-1/2" />

              <div className="space-y-6 relative">
                {filteredActivities.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStepModal(step)}
                      className={`flex flex-col md:flex-row items-start md:items-center cursor-pointer group ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Left/Right Card Body */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                        <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-5 shadow-[4px_4px_0px_#0F1115] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#FFE500] border border-[#0F1115] rounded-full">
                              {step.phase}
                            </span>
                            <span className="text-[10px] font-mono text-[#525866] font-bold">
                              {step.tag}
                            </span>
                          </div>
                          <h3 className="font-display font-black text-base sm:text-lg text-[#0F1115]">
                            {step.title}
                          </h3>
                          <p className="text-xs text-[#525866] line-clamp-2 mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Rail Milestone Pin */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FFE500] border-2 border-[#0F1115] flex items-center justify-center font-display font-black text-xs text-[#0F1115] shadow-[2px_2px_0px_#0F1115] group-hover:scale-125 transition-transform">
                        {step.number}
                      </div>

                      {/* Empty Counterpart for Asymmetry */}
                      <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty search state */}
          {filteredActivities.length === 0 && (
            <div className="text-center py-16 bg-[#FAF9F5] border-2 border-[#0F1115] rounded-2xl p-8 shadow-[4px_4px_0px_#0F1115] mt-6">
              <p className="font-mono text-sm text-[#525866] font-bold">
                Tidak ada tahapan yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPhase("all");
                }}
                className="btn-clay-yellow px-5 py-2.5 text-xs font-black uppercase mt-4"
              >
                Reset Filter Pencarian
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 7. SECTION 03: SIKLUS 3 BULAN (INTERACTIVE ROADMAP INFOGRAPHIC) */}
      {/* ------------------------------------------------------------ */}
      <section id="siklus" className="border-b-2 border-[#0F1115] bg-[#FAF9F5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Marker */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
              SEKSI [ 03 ] // TIMELINE STRATEGIS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-[#0F1115]">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight uppercase leading-tight">
                Siklus 3 Bulan Operasional
              </h2>
              <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                Setiap entitas bisnis siswa menjalani siklus hidup berdurasi 3 bulan terukur, mulai dari inkubasi ide hingga hari puncak likuidasi.
              </p>
            </div>

            {/* Interactive Month Switcher Pills */}
            <div className="flex items-center space-x-2">
              {MONTHLY_CYCLES.map((m) => (
                <button
                  key={m.month}
                  onClick={() => setActiveMonthCycle(m.month)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono font-black uppercase border-2 transition-all ${
                    activeMonthCycle === m.month
                      ? "bg-[#0F1115] text-[#FFE500] border-[#0F1115] shadow-[3px_3px_0px_#FFE500]"
                      : "bg-white text-[#0F1115] border-[#0F1115] hover:bg-[#FFE500]/20 shadow-[2px_2px_0px_#0F1115]"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Month Deep-Dive Infographic Card */}
          <div className="mt-8 bg-white border-2 border-[#0F1115] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#0F1115] relative overflow-hidden">
            {/* Distinctive Diagonal Stripe bar */}
            <div className="absolute top-0 inset-x-0 h-3 bg-diagonal-stripes border-b border-[#0F1115]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#FFE500] text-[#0F1115] border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-black uppercase">
                    {currentMonthData.period}
                  </span>
                  <span className="bg-[#FAF9F5] text-[#0F1115] border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-black uppercase">
                    {currentMonthData.phases}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F1115] leading-tight">
                  {currentMonthData.theme}
                </h3>

                <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
                  {currentMonthData.description}
                </p>

                {/* Key Deliverables Checklist */}
                <div className="pt-2">
                  <div className="font-mono text-xs font-black uppercase text-[#0F1115] tracking-wider mb-3">
                    Target & Output Kunci {currentMonthData.label}:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentMonthData.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF9F5] border border-[#0F1115] rounded-xl p-3 flex items-start space-x-2.5 text-xs font-mono text-[#0F1115] font-bold"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Month Visual Badge / Clay Anchor */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-xs bg-[#FAF9F5] border-2 border-[#0F1115] rounded-2xl p-6 text-center shadow-[4px_4px_0px_#0F1115] space-y-4">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center">
                    {activeMonthCycle === 1 && <ClayBriefcase className="w-24 h-24" />}
                    {activeMonthCycle === 2 && <ClayRocket className="w-24 h-24" />}
                    {activeMonthCycle === 3 && <ClayPiggyBank className="w-24 h-24" />}
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-[#0F1115]">
                      {currentMonthData.label}
                    </div>
                    <div className="font-mono text-xs font-bold text-[#525866] mt-1">
                      {currentMonthData.period}
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-[#0F1115] rounded-xl text-xs font-mono text-[#0F1115] font-bold">
                    {activeMonthCycle === 1 && "Fokus: SOP & Desain Produk Inovatif"}
                    {activeMonthCycle === 2 && "Fokus: Konsinyasi & Target Omzet Pasar"}
                    {activeMonthCycle === 3 && "Fokus: Penyaluran CSR & Pembagian Dividen"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 8. SECTION 04: STRUKTUR ORGANISASI KORPORASI SISWA (5 DIVISI) */}
      {/* ------------------------------------------------------------ */}
      <section id="organisasi" className="border-b-2 border-[#0F1115] bg-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
              SEKSI [ 04 ] // TATA KELOLA PERUSAHAAN
            </span>
          </div>

          <div className="max-w-3xl space-y-2 mb-8">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight uppercase leading-tight">
              Struktur 5 Divisi Utama
            </h2>
            <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
              Setiap perusahaan siswa dipimpin oleh dewan direksi dan manajer divisi yang bekerja secara sinergis mengadopsi standar tata kelola korporasi profesional.
            </p>
          </div>

          {/* Division Selector Tabs */}
          <div className="flex items-center overflow-x-auto touch-scroll scrollbar-none gap-2 pb-2">
            {CORPORATE_DIVISIONS.map((div) => {
              const isSelected = activeDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveDivision(div.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono font-black uppercase border-2 transition-all shrink-0 flex items-center space-x-2 ${
                    isSelected
                      ? "bg-[#0F1115] text-[#FFE500] border-[#0F1115] shadow-[3px_3px_0px_#FFE500]"
                      : "bg-white text-[#0F1115] border-[#0F1115] hover:bg-[#FFE500]/20 shadow-[2px_2px_0px_#0F1115]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: div.color }} />
                  <span>{div.code}</span>
                  <span className="hidden sm:inline font-sans font-bold text-[10px]">
                    — {div.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Division Card */}
          <div className="mt-8 bg-[#FAF9F5] border-2 border-[#0F1115] rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#0F1115]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Role Details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="border-2 border-[#0F1115] px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase"
                    style={{ backgroundColor: currentDivision.color, color: "#0F1115" }}
                  >
                    {currentDivision.code} // {currentDivision.name}
                  </span>
                  <span className="bg-white text-[#0F1115] border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-bold">
                    {currentDivision.title}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F1115]">
                  {currentDivision.leadRole}
                </h3>

                {/* Responsibilities list */}
                <div>
                  <div className="font-mono text-xs font-black uppercase text-[#0F1115] tracking-wider mb-2.5">
                    Tanggung Jawab Utama:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#525866]">
                    {currentDivision.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#0F1115] mt-1.5 mr-2.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Softskills Gained */}
                <div className="pt-2">
                  <div className="font-mono text-xs font-black uppercase text-[#0F1115] tracking-wider mb-2">
                    Kompetensi yang Dilatih:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentDivision.skillsGained.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#0F1115] px-3 py-1 rounded-full text-xs font-mono font-bold text-[#0F1115]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Deliverable Card */}
              <div className="lg:col-span-4">
                <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-6 shadow-[4px_4px_0px_#0F1115] space-y-4">
                  <div className="font-mono text-xs font-black uppercase text-[#525866]">
                    DOKUMEN & OUTPUT RESMI
                  </div>
                  <div className="font-display font-black text-lg text-[#0F1115] leading-snug">
                    {currentDivision.deliverable}
                  </div>
                  <div className="p-3 bg-[#FFE500]/20 border border-[#0F1115] rounded-xl text-xs font-mono text-[#0F1115]">
                    Seluruh berkas diarsipkan dan dipresentasikan di hadapan dewan juri & civitas sekolah pada puncak Likuidasi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 9. SECTION 05: 6 CAPAIAN KOMPETENSI (TUJUAN & MANFAAT PROGRAM) */}
      {/* ------------------------------------------------------------ */}
      <section id="tujuan" className="border-b-2 border-[#0F1115] bg-[#FAF9F5] py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
              SEKSI [ 05 ] // CAPAIAN KOMPETENSI
            </span>
          </div>

          <div className="max-w-3xl space-y-2 mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F1115] tracking-tight uppercase leading-tight">
              Tujuan & Manfaat Program
            </h2>
            <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
              Student Company membekali siswa SMENDA dengan kesiapan mental, keterampilan abad ke-21, dan literasi bisnis untuk melangkah ke dunia profesional.
            </p>
          </div>

          {/* 6 Goals Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_GOALS.map((goal) => (
              <div
                key={goal.id}
                className="clay-card p-6 sm:p-7 flex flex-col justify-between bg-white relative group overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] group-hover:text-[#F59E0B] transition-colors">
                      {goal.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#FFE500] border border-[#0F1115] rounded-full uppercase">
                      {goal.category}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl text-[#0F1115] mb-2 leading-snug">
                    {goal.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E7EB] text-xs sm:text-sm text-[#525866] leading-relaxed">
                  {goal.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 10. SECTION 06: FAQ & TANYA JAWAB PENDIDIKAN */}
      {/* ------------------------------------------------------------ */}
      <section id="faq" className="border-b-2 border-[#0F1115] bg-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-3 bg-diagonal-stripes border border-[#0F1115] rounded-xs" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0F1115]">
              SEKSI [ 06 ] // PERTANYAAN UMUM
            </span>
          </div>

          <div className="space-y-2 mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F1115] tracking-tight uppercase leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm sm:text-base text-[#525866] leading-relaxed">
              Ketahui informasi penting seputar operasional, modal, dan manfaat keikutsertaan siswa di Student Company SMENDA.
            </p>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border-2 border-[#0F1115] rounded-2xl overflow-hidden bg-white shadow-[4px_4px_0px_#0F1115] transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-[#FFE500] border border-[#0F1115] flex items-center justify-center font-mono text-xs font-black shrink-0">
                        ?
                      </span>
                      <span className="font-display font-black text-base sm:text-lg text-[#0F1115]">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#FAF9F5] border border-[#0F1115] flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "rotate-90 bg-[#FFE500]" : ""
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 text-[#0F1115]" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 border-t border-[#E5E7EB] text-sm text-[#525866] leading-relaxed bg-[#FAF9F5]/50">
                      <p>{faq.answer}</p>
                      <div className="mt-3 inline-block font-mono text-[10px] uppercase font-bold text-[#0F1115] bg-[#FFE500] px-2 py-0.5 rounded border border-[#0F1115]">
                        Kategori: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 11. HIGH-ENERGY ACTION CALLOUT BANNER */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-[#FFE500] border-b-2 border-[#0F1115] py-14 sm:py-20 relative overflow-hidden">
        {/* Diagonal Stripe Accent Edges */}
        <div className="absolute top-0 inset-x-0 h-3 bg-diagonal-stripes border-b border-[#0F1115]" />
        <div className="absolute bottom-0 inset-x-0 h-3 bg-diagonal-stripes border-t border-[#0F1115]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-full px-4 py-1.5 shadow-[3px_3px_0px_#0F1115]">
            <Sparkles className="w-4 h-4 text-[#0F1115]" />
            <span className="font-mono text-xs font-black uppercase text-[#0F1115]">
              EKOSISTEM BISNIS SISWA SMENDA
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#0F1115] uppercase tracking-tight leading-tight max-w-3xl mx-auto">
            Siap Menjadi Generasi Wirausaha Unggul?
          </h2>

          <p className="text-base sm:text-lg text-[#0F1115] max-w-2xl mx-auto font-sans font-medium">
            Jadilah bagian dari perusahaan nyata, ciptakan inovasi produk favorit warga sekolah, dan rasakan pengalaman mengelola bisnis sejak dini.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollToSection("kegiatan")}
              className="btn-clay-black px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center space-x-2"
            >
              <span>Eksplorasi 14 Tahapan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("organisasi")}
              className="btn-clay-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider inline-flex items-center space-x-2"
            >
              <span>Lihat 5 Divisi Tim</span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 12. STEP DETAIL MODAL (TACTILE 3D CLAY MODAL DRAWER) */}
      {/* ------------------------------------------------------------ */}
      {activeStepModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F1115]/75 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActiveStepModal(null);
            }
          }}
        >
          <div className="bg-white border-2 border-[#0F1115] rounded-3xl max-w-2xl w-full flex flex-col shadow-[8px_8px_0px_#FFE500] relative max-h-[90dvh] overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Modal Diagonal Stripe Top Trim */}
            <div className="h-2.5 bg-diagonal-stripes border-b border-[#0F1115] shrink-0" />

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#0F1115] px-5 sm:px-8 py-4 bg-white shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="w-3 h-3 rounded-full bg-[#FFE500] border border-[#0F1115]" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0F1115]">
                  DETAIL TAHAP {activeStepModal.number} // 14 LANGKAH
                </span>
              </div>
              <button
                onClick={() => setActiveStepModal(null)}
                className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#0F1115] hover:bg-[#FFE500] text-[#0F1115] transition-colors flex items-center justify-center"
                aria-label="Tutup detail tahapan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1 bg-[#FAF9F5]/40">
              {/* Number and Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <span className="font-display font-black text-5xl sm:text-6xl text-[#0F1115]">
                    {activeStepModal.number}
                  </span>
                  <div>
                    <span className="bg-[#FFE500] text-[#0F1115] border border-[#0F1115] px-2.5 py-0.5 rounded-full text-xs font-mono font-black uppercase block w-fit">
                      {activeStepModal.phase}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#525866] mt-1 block">
                      Kategori: {activeStepModal.tag}
                    </span>
                  </div>
                </div>

                <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                  {getPhaseIcon(activeStepModal.phaseIndex)}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F1115] tracking-tight">
                {activeStepModal.title}
              </h3>

              {/* Highlight Quote */}
              {activeStepModal.highlight && (
                <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-4 text-xs sm:text-sm font-mono text-[#0F1115] font-bold shadow-[3px_3px_0px_#FFE500] flex items-start space-x-2.5">
                  <span className="text-base">💡</span>
                  <span>{activeStepModal.highlight}</span>
                </div>
              )}

              {/* Description Content */}
              <div className="bg-white border-2 border-[#0F1115] rounded-2xl p-5 sm:p-6 text-sm sm:text-base text-[#181A20] leading-relaxed">
                {activeStepModal.description}
              </div>

              {/* Guidance Checklist */}
              <div className="p-4 bg-[#FFE500]/20 border border-[#0F1115] rounded-2xl text-xs font-mono text-[#0F1115] space-y-1">
                <div className="font-black uppercase">Tips Pelaksanaan Langkah:</div>
                <p>
                  Koordinasikan dengan guru pembimbing dan pastikan seluruh dokumen pendukung dicatat dalam buku administrasi perusahaan.
                </p>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="px-5 sm:px-8 py-4 border-t-2 border-[#0F1115] bg-white flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={handlePrevStep}
                disabled={activeStepModal.id === 1}
                className="btn-clay-white px-4 py-2 text-xs font-black uppercase inline-flex items-center disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span>Sebelumnya</span>
              </button>

              <span className="font-mono text-xs font-black text-[#0F1115]">
                {activeStepModal.id} / 14
              </span>

              <button
                onClick={handleNextStep}
                disabled={activeStepModal.id === 14}
                className="btn-clay-yellow px-4 py-2 text-xs font-black uppercase inline-flex items-center disabled:opacity-30 disabled:pointer-events-none"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------ */}
      {/* 13. FLOATING QUICK-TO-TOP BUTTON */}
      {/* ------------------------------------------------------------ */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-[#FFE500] text-[#0F1115] border-2 border-[#0F1115] rounded-2xl shadow-[4px_4px_0px_#0F1115] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0F1115] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center group"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* ------------------------------------------------------------ */}
      {/* 14. MODERN CORPORATE MEMPHIS FOOTER */}
      {/* ------------------------------------------------------------ */}
      <footer className="bg-white border-t-2 border-[#0F1115] text-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b-2 border-[#0F1115] pb-10">
            {/* Institution Brand */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 bg-[#FFE500] border-2 border-[#0F1115] rounded-full p-1.5 flex items-center justify-center shadow-[3px_3px_0px_#0F1115] overflow-hidden shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo SCSMENDA"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <span className="font-display font-black text-xl sm:text-2xl tracking-tight block leading-none">
                    SCSMENDA
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#525866] font-bold">
                    STUDENT COMPANY OF SMENDA
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#525866] max-w-md leading-relaxed">
                Laboratorium kewirausahaan terapan SMENDA: beranggotakan siswa, dijalankan siswa, dan dikembangkan secara mandiri oleh siswa untuk melatih kepemimpinan, integritas bisnis, dan kreativitas masa depan.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-[#FAF9F5] border border-[#0F1115] px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                  Corporate Memphis
                </span>
                <span className="bg-[#FFE500] border border-[#0F1115] px-2.5 py-1 rounded-full text-[10px] font-mono font-black">
                  3D Clay Visuals
                </span>
                <span className="bg-[#FAF9F5] border border-[#0F1115] px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                  Infographic Layout
                </span>
              </div>
            </div>

            {/* Document Navigation */}
            <div className="lg:col-span-3 space-y-3 font-mono text-xs">
              <div className="font-black uppercase tracking-wider text-[#0F1115] border-b-2 border-[#0F1115] pb-2">
                Navigasi Program
              </div>
              <ul className="space-y-2 text-[#525866] font-bold">
                <li>
                  <button onClick={() => scrollToSection("overview")} className="hover:text-[#0F1115] text-left">
                    01. Definisi & 3 Pilar
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("kegiatan")} className="hover:text-[#0F1115] text-left">
                    02. 14 Tahapan Lengkap
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("siklus")} className="hover:text-[#0F1115] text-left">
                    03. Siklus 3 Bulan
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("organisasi")} className="hover:text-[#0F1115] text-left">
                    04. Struktur 5 Divisi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("tujuan")} className="hover:text-[#0F1115] text-left">
                    05. Capaian Kompetensi
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faq")} className="hover:text-[#0F1115] text-left">
                    06. Tanya Jawab (FAQ)
                  </button>
                </li>
              </ul>
            </div>

            {/* Palette & Spec Meta */}
            <div className="lg:col-span-3 space-y-3 font-mono text-xs">
              <div className="font-black uppercase tracking-wider text-[#0F1115] border-b-2 border-[#0F1115] pb-2">
                Spesifikasi Desain
              </div>
              <div className="text-[#525866] space-y-1.5 text-xs font-bold">
                <p>Tipografi: Space Grotesk & Inter</p>
                <p>Aksen Utama: Vibrant Yellow (#FFE500)</p>
                <p>Kedalaman: 3D Clay Soft Specular</p>
                <p>Pola: Diagonal Yellow Stripes</p>
                <p>Kontras: Crisp Pitch Black (#0F1115)</p>
              </div>
            </div>
          </div>

          {/* Colophon & Back to top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-[#525866] gap-3 text-center sm:text-left">
            <div>
              © 2026 SCSMENDA — PROGRAM KEWIRAUSAHAAN SISWA RESMI.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center space-x-1.5 text-[#0F1115] hover:underline py-1"
            >
              <span>KEMBALI KE ATAS</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
