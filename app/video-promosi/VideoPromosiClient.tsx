"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Download,
  Share2,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Clock,
  Film,
  Users,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  FastForward,
  Rewind,
  ArrowUp,
  Award,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { REGISTRATION_URL, CONTACT_PERSONS, VIDEO_PROMOSI_URL } from "../data";
import {
  ClayRocket,
  ClayLightbulb,
  ClayPiggyBank,
  ClayBriefcase,
  ClayMegaphone,
} from "../components/ClayIllustrations";

interface Chapter {
  id: number;
  time: number; // in seconds
  timestamp: string;
  title: string;
  subtitle: string;
  phase: string;
  color: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    time: 0,
    timestamp: "00:00",
    title: "Inisiasi & Wawancara Anggota",
    subtitle:
      "Perekrutan saat MPLS, pemetaan talenta, dan peresmian entitas bisnis siswa.",
    phase: "Fase 01: Inisiasi",
    color: "#FFE500",
  },
  {
    id: 2,
    time: 25,
    timestamp: "00:25",
    title: "Riset Pasar & R&D Produk Utama",
    subtitle:
      "Eksperimen purwarupa produk, penyusunan SOP mutu, dan Business Plan.",
    phase: "Fase 02: Perencanaan",
    color: "#0284C7",
  },
  {
    id: 3,
    time: 55,
    timestamp: "00:55",
    title: "Grand Launching & Promosi Lapangan",
    subtitle:
      "Peluncuran perdana di hadapan audiens sekolah, uji pasar, dan kampanye media.",
    phase: "Fase 03: Peluncuran",
    color: "#FF5A36",
  },
  {
    id: 4,
    time: 85,
    timestamp: "01:25",
    title: "Operasional, Konsinyasi & Team Bonding",
    subtitle:
      "Aktivitas penjualan langsung, kemitraan kantin, dan penguatan kekeluargaan.",
    phase: "Fase 03: Operasional",
    color: "#8B5CF6",
  },
  {
    id: 5,
    time: 115,
    timestamp: "01:55",
    title: "CSR, Likuidasi & Pembagian Dividen",
    subtitle:
      "Penyaluran laba sosial, audit neraca keuangan, dividen investor, dan gaji siswa.",
    phase: "Fase 04: Likuidasi",
    color: "#10B981",
  },
];

