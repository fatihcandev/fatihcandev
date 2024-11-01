const useAudio = (src: string, options?: Partial<HTMLAudioElement>) => {
  const audio = new Audio(src);
  audio.preload = 'auto';

  if (options?.volume) audio.volume = options.volume;
  if (options?.playbackRate) audio.playbackRate = options.playbackRate;

  return audio;
};

export default useAudio;
