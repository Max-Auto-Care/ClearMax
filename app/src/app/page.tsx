"use client";

import { useState } from "react";
import { trackMetaEvent } from "./MetaPixel";
import CountdownTimer from "./CountdownTimer";

const CHECKOUT_URL =
  "https://maxautocare.orderonline.id/clear-max-glass-cleaner-250-ml";
const SHOPEE_URL = "https://shopee.co.id/product/136980590/40755332082/";

const ORIGINAL_PRICE = 39000;
const PROMO_PRICE = 29000;

function formatPrice(price: number) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

type OrderButtonProps = {
  platform?: "orderonline" | "shopee";
  className?: string;
  children?: React.ReactNode;
};

function OrderButton({
  platform = "orderonline",
  className = "",
  children,
}: OrderButtonProps) {
  const isShopee = platform === "shopee";
  const url = isShopee ? SHOPEE_URL : CHECKOUT_URL;

  const handleOrder = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!url || url.startsWith("GANTI_DENGAN")) {
      event.preventDefault();
      alert("Silakan masukkan link checkout produk terlebih dahulu.");
      return;
    }

    if (!isShopee) {
      trackMetaEvent("InitiateCheckout", {
        content_name: "MAX Glass Cleaner",
        content_type: "product",
        currency: "IDR",
        value: PROMO_PRICE,
      });
    }
  };

  return (
    <a
      href={url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleOrder}
      className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
        isShopee
          ? "bg-[#EE4D2D] text-white hover:bg-[#D94326]"
          : "bg-[#dc2626] text-white hover:bg-[#b91c1c]"
      } ${!isShopee ? "oo-link" : ""} ${className}`}
    >
      {children ?? (isShopee ? "CHECKOUT SHOPEE" : "ORDER SEKARANG")}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

const benefits = [
  {
    number: "01",
    title: "Kaca Lebih Bersih",
    description:
      "Membantu membersihkan debu, sidik jari, dan noda pada permukaan kaca kendaraan.",
    image: "/1.png",
  },
  {
    number: "02",
    title: "Bantu Atasi Water Spot",
    description:
      "Membantu membersihkan bekas percikan air dan noda ringan agar kaca terlihat lebih jernih.",
    image: "/2.png",
  },
  {
    number: "03",
    title: "Minim Residu",
    description:
      "Membersihkan kaca tanpa meninggalkan lapisan yang mengganggu kejernihan pandangan jika digunakan sesuai petunjuk.",
    image: "/3.png",
  },
];

const steps = [
  "Semprotkan Clear Max pada permukaan kaca yang ingin dibersihkan.",
  "Usap menggunakan kain microfiber bersih secara merata.",
  "Lap kembali hingga kaca terlihat bersih dan jernih tanpa bekas residu.",
];

const faqs = [
  {
    question: "MAX Clear Max digunakan untuk apa?",
    answer:
      "MAX Clear Max merupakan cairan pembersih kaca kendaraan yang membantu membersihkan debu, sidik jari, bekas air, dan noda pada permukaan kaca.",
  },
  {
    question: "Bagaimana cara menggunakannya?",
    answer:
      "Semprotkan produk pada permukaan kaca, lalu usap menggunakan kain microfiber bersih hingga kaca terlihat jernih.",
  },
  {
    question: "Apakah bisa digunakan untuk kaca mobil?",
    answer:
      "Ya, MAX Clear Max dapat digunakan untuk membersihkan kaca kendaraan. Gunakan sesuai petunjuk pada label kemasan.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Klik Order Sekarang untuk menuju halaman checkout atau Checkout Shopee untuk berbelanja melalui Shopee.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] pb-24 text-white md:pb-0">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#home" className="font-black tracking-tight">
            MAX <span className="text-blue-500">AUTO CARE</span>
          </a>

          <a
            href="#promo"
            className="rounded-full border border-blue-500/50 px-4 py-2 text-xs font-bold text-blue-400 transition hover:bg-blue-600 hover:text-white"
          >
            LIHAT PROMO
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,0.16),transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-widest text-blue-400">
                GLASS CLEANER
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Rawat Kaca Kendaraan.
              <br />
              <span className="text-blue-500">Mobil Lebih Terawat.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-zinc-400 sm:text-lg">
              MAX Clear Max membantu membersihkan permukaan kaca kendaraan dari
              debu, sidik jari, bekas air, dan noda. Menjaga kaca tetap bersih
              dan jernih untuk mendukung kenyamanan berkendara sehari-hari.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-2 text-green-400">
                ✓ Bisa Bayar COD
              </span>
            </div>

            <div className="mt-5 flex flex-wrap">
              <CountdownTimer placement="top" />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OrderButton className="sm:flex-1">ORDER SEKARANG</OrderButton>

              <OrderButton platform="shopee" className="sm:flex-1">
                CHECKOUT DI SHOPEE
              </OrderButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
              <span>✓ Perawatan kendaraan</span>
              <span>✓ Praktis digunakan</span>
              <span>✓ Pemesanan online</span>
            </div>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#101B33] to-[#0B0B0B] p-5 shadow-2xl shadow-black/50 sm:p-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.25em] text-blue-400">
                  MAX AUTO CARE
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-zinc-400">
                  GLASS CLEANER
                </span>
              </div>

              <img
                src="/banner.png"
                alt="MAX Glass Cleaner"
                className="aspect-[4/3] w-full object-contain drop-shadow-2xl"
              />

              <div className="mt-4 border-t border-white/10 pt-5">
                <p className="text-2xl font-black">
                  GLASS <span className="text-blue-500">CLEANER</span>
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Pembersih kaca kendaraan untuk membantu mengangkat debu, sidik
                  jari, dan noda air agar kaca tetap bersih dan jernih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-blue-100">
              PROMO MAX AUTO CARE
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Bersihkan Kaca Mobil, Pandangan Lebih Jernih.
            </h2>
          </div>

          <OrderButton className="bg-black text-white hover:bg-zinc-800 sm:max-w-xs">
            PESAN SEKARANG
          </OrderButton>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              GLASS CLEANER
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan Kendaraan Lebih Praktis
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Kenali Clear Max dari MAX Auto Care, pembersih kaca kendaraan yang
              membantu mengangkat debu, sidik jari, dan noda air agar kaca tetap
              bersih dan jernih.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-blue-500/50"
              >
                <span className="text-sm font-black text-blue-500">
                  {benefit.number}
                </span>
                <img
                  src={benefit.image}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.03]"
                />

                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-[#111111] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-blue-500">
              SIMPLE CARE
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan yang Dimulai dari Hal Sederhana
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Gunakan Clear Max sesuai petunjuk pada label agar penggunaan
              produk sesuai dengan rekomendasi.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                  {index + 1}
                </span>

                <p className="text-sm leading-7 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PROMO */}
      <section id="promo" className="scroll-mt-6 px-5 py-16 sm:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#101A30] to-[#0D0D0D] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
                MAX AUTO CARE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Saatnya Bersihkan Kaca Mobil dan Nikmati Pandangan Lebih Jernih!
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Dapatkan Glass Cleaner MAX Auto Care dengan harga promo. Pilih
                metode pemesanan yang paling nyaman untuk kamu.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
              <p className="text-center text-sm text-zinc-400">MAX AUTO CARE</p>

              <h3 className="mt-2 text-center text-2xl font-black">
                Glass Cleaner
              </h3>

              <p className="mt-4 text-center text-sm text-zinc-400 line-through">
                {formatPrice(ORIGINAL_PRICE)}
              </p>

              <p className="mt-1 text-center text-4xl font-black text-blue-500 sm:text-5xl">
                {formatPrice(PROMO_PRICE)}
              </p>

              <p className="mt-2 text-center text-sm font-semibold text-blue-300">
                Hemat {formatPrice(ORIGINAL_PRICE - PROMO_PRICE)}
              </p>

              <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
                Harga promo Glass Cleaner MAX Auto Care.
              </p>

              <div className="mt-5 flex flex-wrap">
                <CountdownTimer placement="top" />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <OrderButton>ORDER SEKARANG</OrderButton>
                <OrderButton platform="shopee">CHECKOUT DI SHOPEE</OrderButton>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                Detail pembayaran dan pengiriman mengikuti halaman checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F4F4] px-5 py-16 text-zinc-900 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black">Ada Pertanyaan?</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                >
                  <span>{faq.question}</span>

                  <span className="text-xl text-blue-600">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">
            MAX <span className="text-blue-500">AUTO CARE</span>
          </p>

          <p className="text-xs text-zinc-500">
            © 2026 MAX Auto Care. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#080808]/95 p-3 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="shrink-0">
            <p className="text-xs text-zinc-400">Harga promo</p>
            <p className="text-lg font-black text-blue-500">
              {formatPrice(PROMO_PRICE)}
            </p>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
            <OrderButton className="px-2 py-3 text-[10px]">
              ORDER SEKARANG
            </OrderButton>
            <OrderButton platform="shopee" className="px-2 py-3 text-[10px]">
              BELI DI SHOPEE
            </OrderButton>
          </div>
        </div>
      </div>
    </main>
  );
}
