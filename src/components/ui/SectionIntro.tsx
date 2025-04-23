import { cn } from '~/common/css.ts'

interface SectionIntroProps {
  title: string
  description?: string
  color?: string
  dimensions?: string
  position?: string
}

const SectionIntro = ({ title, description, color = 'contrast', dimensions = 'text-4xl md:text-5xl', position = 'text-center' }: SectionIntroProps) => {
  return (
    <div className={position}>
      <h2 className={cn('font-bold capitalize', `text-${color}`, `${dimensions}`)}>{title}</h2>
      {description && <p className={cn('text-lg mt-3', `text-${color}`)}>{description}</p>}
    </div>
  )
}

export default SectionIntro
