# Video Assets

Place your video files here:

- `showreel.mp4` — Your main showreel video (for the Video section player)
- `showreel-thumb.jpg` — Thumbnail/poster image for the video

Once you add the video, edit VideoShowcase.tsx and replace the placeholder block with:

```jsx
<video
  src="/assets/showreel.mp4"
  className="w-full h-full object-cover"
  controls
  poster="/assets/showreel-thumb.jpg"
/>
```
