const path = require('path')
const ionicPlugin = require('.')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

function run(config, css = '@tailwind utilities', plugin = tailwindcss) {
  let { currentTestName } = expect.getState()
  config = {
    ...{
      plugins: [ionicPlugin],
      corePlugins: {
        preflight: false,
      },
    },
    ...config,
  }

  return postcss(plugin(config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

it('addUtilities - padding', () => {
  const config = {
    content: [
      {
        raw: String.raw`
        <div class="ion-p-4"></div>
        <div class="ion-px-4"></div>
        <div class="ion-py-4"></div>
        <div class="ion-pt-4"></div>
        <div class="ion-pb-4"></div>
        <div class="ion-pl-4"></div>
        <div class="ion-pr-4"></div>
        `,
      },
    ],
  }

  return run(config).then((result) => {
    expect(result.css).toMatchCss(String.raw`
    .ion-p-4 {
      --padding-top: 1rem;
      --padding-bottom: 1rem;
      --padding-start: 1rem;
      --padding-end: 1rem;
    }
    .ion-px-4 {
      --padding-start: 1rem;
      --padding-end: 1rem;
    }
    .ion-py-4 {
      --padding-top: 1rem;
      --padding-bottom: 1rem;
    }
    .ion-pt-4 {
      --padding-top: 1rem;
    }
    .ion-pb-4 {
      --padding-bottom: 1rem;
    }
    .ion-pl-4 {
      --padding-start: 1rem;
    }
    .ion-pr-4 {
      --padding-end: 1rem;
    }
    `)
  })
})

it('addUtilities - border-radius', () => {
  const config = {
    content: [
      {
        raw: String.raw`
        <div class="ion-rounded-none"></div>
        <div class="ion-rounded-sm"></div>
        <div class="ion-rounded"></div>
        <div class="ion-rounded-md"></div>
        <div class="ion-rounded-lg"></div>
        <div class="ion-rounded-xl"></div>
        <div class="ion-rounded-2xl"></div>
        <div class="ion-rounded-3xl"></div>
        <div class="ion-rounded-full"></div>
        `,
      },
    ],
  }

  return run(config).then((result) => {
    expect(result.css).toMatchCss(String.raw`
    .ion-rounded-none {
      --border-radius: 0px;
    }
    .ion-rounded-sm {
      --border-radius: 0.125rem;
    }
    .ion-rounded {
      --border-radius: 0.25rem;
    }
    .ion-rounded-md {
      --border-radius: 0.375rem;
    }
    .ion-rounded-lg {
      --border-radius: 0.5rem;
    }
    .ion-rounded-xl {
      --border-radius: 0.75rem;
    }
    .ion-rounded-2xl {
      --border-radius: 1rem;
    }
    .ion-rounded-3xl {
      --border-radius: 1.5rem;
    }
    .ion-rounded-full {
      --border-radius: 9999px;
    }
    `)
  })
})

it('addUtilities - colors', () => {
  const config = {
    content: [
      {
        raw: String.raw`
        <div class="ion-bg-black"></div>
        <div class="ion-bg-neutral-500"></div>
        `,
      },
    ],
  }

  return run(config).then((result) => {
    expect(result.css).toMatchCss(String.raw`
      .ion-bg-black {
        --background: #000;
      }
      .ion-bg-neutral-500 {
        --background: #737373;
      }
    `)
  })
})
