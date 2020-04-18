import { CSSProperties, CustomFunction, CustomFunctionValues } from './cssSettings'

export const createVariable = (values: CustomFunctionValues, func: CustomFunction): CSSProperties => {
  const variable = { } as CSSProperties
  const screenSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'default', 'smaller']
  for (let screenSize of screenSizes) variable[screenSize] = func({ ...values, screenSize })
  variable.default = func({ ...values, screenSize: 'xl' })
  return variable
}

export const createProperty = (customSettings: CSSProperties): CSSProperties => Object.assign({}, { unit: 'px' }, customSettings)
