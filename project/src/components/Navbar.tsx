import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">البحث الأكاديمي العربي</h1>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">الرئيسية</Link>
            <Link to="/services" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">الخدمات</Link>
            <Link to="/blog" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">المدونة</Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">من نحن</Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">اتصل بنا</Link>
            <Link to="/login" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">تسجيل الدخول</Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">الرئيسية</Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">الخدمات</Link>
            <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">المدونة</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">من نحن</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">اتصل بنا</Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">تسجيل الدخول</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;