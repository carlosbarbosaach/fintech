import React, { ComponentProps } from 'react'

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-small) 1.5rem",
  backgroundColor: "var(--color-6)",
  borderRadius: "var(--gap-normal)",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-small)",
  fontWeight: "600",
  ...generalStyle
}

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
}

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
}
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>{label}</label>
      <input style={inputStyle} id={label} name={label} type="date" {...props} />
    </div>
  )
}

export default DateInput
