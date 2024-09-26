import {
  component,
  defineTheme,
  directory,
  group,
  link,
  site,
  type SiteComponent,
} from '@neato/guider/theme';

const siteTemplate = site('docs', {
  dropdown: [
    link('Documentation', '/docs/guides', { icon: 'fa6-solid:house' }),
  ],
});

export default defineTheme([
  site('docs', {
    extends: [siteTemplate],
    meta: () => <></>,
    contentFooter: {
      socials: [],
      text: 'Copyright (c) 2024',
      editRepositoryBase: 'https://github.com/mrjvs/neatojs',
    },
    pageFooter: {
      text: 'Made with love <6',
    },
    directories: [
      directory('guides', {
        sidebar: [
          link('Developer Docs', 'https://docs.polymarket.com/#introduction', {
            style: 'star',
            icon: 'fa6-solid:envelope',
          }),
          link('Discord', 'https://discord.gg/polymarket', {
            style: 'star',
            icon: 'radix-icons:discord-logo',
          }),
          link('Twitter', 'https://x.com/polymarket', {
            style: 'star',
            icon: 'radix-icons:twitter-logo',
          }),

          group('Get Started', [
            link(
              'What is Polymarket?',
              '/docs/guides/get-started/what-is-polymarket',
            ),
            link('How to Sign-Up', '/docs/guides/get-started/how-to-signup'),
            link('How to Deposit', '/docs/guides/get-started/how-to-deposit'),
            link(
              'Making your First Trade',
              '/docs/guides/get-started/making-your-first-trade',
            ),
            link(
              'What is a Prediction Market?',
              '/docs/guides/get-started/what-are-prediction-markets',
            ),
          ]),

          group('Deposits', [
            link('Deposit with Coinbase', '/docs/guides/deposits/coinbase'),
            link(
              'Deposit Using Your Card',
              '/docs/guides/deposits/moonpay',
            ),
            link(
              'Deposit USDC on Ethereum',
              '/docs/guides/deposits/usdc-on-eth',
            ),
            link(
              'Large Cross Chain Deposits',
              '/docs/guides/deposits/large-cross-chain-deposits',
            ),
            link('How to Withdraw', '/docs/guides/deposits/how-to-withdraw'),
          ]),

          group('Markets', [
            link(
              'Can I Create My Own Market?',
              '/docs/guides/markets/can-anyone-make-a-market',
            ),
            link(
              'How are Markets Created?',
              '/docs/guides/markets/how-are-markets-created',
            ),
            link(
              'How are Markets Resolved',
              '/docs/guides/markets/how-are-markets-resolved',
            ),
            link('How are Markets Disputed?', '/docs/guides/markets/dispute'),
            link(
              'How are Markets Clarified?',
              '/docs/guides/markets/how-are-markets-clarified',
            ),
          ]),

          group('Trading', [
            link(
              'Using the Orderbook',
              '/docs/guides/trading/using-the-orderbook',
            ),
            link('Limit Orders', '/docs/guides/trading/limit-orders'),
            link(
              'Does Polymarket Have Trading Limits?',
              '/docs/guides/trading/no-limits',
            ),
            link('Can I Sell Early', '/docs/guides/trading/exiting-positions'),
            link(
              'How are Prices Calculated?',
              '/docs/guides/trading/how-are-prices-calculated',
            ),
            link('Trading Fees', '/docs/guides/trading/fees'),
          ]),

          group('FAQ', [
            link('Is my Money Safe?', '/docs/guides/FAQ/is-my-money-safe'),
            link(
              'How to Export Your Private Key',
              '/docs/guides/FAQ/how-to-export-private-key',
            ),
            link(
              'Why Do I Need Crypto',
              '/docs/guides/FAQ/why-do-i-need-crypto',
            ),
            link(
              'Does Polymarket Have an API',
              '/docs/guides/FAQ/does-polymarket-have-an-api',
            ),
            link('Embeds', '/docs/guides/FAQ/embeds'),
            link('Polling', '/docs/guides/FAQ/polling'),
            link('Social Good', '/docs/guides/FAQ/social-good'),
            link('Embeds', '/docs/guides/FAQ/embeds'),
            link('Wen token', '/docs/guides/FAQ/wen-token'),
            link('Support', '/docs/guides/FAQ/support'),
            link('Odds', '/docs/guides/FAQ/odds'),
            link(
              'Is Polymarket the House',
              '/docs/guides/FAQ/is-polymarket-the-house',
            ),
          ]),
        ],
        settings: {
          colors: {
            primary: '#50EA8E',
            primaryDarker: '#1BA965',
            primaryLighter: '#89FFAA',
          },
        },
      }),
      directory('cli', {
        sidebar: [
          link('Getting started', '/docs/cli/'),
          link('CLI A', '/docs/cli/cli-a'),
          link('CLI B', '/docs/cli/cli-b'),
          link('David Tennant', '/docs/cli/tennant'),
          component(() => (
            <div
              style={{
                backgroundColor: '#000',
                padding: 16,
                borderRadius: 7,
              }}
            >
              Custom component
            </div>
          )),
        ],
      }),
      directory('misc', {
        sidebar: [
          link('The misc', '/docs/misc/'),
          link('The cure', '/docs/misc/the-cure'),
        ],
      }),
    ],
  }),
  site('api-ref', {
    extends: [siteTemplate],
    directories: [
      directory('ref', {
        sidebar: [
          link('The API reference', '/api-ref/'),
          link('Other info', '/api-ref/other'),
        ],
      }),
    ],
  }),
]) satisfies SiteComponent[];
