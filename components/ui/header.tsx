export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row">
          {/* Site branding */}
          <div className="mr-4">
            {/* Logo */}
            <a href="https://business-card-mu-virid.vercel.app/" className="" aria-label="Logo Link">
              <div className="flex flex-row justify-center align-center">
              <img src="./logo.png" alt="" className="logo-img " />
                <h1 className="pt-8">John Joseph | Web Dev</h1>
              </div>
            </a>
          </div>
    
      </div>
    </header>
  )
}
