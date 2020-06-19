import { isMediaStream } from './utils'

export const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//
export const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/
export const MATCH_URL_VIMEO = /vimeo\.com\/.+/
export const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/
export const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/
export const MATCH_URL_WISTIA = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/
export const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/
export const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/
export const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/
export const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/
export const MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/
export const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
export const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i
export const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i
export const DASH_EXTENSIONS = /\.(mpd)($|\?)/i

const canPlayFile = url => {
  if (url instanceof Array) {
    for (const item of url) {
      if (typeof item === 'string' && canPlayFile(item)) {
        return true
      }
      if (canPlayFile(item.src)) {
        return true
      }
    }
    return false
  }
  if (isMediaStream(url)) {
    return true
  }
  return (
    AUDIO_EXTENSIONS.test(url) ||
    VIDEO_EXTENSIONS.test(url) ||
    HLS_EXTENSIONS.test(url) ||
    DASH_EXTENSIONS.test(url)
  )
}

export const canPlay = {
  youtube: url => {
    if (url instanceof Array) {
      return url.every(item => MATCH_URL_YOUTUBE.test(item))
    }
    return MATCH_URL_YOUTUBE.test(url)
  },
  soundcloud: url => MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
  vimeo: url => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  facebook: url => MATCH_URL_FACEBOOK.test(url),
  streamable: url => MATCH_URL_STREAMABLE.test(url),
  wistia: url => MATCH_URL_WISTIA.test(url),
  twitch: url => MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
  dailymotion: url => MATCH_URL_DAILYMOTION.test(url),
  mixcloud: url => MATCH_URL_MIXCLOUD.test(url),
  vidyard: url => MATCH_URL_VIDYARD.test(url),
  file: canPlayFile
}
