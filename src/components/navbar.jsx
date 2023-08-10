import '../index.css'
function Navbar() {
    return (
        <nav class="bg-white  w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-8">
        <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8 text-cyan-500 ">
          <a class="logo" href="#">
            <h3 class="font-bold text-2xl">LOGO</h3>
          </a>
          <input type="checkbox" id="check" />
    
          <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li><a href="#">Login</a></li>
            
            <li><a href="#">SIGN UP</a></li>
    
            <label for="check" class="close-menu">X</label>
          </span>
    
          <label for="check" class="open-menu">Menu</label>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;