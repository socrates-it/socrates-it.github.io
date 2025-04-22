interface SectionIntroProps {
  title: string
  description?: string
}

const SectionIntro = ({ title, description }: SectionIntroProps) => {
  return (
    <div className="pb-xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold capitalize">{title}</h2>
      {description && <p className=" text-lg mt-3">{description}</p>}
    </div>
  )
}

export default SectionIntro