export default function VideoPromosiClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [hasUserStarted, setHasUserStarted] = useState<boolean>(false);

  // Sync video time updates
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    // Update active chapter based on time
    let currentChap = 0;
    for (let i = CHAPTERS.length - 1; i >= 0; i--) {
      if (curr >= CHAPTERS[i].time) {
        currentChap = i;
        break;
      }
    }
    setActiveChapterIndex(currentChap);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasUserStarted(true);
        })
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seekTo = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(
      Math.max(0, seconds),
      duration || 9999,
    );
    if (!isPlaying) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasUserStarted(true);
        })
        .catch(() => {});
    }
  };

  const skipSeconds = (delta: number) => {
    if (!videoRef.current) return;
    seekTo(videoRef.current.currentTime + delta);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changePlaybackRate = (rate: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const copyPageLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Keyboard shortcut listener for Space (play/pause), ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        skipSeconds(-5);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        skipSeconds(5);
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        handleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlay, skipSeconds, toggleMute]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#0F1115] flex flex-col font-sans selection:bg-[#FFE500] selection:text-[#0F1115] relative overflow-x-clip">
      {/* ------------------------------------------------------------ */}
      {/* 1. TOP DIAGONAL BANNER */}
      {/* ------------------------------------------------------------ */}
      <div className="w-full bg-[#FFE500] border-b-2 border-[#0F1115] overflow-hidden select-none">
        <div className="flex items-center justify-between px-3 sm:px-6 py-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0F1115]">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
            <div className="w-7 h-4 bg-diagonal-stripes border border-[#0F1115] rounded-xs shrink-0" />
            <span className="truncate">
              SCSMENDA // DOKUMENTASI & MEDIA RESMI
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 bg-[#0F1115] text-[#FFE500] text-[10px] rounded-full font-sans font-black">
              VIDEO PROMOSI RESMI
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 shrink-0 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              FULL HD 1080P
            </span>
            <span>•</span>
            <span>TA 2026/2027</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. STICKY HEADER WITH BACK TO HOME */}
      {/* ------------------------------------------------------------ */}
      <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b-2 border-[#0F1115] shadow-xs transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Left: Brand with Official Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group shrink-0"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#FFE500] border-2 border-[#0F1115] rounded-full p-1 flex items-center justify-center shadow-[3px_3px_0px_#0F1115] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0px_#0F1115] transition-all overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo Student Company of SMENDA"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain rounded-full"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#0F1115] leading-none">
                    SCSMENDA
                  </span>
                  <span className="w-2.5 h-2.5 bg-[#FFE500] rounded-full border border-[#0F1115]" />
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#525866] font-bold block mt-0.5">
                  STUDENT COMPANY SMENDA
                </span>
              </div>
            </Link>

            {/* Middle: Breadcrumb / Section indicator */}
            <div className="hidden md:flex items-center space-x-2 font-mono text-xs font-bold text-[#525866]">
              <Link href="/" className="hover:text-[#0F1115] transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-[#0F1115] bg-[#FFE500] px-2 py-0.5 rounded border border-[#0F1115]">
                Video Promosi
              </span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={copyPageLink}
                className="btn-clay-white hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#0F1115] rounded-xl bg-white shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                title="Salin tautan video"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1.5 text-emerald-600" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 mr-1.5 text-[#0F1115]" />
                    <span>Bagikan</span>
                  </>
                )}
              </button>

              <Link
                href="/"
                className="btn-clay-yellow inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-black tracking-wider uppercase"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------ */}
      {/* 3. HERO INTRO SECTION */}
      {/* ------------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 border-b-2 border-[#0F1115] bg-[#FAF9F5]">
        <div className="absolute top-6 right-1/4 w-32 h-32 bg-dot-pattern opacity-60 pointer-events-none" />
        <div className="absolute bottom-4 left-6 w-24 h-24 bg-dot-pattern-yellow opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            {/* Memphis Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-full px-3.5 py-1.5 shadow-[3px_3px_0px_#0F1115]">
              <span className="w-3 h-3 bg-diagonal-stripes rounded-full border border-[#0F1115]" />
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase text-[#0F1115]">
                TAYANGAN RESMI • MEDIA PROMOSI SCSMENDA
              </span>
            </div>

            {/* Expressive Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05] text-[#0F1115]">
              MENYALAKAN JIWA <br />
              <span className="relative inline-block my-1">
                <span className="relative z-10 px-2 text-[#0F1115]">
                  WIRAUSAHA MUDA
                </span>
                <span className="absolute inset-x-0 bottom-1 sm:bottom-2 h-5 sm:h-8 bg-[#FFE500] -z-0 rounded-lg transform -rotate-1 border-2 border-[#0F1115]" />
              </span>
              <br />
              MELALUI KARYA NYATA.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#525866] font-sans leading-relaxed">
              Saksikan perjalanan lengkap siswa SMENDA dalam mengelola korporasi
              mini mandiri: mulai dari pembentukan profil perusahaan, riset
              produk, grand launching, hingga likuidasi dan bagi hasil dividen.
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border-2 border-[#0F1115] rounded-lg text-xs font-mono font-bold shadow-[2px_2px_0px_#0F1115]">
                <Film className="w-3.5 h-3.5 text-[#0F1115]" />
                <span>Video Promosi Full HD</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border-2 border-[#0F1115] rounded-lg text-xs font-mono font-bold shadow-[2px_2px_0px_#0F1115]">
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>
                  {duration > 0 ? formatTime(duration) : "Durasi Penuh"}
                </span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FFE500] border-2 border-[#0F1115] rounded-lg text-xs font-mono font-black shadow-[2px_2px_0px_#0F1115]">
                <Sparkles className="w-3.5 h-3.5 text-[#0F1115]" />
                <span>100% Praktik Siswa SMENDA</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4. MAIN VIDEO PLAYER SHOWCASE (TACTILE CLAY WINDOW) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-8 sm:py-14 bg-[#FAF9F5] border-b-2 border-[#0F1115] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Memphis Player Frame */}
          <div className="bg-white border-3 sm:border-4 border-[#0F1115] rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#0F1115] sm:shadow-[12px_12px_0px_#0F1115] overflow-hidden transition-all">
            {/* Window Title Bar */}
            <div className="bg-[#FAF9F5] border-b-3 border-[#0F1115] px-4 sm:px-6 py-3 flex items-center justify-between select-none">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="w-3 h-3 rounded-full bg-[#FF5A36] border border-[#0F1115]" />
                <span className="w-3 h-3 rounded-full bg-[#FFE500] border border-[#0F1115]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981] border border-[#0F1115]" />
                <div className="h-4 w-[1.5px] bg-[#0F1115]/30 mx-1 hidden sm:block" />
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0F1115] truncate">
                  videoPromosi.mp4 // SCSMENDA Official
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono font-bold">
                <span className="hidden sm:inline-block px-2 py-0.5 bg-[#FFE500] border border-[#0F1115] rounded text-[11px]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <span className="px-2 py-0.5 bg-[#0F1115] text-[#FFE500] rounded text-[11px] font-black uppercase">
                  {isPlaying ? "MEMUTAR" : "PAUSED"}
                </span>
              </div>
            </div>

            {/* Video Screen Container */}
            <div className="relative bg-[#0F1115] aspect-video w-full flex items-center justify-center group overflow-hidden">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/fiivnayk/video/upload/v1795097150/video_promosi_1.mp4"
                poster="/logo.png"
                preload="metadata"
                playsInline
                controls={false}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-contain cursor-pointer"
                onClick={togglePlay}
              />

              {/* Big Center Play Button Overlay (when paused or initial) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-[#0F1115]/40 backdrop-blur-xs flex items-center justify-center cursor-pointer transition-all hover:bg-[#0F1115]/30"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFE500] border-3 sm:border-4 border-[#0F1115] flex items-center justify-center shadow-[6px_6px_0px_#0F1115] hover:scale-105 active:scale-95 transition-transform group-hover:bg-[#FFD028]">
                    <Play className="w-9 h-9 sm:w-11 sm:h-11 text-[#0F1115] fill-current ml-1" />
                  </div>
                  {!hasUserStarted && (
                    <div className="absolute bottom-6 sm:bottom-10 bg-white/90 border-2 border-[#0F1115] rounded-xl px-4 py-2 shadow-[3px_3px_0px_#0F1115] text-xs sm:text-sm font-mono font-bold text-[#0F1115]">
                      Klik untuk Memutar Video Promosi
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Custom Interactive Control Bar */}
            <div className="bg-[#FAF9F5] border-t-3 border-[#0F1115] p-3 sm:p-5 space-y-3">
              {/* Progress Scrubber */}
              <div className="relative flex items-center group">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={(e) => seekTo(parseFloat(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-[#0F1115] rounded-lg appearance-none cursor-pointer accent-[#FFE500] focus:outline-none"
                  aria-label="Video seek scrubber"
                />
              </div>

              {/* Controls Cluster */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                {/* Left Cluster: Play/Pause, Rewind, Forward, Time */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 bg-[#FFE500] border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-[#0F1115] fill-current" />
                    ) : (
                      <Play className="w-5 h-5 text-[#0F1115] fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={() => skipSeconds(-10)}
                    className="p-2 sm:p-2.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    title="Mundur 10 detik"
                    aria-label="Mundur 10 detik"
                  >
                    <Rewind className="w-4 h-4 text-[#0F1115]" />
                  </button>

                  <button
                    onClick={() => skipSeconds(10)}
                    className="p-2 sm:p-2.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    title="Maju 10 detik"
                    aria-label="Maju 10 detik"
                  >
                    <FastForward className="w-4 h-4 text-[#0F1115]" />
                  </button>

                  <button
                    onClick={() => seekTo(0)}
                    className="p-2 sm:p-2.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    title="Putar Ulang dari Awal"
                    aria-label="Putar Ulang"
                  >
                    <RotateCcw className="w-4 h-4 text-[#0F1115]" />
                  </button>

                  <span className="font-mono text-xs sm:text-sm font-bold text-[#0F1115] pl-1">
                    {formatTime(currentTime)}{" "}
                    <span className="text-[#525866]">/</span>{" "}
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Right Cluster: Speed, Mute, Fullscreen, Download */}
                <div className="flex items-center space-x-2">
                  {/* Speed Selector */}
                  <div className="flex items-center border-2 border-[#0F1115] rounded-xl overflow-hidden bg-white shadow-[2px_2px_0px_#0F1115]">
                    {[1, 1.25, 1.5].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => changePlaybackRate(rate)}
                        className={`px-2 py-1 text-[11px] font-mono font-bold transition-colors ${
                          playbackRate === rate
                            ? "bg-[#FFE500] text-[#0F1115]"
                            : "hover:bg-neutral-100 text-[#525866]"
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>

                  {/* Mute Button */}
                  <button
                    onClick={toggleMute}
                    className="p-2 sm:p-2.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    title={isMuted ? "Bunyikan" : "Bisukan"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-red-500" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#0F1115]" />
                    )}
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={handleFullscreen}
                    className="p-2 sm:p-2.5 bg-white border-2 border-[#0F1115] rounded-xl shadow-[2px_2px_0px_#0F1115] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    aria-label="Layar Penuh"
                    title="Layar Penuh (F)"
                  >
                    <Maximize className="w-4 h-4 text-[#0F1115]" />
                  </button>

                  {/* Direct Download Button */}
                  <a
                    href="https://res.cloudinary.com/fiivnayk/video/upload/v1795097150/video_promosi_1.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="videoPromosi-SCSMENDA.mp4"
                    className="hidden md:inline-flex items-center space-x-1 px-3 py-2 bg-white border-2 border-[#0F1115] rounded-xl text-xs font-mono font-bold shadow-[2px_2px_0px_#0F1115] hover:bg-[#FFE500] transition-colors"
                    title="Unduh video untuk presentasi offline"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0F1115]" />
                    <span>Unduh Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. INTERACTIVE CHAPTER NAVIGATOR */}
      {/* ------------------------------------------------------------ */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b-2 border-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-full px-3 py-1 shadow-[2px_2px_0px_#0F1115] text-[11px] font-mono font-bold mb-2">
                <span className="w-2.5 h-2.5 bg-[#FFE500] rounded-full border border-[#0F1115]" />
                <span>BABAK & ALUR CERITA</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0F1115]">
                NAVIGASI MOMEN VIDEO
              </h2>
              <p className="text-xs sm:text-sm text-[#525866] font-mono font-bold mt-1">
                Klik segmen di bawah untuk langsung melompat ke bagian yang
                ingin Anda tonton.
              </p>
            </div>

            <div className="text-xs font-mono font-bold text-[#525866]">
              <span>TOTAL 5 BABAK UTAMA</span>
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {CHAPTERS.map((chap, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={chap.id}
                  onClick={() => seekTo(chap.time)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border-2 border-[#0F1115] transition-all relative flex flex-col justify-between ${
                    isActive
                      ? "bg-[#FFE500] shadow-[5px_5px_0px_#0F1115] -translate-y-1"
                      : "bg-white hover:bg-[#FFF8D6] shadow-[3px_3px_0px_#0F1115] hover:shadow-[5px_5px_0px_#0F1115]"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-[#0F1115] text-white">
                        {chap.timestamp}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-[#0F1115] animate-pulse">
                          Sedang Diputar
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#525866] block uppercase">
                      {chap.phase}
                    </span>
                    <h3 className="font-display font-black text-sm sm:text-base leading-snug text-[#0F1115]">
                      {chap.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#525866] font-sans mt-3 line-clamp-3 leading-relaxed">
                    {chap.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 6. WHAT YOU'LL DISCOVER (4 CLAY VALUE PILLARS) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b-2 border-[#0F1115]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-block px-3 py-1 bg-white border-2 border-[#0F1115] rounded-full text-xs font-mono font-bold shadow-[2px_2px_0px_#0F1115]">
              ESENSI TAYANGAN
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0F1115]">
              APA YANG DIUNGKAP DALAM VIDEO?
            </h2>
            <p className="text-sm text-[#525866]">
              Kompilasi otentik pengalaman berharga siswa selama memimpin dan
              mengoperasikan perusahaan mini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Pillar 1 */}
            <div className="clay-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFE500] border-2 border-[#0F1115] flex items-center justify-center shadow-[3px_3px_0px_#0F1115] mb-4">
                  <ClayLightbulb className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-lg text-[#0F1115] mb-2">
                  Riset & Desain Produk
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Bagaimana siswa menciptakan ide produk inovatif, merancang
                  kemasan higienis, dan menetapkan kalkulasi HPP secara mandiri.
                </p>
              </div>
              <div className="pt-2 border-t border-[#0F1115]/10 font-mono text-[11px] font-bold text-[#0F1115]">
                ✓ Validasi Pasar Nyata
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="clay-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0284C7] border-2 border-[#0F1115] flex items-center justify-center shadow-[3px_3px_0px_#0F1115] mb-4">
                  <ClayBriefcase className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-lg text-[#0F1115] mb-2">
                  Sinergi 5 Divisi
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Kolaborasi erat antar jajaran Direksi (CEO), Keuangan (CFO),
                  Pemasaran (CMO), Produksi (COO), hingga HRD People Lead.
                </p>
              </div>
              <div className="pt-2 border-t border-[#0F1115]/10 font-mono text-[11px] font-bold text-[#0F1115]">
                ✓ Tata Kelola Korporasi Modern
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="clay-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FF5A36] border-2 border-[#0F1115] flex items-center justify-center shadow-[3px_3px_0px_#0F1115] mb-4">
                  <ClayMegaphone className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-lg text-[#0F1115] mb-2">
                  Pemasaran & Konsinyasi
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Strategi promosi tatap muka dan media sosial, membuka kerja
                  sama dengan kantin, koperasi, dan mitra pihak ketiga.
                </p>
              </div>
              <div className="pt-2 border-t border-[#0F1115]/10 font-mono text-[11px] font-bold text-[#0F1115]">
                ✓ Penjualan Riil 3 Bulan
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="clay-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#10B981] border-2 border-[#0F1115] flex items-center justify-center shadow-[3px_3px_0px_#0F1115] mb-4">
                  <ClayPiggyBank className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-lg text-[#0F1115] mb-2">
                  Dividen & CSR
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  Pembagian keuntungan riil kepada investor saham, penerimaan
                  gaji anggota, serta aksi sosial Corporate Social
                  Responsibility.
                </p>
              </div>
              <div className="pt-2 border-t border-[#0F1115]/10 font-mono text-[11px] font-bold text-[#0F1115]">
                ✓ Kemandirian Finansial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 7. PRODUCTION CREDITS & SPECS CARD */}
      {/* ------------------------------------------------------------ */}
      <section className="py-12 bg-white border-b-2 border-[#0F1115]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-[#0F1115] rounded-2xl p-6 sm:p-8 bg-[#FAF9F5] shadow-[6px_6px_0px_#0F1115]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x-2 divide-[#0F1115]/20">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase text-[#525866] font-bold">
                  Entitas Penyelenggara
                </span>
                <p className="font-display font-black text-lg text-[#0F1115]">
                  Student Company SMENDA
                </p>
                <p className="text-xs text-[#525866]">
                  SMK Negeri 2 — Program Kewirausahaan Siswa Mandiri
                </p>
              </div>

              <div className="space-y-1 md:pl-6 pt-4 md:pt-0">
                <span className="font-mono text-xs uppercase text-[#525866] font-bold">
                  Format Berkas
                </span>
                <p className="font-display font-black text-lg text-[#0F1115]">
                  MPEG-4 Video (1080p)
                </p>
                <p className="text-xs text-[#525866]">
                  Optimal untuk presentasi layar proyektor & smartphone
                </p>
              </div>

              <div className="space-y-1 md:pl-6 pt-4 md:pt-0">
                <span className="font-mono text-xs uppercase text-[#525866] font-bold">
                  Tahun Rilis
                </span>
                <p className="font-display font-black text-lg text-[#0F1115]">
                  Tahun Ajaran 2026 / 2027
                </p>
                <p className="text-xs text-[#525866]">
                  Hak cipta dilindungi civitas akademika SMENDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 8. CALL TO ACTION (BACK TO CURRICULUM & STEPS) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#FFE500] border-b-2 border-[#0F1115] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-diagonal-stripes opacity-40 rounded-full border-2 border-[#0F1115] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
          <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-full px-4 py-1.5 shadow-[3px_3px_0px_#0F1115]">
            <Sparkles className="w-4 h-4 text-[#0F1115]" />
            <span className="text-xs font-mono font-black uppercase text-[#0F1115]">
              PELAJARI ALUR SELENGKAPNYA
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0F1115] leading-tight">
            TERTARIK MENJADI BAGIAN DARI STUDENT COMPANY SMENDA?
          </h2>

          <p className="text-sm sm:text-base text-[#0F1115] font-sans max-w-2xl mx-auto font-medium leading-relaxed">
            Pendaftaran dibuka saat MPLS melalui formulir Google Forms resmi.
            Silakan isi form dan konfirmasi langsung ke pengurus (Contact
            Person).
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clay-black w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center space-x-2 shadow-[4px_4px_0px_#0F1115]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Daftar Sekarang (Google Form)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/#kegiatan"
              className="btn-clay-yellow w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-100"
            >
              <span>Jelajahi 14 Tahapan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#daftar"
              className="btn-clay-yellow w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-black tracking-wider uppercase inline-flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>Kontak & Info Pendaftaran</span>
            </Link>
          </div>

          {/* Quick Contact Badges */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="font-bold text-[#0F1115]">Contact Person:</span>
            {CONTACT_PERSONS.map((cp) => (
              <a
                key={cp.name}
                href={cp.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-[#0F1115] rounded-full font-bold shadow-[2px_2px_0px_#0F1115] hover:bg-[#FFE500] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#10B981]" />
                <span>
                  {cp.name}: {cp.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 9. FOOTER */}
      {/* ------------------------------------------------------------ */}
      <footer className="bg-[#FAF9F5] border-t-2 border-[#0F1115] py-10 sm:py-14 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b-2 border-[#0F1115] gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12 bg-[#FFE500] border-2 border-[#0F1115] rounded-full p-1 flex items-center justify-center shadow-[2px_2px_0px_#0F1115]">
                  <Image
                    src="/logo.png"
                    alt="Logo Student Company of SMENDA"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <span className="font-display font-black text-xl tracking-tight text-[#0F1115]">
                    SCSMENDA
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#525866] font-bold block">
                    STUDENT COMPANY SMENDA // 2026
                  </span>
                </div>
              </Link>

              {/* Supported by 7arzz pill in video footer */}
              <div className="sm:border-l-2 sm:border-[#0F1115]/20 sm:pl-4 inline-flex items-center space-x-2 bg-white border-2 border-[#0F1115] rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_#FFE500]">
                <span className="text-[10px] font-mono font-bold text-[#525866] uppercase">
                  Supported by
                </span>
                <Image
                  src="/7arzz.jpg"
                  alt="7arzz Store"
                  width={90}
                  height={24}
                  className="h-6 w-auto object-contain rounded"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono font-bold uppercase">
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
              <span>•</span>
              <Link href="/#kegiatan" className="hover:underline">
                14 Tahapan
              </Link>
              <span>•</span>
              <Link href="/#organisasi" className="hover:underline">
                5 Divisi
              </Link>
              <span>•</span>
              <Link href="/#faq" className="hover:underline">
                FAQ
              </Link>
              <span>•</span>
              <Link
                href="/#daftar"
                className="hover:underline text-[#0F1115] font-black"
              >
                Pendaftaran & CP
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-[#525866] gap-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>© 2026 SCSMENDA — PROGRAM KEWIRAUSAHAAN SISWA RESMI.</span>
              <span className="hidden sm:inline text-[#0F1115]/40">•</span>
              <span className="text-[#0F1115] font-black inline-flex items-center space-x-1.5">
                <span>SUPPORTED BY</span>
                <span className="bg-[#FFE500] text-[#0F1115] px-2 py-0.5 rounded border border-[#0F1115]">
                  7ARZZ
                </span>
              </span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center space-x-1.5 text-[#0F1115] hover:underline"
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
