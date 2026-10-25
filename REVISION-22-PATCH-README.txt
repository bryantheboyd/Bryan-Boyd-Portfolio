REVISION 22 PATCH — APPLY OVER REVISION 21

1. Extract this zip at the root of the existing bryan-boyd-website folder,
   preserving paths and overwriting existing files.
2. The patch includes built HTML for all pages, built site.js, new mobile and
   desktop reel MP4s, and the new poster, so the static site is ready to upload.
3. If deploying from source rather than dist/, run `npm run build` after applying.
4. Optional cleanup: remove obsolete copies of the older reel:
   public/video/bryan-boyd-reel-web.mp4
   public/video/bryan-boyd-reel-mobile.mp4
   dist/video/bryan-boyd-reel-web.mp4
   dist/video/bryan-boyd-reel-mobile.mp4
5. New files have -v22 names, so cached old reel videos are not used.
