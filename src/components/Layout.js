import Link from "next/link";

export default function Layout({ children }) {
  return (
<div className="min-h-full flex flex-col w-full items-center justify-center">
  <Link href="/">
    <header className="text-center pt-8 pb-6 mb-10  bg-[#2c2a2a] w-screen transform rotate-1 -mt-4 max-sm:pt-6 max-sm:pb-4 max-sm:rotate-0">
            <div className="m-0 flex flex-col text-[#bbbbbb]">
                <span className="text-3xl neon-text">MyBlogs</span>
            </div>
    </header>
  </Link>
    <div className="max-w-[1200px] mt-5 mb-20 px-5 w-full box-border max-sm:mb-10 text-[#555557]">
    {children}
    </div>
    <footer className=" border-t border-[#474747] text-[#474747] p-10 transform -rotate-1 text-center mt-auto w-screen max-sm:-rotate-0 max-sm:p-5 max-sm:text-sm ">
        <p>©2025 Stellar Stack, Inc. All rights reserved.</p>
    </footer>
</div>
  );
}