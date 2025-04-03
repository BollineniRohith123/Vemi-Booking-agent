import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Interactive Ordering Buddy by VEMI AI",
  description: "An intelligent AI assistant for ordering across multiple categories: Ecommerce, Restaurant, Grocery, and Medical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Fathom - beautiful, simple website analytics --> */}
        <script src="https://cdn.usefathom.com/script.js" data-site="ONYOCTXK" defer></script>
        {/* <!-- / Fathom --> */}
      </head>
      <body className="bg-gradient-to-b from-indigo-900 to-black text-white">
        <div className="flex mx-auto justify-between items-center py-4 px-6 max-w-[1206px]">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Interactive Ordering Buddy
              <span className="text-sm ml-2 text-purple-300">by VEMI AI</span>
            </div>
          </div>
          {/* Navigation buttons removed */}
        </div>
        {children}
      </body>
    </html>
  );
}
