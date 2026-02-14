"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 lg:pt-40 pb-8 lg:pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="text-section-jp text-text-muted">お問い合わせ</p>
          <h1 className="font-en text-[40px] lg:text-[64px] font-bold text-primary tracking-wider">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="pb-section-y-sp lg:pb-section-y">
        <div className="max-w-narrow mx-auto px-6 lg:px-12">
          {status === "sent" ? (
            <div className="text-center py-20">
              <h2 className="text-[24px] font-bold text-text-primary mb-4">
                お問い合わせありがとうございます
              </h2>
              <p className="text-body text-text-secondary">
                内容を確認次第、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-body font-bold text-text-primary mb-2"
                >
                  お名前<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-body font-bold text-text-primary mb-2"
                >
                  メールアドレス<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-body font-bold text-text-primary mb-2"
                >
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-body font-bold text-text-primary mb-2"
                >
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full h-12 px-4 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-body font-bold text-text-primary mb-2"
                >
                  お問い合わせ内容<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  className="w-full px-4 py-3 border border-border focus:border-primary focus:outline-none transition-colors resize-vertical"
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-block w-[300px] h-[60px] bg-primary text-white text-[18px] font-bold tracking-wider transition-colors hover:bg-primary-dark disabled:opacity-50"
                >
                  {status === "sending" ? "送信中..." : "送信する"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-center text-red-500 text-body-sm">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
