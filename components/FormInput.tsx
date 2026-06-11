interface FormInputProps {
  type?: string
  name?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  className?: string
}

export default function FormInput({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onFocus,
  required = false,
  disabled = false,
  className = '',
}: FormInputProps) {
  const baseClass =
    'w-full rounded-2xl border border-zinc-200 p-5 text-lg text-black outline-none placeholder:text-zinc-400 disabled:opacity-50'

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      disabled={disabled}
      className={className || baseClass}
    />
  )
}
