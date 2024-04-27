import { type ComponentProps, forwardRef } from 'react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

type OptionProps = {
  label: string | number | boolean
  value: string | number
}

interface SelectOptionProps extends Omit<ComponentProps<'select'>, 'ref'> {
  idName: string
  isRequired: boolean
  label: string
  selectClass?: string
  optionClass?: string
  optionData: Array<OptionProps>
  isError: boolean
  errorMsg: string | Array<string>
}

const SelectOption = forwardRef<HTMLSelectElement, SelectOptionProps>((props, ref) => {
  const { errorMsg, isError, idName, isRequired, label, optionData, selectClass = '', optionClass = '' } = props

  return (
    <>
      <label htmlFor={idName} className={`block font-primaryFont text-sm font-medium leading-6 text-white ${isRequired ? '' : 'mb-[0.80rem]'}`}>
        {label}

        {isRequired ? <span className="ml-1 text-xl font-extrabold text-red-700">*</span> : null}
      </label>

      <div className="mt-2">
        <select
          ref={ref}
          id={idName}
          className={tailwindClassMerger(
            selectClass,
            `block w-full overflow-hidden border border-primaryColor bg-transparent p-4 font-primaryFont text-base font-normal text-white shadow-none ring-1 ring-primaryColor placeholder:text-white focus:border-primaryColor focus:ring-1 focus:ring-primaryColor ${isError ? 'border-red-700 ring-1 ring-red-600' : ''}`,
          )}
        >
          {optionData.map((options, index) => {
            return (
              <option value={options.value} className={tailwindClassMerger(optionClass, 'text-black')} key={index}>
                {options.label}
              </option>
            )
          })}
        </select>

        <div className="text-red-600">{errorMsg}</div>
      </div>
    </>
  )
})

SelectOption.displayName = 'SelectOption'

export default SelectOption
