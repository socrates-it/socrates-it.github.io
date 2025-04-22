import { cn } from '~/common/css.ts'

interface SectionIntroProps {
  title: string
  description?: string
  isLightContrast: boolean
}

const SectionIntro = ({ title, description, isLightContrast }: SectionIntroProps) => {
  return (
    <div className="pb-xl text-center">
      <h2
        className={cn('text-4xl md:text-5xl font-bold capitalize', {
          'text-lightest': isLightContrast,
          'text-black': !isLightContrast, // still apply border-t for height consistency
        })}>
        {title}
      </h2>
      {description && <p className=" text-lg mt-3">{description}</p>}
    </div>
  )
}

export default SectionIntro
