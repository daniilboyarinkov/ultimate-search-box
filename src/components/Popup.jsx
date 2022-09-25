export const Popup = ({ active, setActive, children }) => {
  return (
    active && (
      <div
        className="Popup"
        onClick={() => {
          setActive(false)
        }}
      >
        <div className="Popup__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  )
}
