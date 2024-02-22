import Header from '../Header'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='pt-[68px]'>{children}</main>
    </div>
  )
}

export default MainLayout
