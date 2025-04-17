type TitleProps = {
    pretitle: string;
    title: string;
}
const Title = ({ pretitle, title}: TitleProps) => {
  return (
   
    <div className="mb-10 space-y-3 m-auto md:w-[65%]">
      <h3 className="text-primary text-center font-medium md:text-2xl text-xl will-change-transform">
        {pretitle}
      </h3>
      <h1 className="2xl:text-5xl md:text-4xl text-3xl text-center font-medium will-change-transform" dangerouslySetInnerHTML={{ __html: title }}></h1>
    </div>
  )
}

export default Title