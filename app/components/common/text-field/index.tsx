import { type ComponentProps, forwardRef } from 'react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

interface TextFieldProps extends Omit<ComponentProps<'input'>, 'ref'> {
  idName: string
  isRequired: boolean
  label: string
  extraClass?: string
  isError: boolean
  errorMsg: string | Array<string>
}

const TextFields = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { idName, isRequired, errorMsg, isError, label, extraClass = '' } = props

  return (
    <>
      <label htmlFor={idName} className={`block font-primaryFont text-sm font-medium leading-6 text-white ${isRequired ? '' : 'mb-[0.80rem]'}`}>
        {label}

        {isRequired ? <span className="ml-1 text-xl font-extrabold text-red-700">*</span> : null}
      </label>

      <div className="mt-2">
        <input
          id={idName}
          aria-required="true"
          className={tailwindClassMerger(
            `block w-full overflow-hidden border border-primaryColor bg-transparent p-4 font-primaryFont text-base font-normal text-white shadow-none ring-1 ring-primaryColor placeholder:text-white focus:border-primaryColor focus:ring-1 focus:ring-primaryColor ${isError ? 'border-red-700 ring-1 ring-red-600' : ''}`,
            extraClass,
          )}
          ref={ref}
        />

        <div className="text-red-600">{errorMsg}</div>
      </div>
    </>
  )
})

TextFields.displayName = 'TextFields'

export default TextFields
