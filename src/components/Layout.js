
export default function Layout({ children }) {
  return (
<div className="min-h-full flex flex-col w-full items-center justify-center">
    <header className="text-center my-20">
            <h1 className="m-0">
                <span>Welcome to </span>
                <span>MyBlogs</span>
            </h1>
    </header>
    <div className="max-w-[1200px] mt-5 mb-20 px-5 w-full box-border">
    {children}
    </div>
    <footer className="bg-[#2c2a2a] text-[#bbb] p-10 text-center mt-auto w-full">
        <p>Copyright 2021</p>
    </footer>
</div>
  );
}