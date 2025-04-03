interface SectionIntroProps {
  title: string
  description: string
}

const SectionIntro = ({ title, description }: SectionIntroProps) => {
  return (
    <div className="text-default dark:text-light pb-xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-heading dark:text-light uppercase">{title}</h2>
      <div className="mt-2 flex justify-center">
        <div className="w-12 h-[2px] bg-primary translate-x-1 translate-y-0.5"></div>
        <div className="w-12 h-[2px] bg-primary -translate-x-1 -translate-y-0.5"></div>
      </div>
      {description && <p className="text-description text-lg mt-3">{description}</p>}
    </div>
  )
}

export default SectionIntro
