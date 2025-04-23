import { cn } from '~/common/css.ts'

interface SectionIntroProps {
  title: string
  description?: string
  color?: string
}

const SectionIntro = ({ title, description, color = 'contrast' }: SectionIntroProps) => {
  return (
    <div className="pb-xl text-center">
      <h2 className={cn('text-4xl md:text-5xl font-bold capitalize', `text-${color}`)}>{title}</h2>
      {description && <p className={cn('text-lg mt-3', `text-${color}`)}>{description}</p>}
    </div>
  )
}

export default SectionIntro
