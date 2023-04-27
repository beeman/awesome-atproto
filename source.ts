import { linkGroup, link, links } from './lib/helpers'
import { Category } from './lib/types'

export const source: Category[] = [
  links('Bots', [
    link(
      'Bot that posts a haiku every 15 minutes on Bluesky!',
      'https://staging.bsky.app/profile/haiku-bot.bsky.social',
      'https://github.com/ssempervirens/bluesky-haiku',
    ),
    link('Bot to send hugs to other users on bluesky', 'https://github.com/haideralipunjabi/bluesky-hugfairy'),
    link(
      'Bot that posts earthquakes of 5.0+ magnitude',
      'https://staging.bsky.app/profile/earthquake.bsky.social',
      'https://github.com/emilyliu7321/bsky-earthquake-bot',
    ),
    link(
      'Bot that posts limericks',
      'https://staging.bsky.app/profile/limerick.bot.gar.lol',
      'https://github.com/rothos/limerickbot',
    ),
    link('Just follow people in Bluesky Social.', 'https://github.com/myConsciousness/bluesky-follow-bot'),
    link('Some bot programs for the bluesky network', 'https://github.com/whyrusleeping/bskybots'),
    link('@vvvot.bsky.social bot implementation', '@vvvot.bsky.social', 'https://github.com/vvakame/atproto-vvvot'), //
    link(
      'Bot that posts food safety notices from the UK Food Standards Agency to your Bluesky feed.',
      'https://github.com/lovelaced/bluesky-food-safety-bot',
    ),
    link('APOD Bot for Bluesky Social', 'https://github.com/myConsciousness/bluesky-apod-bot'),
    link(
      'Bluesky Emoji Bot',
      'https://staging.bsky.app/profile/skies.bsky.social',
      'https://github.com/emilyliu7321/bluesky-emoji-bot',
    ),
    link(
      'Bluesky Emoji Spells Bot',
      'https://staging.bsky.app/profile/spells.bsky.social',
      'https://github.com/MichaelPriebe/emoji-spells-bot',
    ),
  ]),
  links('Data visualization and analysis', [
    link(
      'Bluesky Heatmap',
      'https://bluesky-heatmap.fly.dev/',
      'https://github.com/aliceisjustplaying/bluesky-heatmap',
    ),
  ]),
  linkGroup('Clients and Libraries', [
    links('', [
      //
      // link('', '', ''),
    ]),
    links('Python', [
      link('Python async bluesky client and TUI (eventually)', 'https://github.com/jbn/psychonaut'),
      link(
        'A nano implementation of the AT Protocol (Authenticated Transfer Protocol) for Python.',
        'https://github.com/susumuota/nanoatp',
      ),
      link(
        'Easy-to-use and ergonomic library for interacting with bluesky',
        'https://github.com/ianklatzco/atprototools',
      ),
    ]),
    links('C#', [
      //
      link('3rd Party C# library for interacting with the AT protocol', 'https://github.com/taranasus/atprotosharp'),
    ]),
    links('Dart/Flutter', [
      link('Dart/Flutter ATProto & BlueSky packages', 'https://github.com/myConsciousness/atproto.dart'),
      link('Dart/Flutter BlueSky client', 'https://github.com/tacsotai/flutter_bluesky.git'),
    ]),
    links('Go', [
      link('CLI Application for Bluesky Social', 'https://github.com/mattn/bsky'),
      link('Simple golang firehose for Bluesky', 'https://github.com/CharlesDardaman/blueskyfirehose'),
    ]),
    links('Java', [
      //
      link('Bluesky/ATProtocol client for java', 'https://github.com/uakihir0/bsky4j'),
    ]),
    links('Java', [
      link('Android/desktop client for Bluesky', 'https://github.com/christiandeange/ozone'),
      link('SoftLibATP', 'https://github.com/okomeki/SoftLibATP'),
    ]),
    links('Rust', [
      link('Bluesky API library', 'https://github.com/jesopo/bisky'),
      link('The ATProto(Bluesky) api impl in Rust', 'https://github.com/sizumita/bsky-rs'),
    ]),
    links('Swift', [
      //
      link('Unofficial Bluesky/ATProto client in SwiftUI', 'https://github.com/rmcan/swiftsky.git'),
    ]),
    links('TypeScript', [
      link('Example React Native app for AT Protocol', 'https://github.com/pfrazee/example-atproto-rn-app'),
      link('CLI tools for posting on bluesky', 'https://github.com/Jazzkid0/bsky-cli-tools'),
      link('Bluesky client for Mac, Linux and Windows', 'https://github.com/pram11/Jet'),
      link('Web client for Bluesky using Next.js', 'https://github.com/ajroberts0417/azure'),
      link('Web client for Bluesky using Next.js', 'https://github.com/KingYoSun/boobeeblue'),
      link('Web client for Bluesky using Svelte', 'https://github.com/tautologer/poastbox'),
      link('Web client for Bluesky', 'https://flat-bs.vercel.app', 'https://github.com/sabigara/flat'),
      link('Web client for Bluesky', 'https://treyp.github.io/nightsky', 'https://github.com/treyp/nightsky'),
      link('Web client for Bluesky', 'https://github.com/angelocho/BlueSkyweb'),
      link('Bluesky web client using Vue', 'https://at.syui.ai/', 'https://github.com/syui/at.syui.ai'),
    ]),
  ]),
  linkGroup('Demos and Starter Kits', [
    links('TypeScript', [
      link('ATProto Starter Kit', 'https://github.com/aliceisjustplaying/atproto-starter-kit'),
      link('Bluesky Photo Test', 'https://github.com/robpc/bluesky-photo-test'),
      link('Practice Bluesky API (deno)', 'https://github.com/Neos21/practice-bsky'),
    ]),
  ]),
  links('Tools', [
    // link('', '', ''),
    link('A GitHub Action to post to Bluesky Social', 'https://github.com/zentered/bluesky-post-action'),
    link(
      'Bluesky Follow Back All',
      'https://jiftechnify.github.io/bsky-follow-back-all/',
      'https://github.com/jiftechnify/bsky-follow-back-all',
    ),
    link(
      'Combine your Twitter and Bluesky feeds into one',
      'https://test-maker-khaki.vercel.app/',
      'https://github.com/devyboy/Skybird',
    ),
    link('Generate embeddable link previews to posts on Bluesky', 'https://github.com/capjamesg/bsky-link-preview'),
    link(
      'RSS feed generator for Bluesky',
      'https://bluestream.deno.dev/',
      'https://github.com/kawarimidoll/bluestream',
    ),
    link('Schedule daily posts on Bluesky', 'https://github.com/alextoma1217/BlueskyAutoPost', ''),
    link(
      "Tool for copying someone else's follow list on Bluesky",
      'https://jiftechnify.github.io/blue-mirage/',
      'https://github.com/jiftechnify/blue-mirage',
    ),
    link('UX improvements for Bluesky web app (browser extension)', 'https://github.com/xenohunter/bluesky-overhaul'),
  ]),
]
