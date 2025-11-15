// components/TechVisualSection.tsx
'use client';

export default function TechVisualSection() {
  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Górny tekst: lewa i prawa kolumna */}
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl leading-tight text-neutral-900 md:text-4xl">
              Pushing the boundaries
              <br />
              between <span className="font-bold">Tech &amp; Visual</span>
            </h2>
          </div>

          <span className="text-sm leading-relaxed text-neutral-600 md:max-w-md md:justify-self-end md:text-base">
            We merge technology and visual design to create innovative, impactful solutions. Our mission is to deliver designs that are both striking and highly functional, redefining what&apos;s
            possible in the digital space.
          </span>
        </div>

        {/* BLOOB + STATYSTYKI W JEDNYM KONTAINERZE */}
        <div className="relative mt-10 mb-20 w-full">
          {/* Kształt ze zdjęciem – path z Figmy */}
          <svg className="h-auto w-full" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <clipPath id="tech-visual-clip">
                <path
                  d="M980 0C1035.23 2.57706e-06 1080 44.7715 1080 100C1080 135.726 1104.35 200 1240 200H1300C1377.32 200 1440 262.68 1440 340C1440 417.32 1377.32 480 1300 480H1180C1124.77 480 1080 435.228 1080 380C1080 344.553 1056.03 281.003 923.159 280.012L920 280H140C62.6801 280 0 217.32 0 140C0 62.6801 62.6801 1.28853e-06 140 0H980Z"
                  fill="#D9D9D9"
                />
              </clipPath>
            </defs>

            <image href="/assets/bg/abstract-bg2.webp" x="0" y="0" width="1440" height="560" preserveAspectRatio="xMidYMid slice" clipPath="url(#tech-visual-clip)" />
          </svg>

          {/* STATYSTYKI NA KAPSUŁIE */}
          <dl className="pointer-events-none">
            {/* 3 środkowe – przesunięte niżej */}
            <div className="absolute inset-x-10 top-[65%] flex max-w-3/5 -translate-y-1/2 justify-between md:inset-x-24">
              {/* 50+ */}
              <div className="space-y-1 text-center">
                <span className="text-3xl font-semibold text-neutral-900">50+</span> <br />
                <span className="font-medium tracking-[0.18em] text-neutral-500 uppercase">Industries</span>
              </div>

              {/* 4 Week */}
              <div className="space-y-1 text-center">
                <span className="text-3xl font-semibold text-neutral-900">4 Week</span>
                <br />
                <span className="font-medium tracking-[0.18em] text-neutral-500 uppercase">Turnaround</span>
              </div>

              {/* 100% */}
              <div className="space-y-1 text-center">
                <span className="text-3xl font-semibold text-neutral-900">100%</span> <br />
                <span className="font-medium tracking-[0.18em] text-neutral-500 uppercase">Satisfaction</span>
              </div>
            </div>

            {/* 5000+ – zostaje w obecnej linii */}
            <div className="absolute top-[20%] -translate-y-1/2 text-right md:right-34">
              <span className="text-3xl font-semibold text-neutral-900">5000+</span> <br />
              <span className="mt-1 font-medium tracking-[0.18em] text-neutral-500 uppercase">Clients</span>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
