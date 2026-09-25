/**
 * Editor helpers for video URLs. Same matching as
 * Bpafb_Pro_Shared_Assets::video_embed() on the PHP side.
 */

const YOUTUBE = /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/;
const VIMEO = /vimeo\.com\/(?:.*?\/)?(\d{6,})/;
const FILE = /^https?:\/\/\S+\.(?:mp4|webm|ogv|mov)(?:\?\S*)?$/i;

/**
 * @param {string} url Video URL.
 * @return {string} YouTube poster URL, or ''.
 */
export function youtubePoster( url ) {
	const m = YOUTUBE.exec( url || '' );
	return m ? `https://i.ytimg.com/vi/${ m[ 1 ] }/hqdefault.jpg` : '';
}

/**
 * Whether the URL can be played (YouTube, Vimeo, or a video file).
 *
 * @param {string} url Video URL.
 * @return {boolean}
 */
export function isPlayableVideo( url ) {
	const value = ( url || '' ).trim();
	return YOUTUBE.test( value ) || VIMEO.test( value ) || FILE.test( value );
}
