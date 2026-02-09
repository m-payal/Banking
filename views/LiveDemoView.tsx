
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

const LiveDemoView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I am EVA, your personal assistant to help you with Bank related queries. You can type your question in the space provided.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, showRecovery]);

  const recoveryOptions = [
    { label: "ATM Pin", query: "when will I receive my change ATM pin" },
    { label: "Check Balance", query: "What is my current account balance?" },
    { label: "Transfer Funds", query: "How do I transfer money?" }
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Simulation of voice to text
    if (!isRecording) {
      setTimeout(() => {
        setInput("When will I receive my ATM Pin?");
        setIsRecording(false);
      }, 2000);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent, overrideInput?: string) => {
    if (e) e.preventDefault();
    const messageText = overrideInput || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowRecovery(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat(userMessage).map(m => ({
          role: m.role === 'user' ? 'user' : 'model' as any,
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: "You are EVA, a banking assistant. Respond as if you were a retrieval-based bot. For questions about ATM pins, say 'You will receive your new ATM PIN by post within 10 days from when your request has been submitted.' Be polite, concise, and focused on banking.",
          temperature: 0.3,
        }
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.text || "I couldn't get that. Let' try something else!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I couldn't get that. Let' try something else!",
        timestamp: new Date(),
        isError: true
      }]);
      setShowRecovery(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <header className="max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">Ask <span className="text-primary">Eva</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          Rasa-integrated chatbot interface featuring voice-to-text conversion.
        </p>
      </header>

      <div className="max-w-md mx-auto w-full">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Eva Blue Header */}
          <div className="p-6 bg-primary text-white flex items-center justify-between">
            <h3 className="font-bold">Ask Eva</h3>
            <span className="material-icons-round cursor-pointer">close</span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <span className="material-icons-round text-emerald-500 text-sm">smart_toy</span>
                  </div>
                )}
                <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-medium ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {showRecovery && (
              <div className="flex flex-wrap gap-2 ml-11">
                {recoveryOptions.map((opt, i) => (
                  <button key={i} onClick={() => handleSendMessage(undefined, opt.query)} className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase hover:bg-primary hover:text-white transition-all">
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="flex gap-3 ml-11">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl animate-pulse text-[10px] font-bold text-slate-400">Eva is typing...</div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-6 border-t border-slate-100 dark:border-slate-800">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full pl-6 pr-14 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-xs font-medium focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button 
                type="button"
                onClick={toggleRecording}
                className={`absolute right-4 top-1/2 -translate-y-1/2 material-icons-round text-sm ${isRecording ? 'text-red-500 animate-pulse' : 'text-primary'}`}
              >
                mic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoView;
