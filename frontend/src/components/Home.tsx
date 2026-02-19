'use client'
import React, { useState } from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

function Home() {

    type WeatherData = {
  cod: number | string;
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
};

  const [data, setData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city: city }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-start pt-25 bg-black relative">
        
        <div className="relative z-10 flex gap-3">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-black">
                <input 
                    className='w-full flex-1 border border-slate-700 rounded-lg px-6 py-4 bg-black/50 text-white text-lg
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all'
                    type="text"
                    value={city}
                    onChange={(e) => {
                    setCity(e.target.value);
                    }}
                    placeholder="Enter city name..."
                />
                <button
                    className="w-full sm:w-auto inline-flex 
                    h-14 px-8 animate-shimmer items-center justify-center rounded-lg 
                    border border-slate-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] text-lg font-medium text-slate-300 transition-all 
                    hover:text-white hover:border-sky-700 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]
                    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
                    focus:ring-offset-slate-900"
                    onClick={() => {
                    fetchData();
                    }}
                >
                    Search
                </button>
            </div>
        </div>
        {data?.cod !== 404 && data ? (
                <div className="relative z-10 w-full max-w-md mx-auto mt-10">
                <div className="backdrop-blur-sm bg-transparent rounded-2xl p-8 
                              border border-white/10 hover:border-sky-500/30 
                              transition-all duration-500 hover:scale-105
                              shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h1 className="text-5xl font-bold text-white tracking-tight">{data.name}</h1>
                    </div>
                    
                    <div className="text-center mb-6">
                        <div className="text-7xl font-light text-white mb-2">
                            {data.main.temp}°<span className="text-4xl text-sky-400">C</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-xl">
                        <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <span className="text-gray-200">{data.weather[0].main}</span>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/5 text-center">
                        <p className="text-xs text-gray-500">
                            {new Date().toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </p>
                    </div>
                </div>
            </div>
            ) : null}
        <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
}

export default Home;