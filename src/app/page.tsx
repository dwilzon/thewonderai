import Image from 'next/image';

export function Header() {
  return (
    <header className="p-4 flex items-center">
      <h1 className="text-xl font-bold text-white"></h1>
    </header>
  );
}

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>TheWonderAI | Discover the Wonder of AI</title>
      </Head>

      <main className="bg-black text-white min-h-screen font-sans">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-gradient-to-br from-purple-900 to-black">
            <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="TheWonderAI Logo"
              width={200}
              height={200}
              priority
              className="mb-4 bg-transparent"
            />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-purple-200">
              Discover the Wonder of AI
            </h2>
            </div>
          <p className="text-lg text-gray-300 mb-6">
            Explore AI tools that spark creativity and supercharge productivity.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 px-6 py-3 rounded-xl text-white hover:bg-blue-600 transition">Try It Now</button>
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">Learn More</button>
          </div>
        </section>

        {/* AI Tools */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">Featured AI Tools</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((tool) => (
              <div key={tool} className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
                <h4 className="text-xl font-bold mb-2">AI Tool {tool}</h4>
                <p className="text-gray-400 mb-4">This tool uses AI to generate awesome results.</p>
                <button className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700">Launch Tool</button>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-gray-950">
          <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">How It Works</h3>
          <ol className="max-w-2xl mx-auto text-center text-lg space-y-4 text-gray-300">
            <li>1️⃣ Choose an AI tool</li>
            <li>2️⃣ Generate creative results</li>
            <li>3️⃣ Download or share instantly</li>
          </ol>
        </section>

        {/* Blog Preview */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">From the Blog</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-gray-900 p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-2">AI & Creativity #{post}</h4>
                <p className="text-gray-400">Learn how AI is reshaping the way we create, write, and think.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-6 bg-black text-center">
          <h3 className="text-2xl font-bold mb-4 text-purple-200">Join Our AI Explorer List</h3>
          <p className="text-gray-400 mb-6">Get the latest tools, tips, and insights delivered to your inbox.</p>
          <form className="flex justify-center gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Your email" className="p-3 rounded-lg w-full bg-gray-800 text-white border border-gray-700" />
            <button type="submit" className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600">Subscribe</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-8 text-sm">
          &copy; {new Date().getFullYear()} TheWonderAI. All rights reserved.
        </footer>
      </main>
    </>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
