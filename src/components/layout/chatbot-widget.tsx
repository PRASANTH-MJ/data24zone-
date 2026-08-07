"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  findBestAnswer,
  GREETING_ANSWER,
  QUICK_REPLIES,
  type ChatAnswer,
} from "@/lib/chatbot";

interface ChatMessage {
  id: number;
  role: "bot" | "user";
  answer?: ChatAnswer;
  text?: string;
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: nextId.current++, role: "bot", answer: GREETING_ANSWER }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [...prev, { id: nextId.current++, role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = findBestAnswer(trimmed);
      setMessages((prev) => [...prev, { id: nextId.current++, role: "bot", answer }]);
      setTyping(false);
    }, 500);
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-lg shadow-primary/30"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
            className="flex"
          >
            {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Data24Zone chat assistant"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="glass fixed inset-x-4 bottom-24 z-50 flex h-[min(560px,70vh)] flex-col overflow-hidden rounded-2xl bg-white/95 shadow-2xl sm:inset-x-auto sm:left-6 sm:w-96 dark:bg-slate-900/95"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 bg-gradient-brand px-5 py-4 text-white dark:border-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Data24Zone Assistant</p>
                <p className="truncate text-xs text-white/80">Ask about courses, services & pricing</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
              {typing && (
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-slate-400 w-fit dark:bg-white/5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
                </div>
              )}

              {messages.length <= 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => send(reply)}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10 dark:text-primary-light"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-white/10"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Type your question"
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-gradient-brand text-white"
            : "rounded-bl-sm bg-slate-100 text-dark dark:bg-white/5 dark:text-white",
        )}
      >
        <p>{message.text ?? message.answer?.text}</p>
        {message.answer?.links && message.answer.links.length > 0 && (
          <div className="mt-2.5 flex flex-col gap-1.5">
            {message.answer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex w-fit items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  isUser
                    ? "bg-white/20 hover:bg-white/30"
                    : "bg-primary/10 text-primary hover:bg-primary/20 dark:text-primary-light",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

