import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
     const navItems = [
    { id: 1, text: 'Home', navigationAddress :"/home" },
    { id: 2, text: 'Completed Todos',navigationAddress :"/completedtodos" },
    
    ];
    return (
        <div className='bg-black flex justify-between items-center h-24 max-w-screen mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Todo List</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className=' hover:bg-[#00df9a] rounded-xl py-auto mx-3 cursor-pointer duration-300 hover:text-black'
            onClick={()=>navigate(item.navigationAddress)}
          >
            {item.text}
          </li>
        ))}
            </ul>
            </div>
    )
}
export default Navbar