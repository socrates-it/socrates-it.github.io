import { cn } from '~/common/css.ts'

interface SectionIntroProps {
  title: string
  description?: string
  color?: string
  dimensions?: string
  position?: string
  margin?: string
}

const SectionIntro = ({
  title,
  description,
  color = 'contrast',
  dimensions = 'text-4xl md:text-5xl',
  position = 'text-center',
  margin = 'pb-lg md:pb-2xl',
}: SectionIntroProps) => {
  return (
    <div className={cn(position, margin)}>
      <h2 className={cn('font-bold capitalize leading-[0]', `text-${color}`, `${dimensions}`)}>{title}</h2>
      {description && <p className={cn('text-lg mt-3', `text-${color}`)}>{description}</p>}
    </div>
  )
}

export default SectionIntro
