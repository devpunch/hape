import s from './AvailableLittle.module.scss';

export const AvailableLittle = () => {
  return (
    <div className={s.available}>
      <span>
          Available
      </span>
      <div className={s.available__num}>
        <p>
          2

        </p>
        <sub>
          / 8
        </sub>
      </div>

    </div>
  )
}
