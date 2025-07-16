import handshake from '@/assets/handshake.jpg'
export const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-slate-300 h-[80px]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto"
                 src={handshake} alt=""/>
          </a>
        </div>
      </nav>
    </header>
  )
}
