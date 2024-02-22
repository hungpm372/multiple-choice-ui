import { useState } from 'react'
import UserAccount from './UserAccount'

const Header = () => {
  const [toggleForm, setToggleForm] = useState(false)

  const handleShowFormLogin = (e) => {
    setToggleForm(true)
  }
  return (
    <header className='shadow-lg fixed inset-x-0'>
      <div>
        <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
              <img
                src='https://avatars.githubusercontent.com/u/122034996?v=4'
                className='h-8 rounded-full'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Flowbite
              </span>
            </div>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <button
                onClick={handleShowFormLogin}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Đăng nhập
              </button>
              {/* <UserAccount /> */}
            </div>
            <div
              className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
              id='navbar-cta'
            >
              <ul className='flex flex-col font-light p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Tính năng
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Chính sách
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Tin tức
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
