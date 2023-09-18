import Image from 'next/image'
/*

light -> background: rgb(236, 246, 234);
mid -> background: rgb(71, 135, 2);
dark -> background: rgb(29, 54, 23);

*/
export default function Home() {
  return (
    <main className="">
      <div className="header">
        <a
          className=""
          href="."
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.png"
            alt="Newbie Venture Logo"
            width={60}
            height={60}
            priority
          />
          <p className='header-text'>Newbie Ventures</p>
        </a>
      </div>
      <div className="container">
        <div>
          <h3>- Angel Investing</h3>
          <h3>- Experimenting with New Ideas</h3>
          <h3>- Consulting</h3>
        </div>

        <div>
          <div className='small-buffer'>
            <span>Join </span><a href='https://angellist.com/s/newbie-ventures/RsOK9' target='_blank'> Newbie Ventures AngelList Syndicate
            </a> <span> if you are </span>
             <a href='https://www.investopedia.com/terms/a/accreditedinvestor.asp' target='_blank'>accredited</a>
             <span>!</span>
          </div>
        </div>

        <div className='small-buffer'> Connect with William Maio on <a href='https://www.linkedin.com/in/wmaiouiru/' target='_blank'> LinkedIn </a></div>
        <div className='footer'><a href="mailto:info@newbieventures.com">info@newbieventures.com</a></div>
      </div>
    </main>
  )
}
