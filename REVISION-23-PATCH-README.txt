REVISION 23 PATCH — CORRECTED REEL

Definitive master: BOYD_REEL_10.25.2026.mp4
Supersedes incorrect Revision 22 upload.

1. If you have the Revision 22 site folder, unzip the patch inside the
   bryan-boyd-website folder. Preserve directory structure and overwrite files.
2. To deploy a static site, upload the new/overwritten files from dist/.
   Alternatively, deploy dist/ from the Revision 23 deploy-ready archive.
3. If building from source, run npm run build from the website folder.
4. Optional cleanup after applying the patch: remove these obsolete files:
   public/video/bryan-boyd-reel-web-v22.mp4
   public/video/bryan-boyd-reel-mobile-v22.mp4
   public/images/frames/bryan-boyd-reel-v22-poster.jpg
   dist/video/bryan-boyd-reel-web-v22.mp4
   dist/video/bryan-boyd-reel-mobile-v22.mp4
   dist/images/frames/bryan-boyd-reel-v22-poster.jpg

Every video reference and preview image in the new site uses v23 filenames.
The prior ISTA enhancements remain intact.
