
const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex  gap-2 '>
            <p> Terms & Conditions</p>
            <p>|</p>
            <p> Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                </div>
                <div className='social-icon'>
                    <img src="/assets/twitter.svg" alt="github" className='w-1/2 h-1/2' />
                </div>
                <div className='social-icon'>
                    <img src="/assets/instagram.svg" alt="github" className='w-1/2 h-1/2' href="https://www.instagram.com/tizawebcrafts/profilecard/?igsh=MXE3YXF1emp6bDR6Nw== /"/>
                </div>
            </div>
        </div>
            <p className='text-white-500'>&#169; 2024 Tiza Portfolio, All Rights Reserved</p>
    </section>
  )
}

export default Footer
