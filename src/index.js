const plugin = require('tailwindcss/plugin')

const ionicPlugin = plugin(({ addBase, addComponents, addUtilities, theme }) => {
  const colors = theme('colors')
  const borderRadius = theme('borderRadius')
  const spacing = theme('spacing')

  const newUtilities = {}

  Object.keys(colors).forEach((colorsKey) => {
    const color = colors[colorsKey]
    if (typeof color === 'object' && colorsKey !== 'DEFAULT') {
      Object.keys(color).forEach((colorKey) => {
        const value = color[colorKey]
        newUtilities[`.ion-bg-${colorsKey}-${colorKey}`] = {
          '--background': value,
        }
        newUtilities[`.ion-text-${colorsKey}-${colorKey}`] = {
          '--color': value,
        }
        newUtilities[`.ion-border-${colorsKey}-${colorKey}`] = {
          '--border-color': value,
        }
        newUtilities[`.ion-highlight-focus-${colorsKey}-${colorKey}`] = {
          '--highlight-color-focused': value,
        }
        newUtilities[`.ion-highlight-valid-${colorsKey}-${colorKey}`] = {
          '--highlight-color-valid': value,
        }
        newUtilities[`.ion-highlight-invalid-${colorsKey}-${colorKey}`] = {
          '--highlight-color-invalid': value,
        }
      })
    } else {
      newUtilities[`.ion-bg-${colorsKey}`] = {
        '--background': color,
      }
      newUtilities[`.ion-text-${colorsKey}`] = {
        '--color': color,
      }
      newUtilities[`.ion-border-${colorsKey}`] = {
        '--border-color': color,
      }
    }
  })

  Object.keys(borderRadius).forEach((borderRadiusKey) => {
    const value = borderRadius[borderRadiusKey]
    const key = borderRadiusKey === 'DEFAULT' ? `.ion-rounded` : `.ion-rounded-${borderRadiusKey}`
    newUtilities[key] = {
      '--border-radius': value,
    }
  })

  Object.keys(spacing).forEach((spacingKey) => {
    const value = spacing[spacingKey]
    newUtilities[`.ion-p-${spacingKey}`] = {
      '--padding-top': value,
      '--padding-bottom': value,
      '--padding-start': value,
      '--padding-end': value,
    }
    newUtilities[`.ion-px-${spacingKey}`] = {
      '--padding-start': value,
      '--padding-end': value,
    }
    newUtilities[`.ion-py-${spacingKey}`] = {
      '--padding-top': value,
      '--padding-bottom': value,
    }
    newUtilities[`.ion-pt-${spacingKey}`] = {
      '--padding-top': value,
    }
    newUtilities[`.ion-pb-${spacingKey}`] = {
      '--padding-bottom': value,
    }
    newUtilities[`.ion-pl-${spacingKey}`] = {
      '--padding-start': value,
    }
    newUtilities[`.ion-pr-${spacingKey}`] = {
      '--padding-end': value,
    }
  })

  addUtilities(newUtilities)
})

module.exports = ionicPlugin
