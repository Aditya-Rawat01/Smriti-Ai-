"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Wand2, BrainCircuit, FileQuestion } from "lucide-react";

export default function ResourceChatPage() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    // Example bot response (replace with actual API logic)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Here's a response from Smriti AI!" },
      ]);
    }, 1000);
  };

  return (
    <div className="h-screen bg-muted/50 text-foreground pt-14">
      <div className="flex flex-col h-full w-full">
        {/* Header */}
        <div className="pt-6 pb-4 text-center">
          <h1 className="text-2xl font-bold text-white">Topic Name</h1>
        </div>

        {/* Chat Area */}
        <div className="overflow-y-auto h-full">
          <div className="flex-1 px-2 sm:px-0 space-y-4 max-w-7xl mx-auto pb-20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="p-3 rounded-xl max-w-lg shadow bg-muted text-foreground rounded-bl-none">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input & Actions */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full border-t border-muted bg-card p-4 shadow-inner rounded-t-3xl">
            {/* Input Row */}
            <div className="flex gap-2 mb-4 items-end">
              <Textarea
                className="flex-1 resize-none max-h-40 overflow-auto rounded-2xl bg-zinc-800 text-white placeholder:text-zinc-400 focus:ring-1 focus:ring-primary border-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about this resource..."
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button
                size="icon"
                className="rounded-full bg-primary hover:scale-105 transition"
                onClick={handleSend}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                className="flex-1 rounded-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                <Wand2 className="mr-2 h-4 w-4" /> AI Summarize
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                <BrainCircuit className="mr-2 h-4 w-4" /> Mind Map
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full border-zinc-700 text-white hover:bg-zinc-800"
              >
                <FileQuestion className="mr-2 h-4 w-4" /> Attempt a Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
