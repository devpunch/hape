import s from './Available.module.scss';

export const Available = () => {
  return (
    <div className={s.available}>
      <span>Available</span>
      <div className={s.available__num}>
        <p>
          47
        </p>
        <sub>
          / 100
        </sub>
      </div>

    </div>
  )
}
