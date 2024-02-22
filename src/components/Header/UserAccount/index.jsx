import NotificationsIcon from '@mui/icons-material/Notifications'

const UserAccount = () => {
  return (
    <div className='flex gap-6 items-center'>
      <button
        type='button'
        className='relative inline-flex items-center p-1 text-sm font-medium text-center text-white'
      >
        <NotificationsIcon className='w-5 h-5' />
        <div className='absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
          0
        </div>
      </button>
      <div className='flex gap-3 items-center'>
        <img
          className='w-10 h-10 rounded-full'
          src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          alt='Rounded avatar'
        ></img>
        <span className='font-light block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
          Phan Minh Hung
        </span>
      </div>
    </div>
  )
}

export default UserAccount
