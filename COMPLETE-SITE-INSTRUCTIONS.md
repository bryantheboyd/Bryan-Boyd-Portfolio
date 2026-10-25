# Bryan Boyd Website — Complete Revision 23 (October 25, 2026 Reel)

This is a complete website. **No earlier revisions or patches are required.**

## Included
- All source templates, styles, JavaScript, site data, and public assets
- `dist/` built website ready for static hosting
- Revision 21 ISTA work: 6 event portraits, one referendum video with member-influencer copy at the top, local School Funding Explainer and Charles membership testimonial with cover art
- Revision 20 responsive fixes, mobile touch styling fix, and other earlier site work
- Revision 23 definitive reel: `BOYD_REEL_10.25.2026.mp4` encoded as `bryan-boyd-reel-web-v23.mp4` and `bryan-boyd-reel-mobile-v23.mp4`, with updated poster

## Publish the site
1. Unzip the archive.
2. Open the `bryan-boyd-website` folder.
3. Upload the **contents of `dist/`** to the public root of your static website host. Do not upload the outer `bryan-boyd-website` folder as your web root.
4. After deploying, check the reel in mobile Safari and desktop Chrome, and play both ISTA videos. Verify seeking and poster images work. The host should support HTTP range requests for MP4s.
5. To change the editable source later, edit `src/` or `public/`, then run `npm run build` from `bryan-boyd-website/` (Node.js required). Publish `dist/` again.

The original 4K reel and ISTA film uploads are not included as master files; they were used to make optimized playback copies (reel: 1920px desktop and 1024px mobile; ISTA films: 1080p) for web hosting. The website is otherwise self-contained for hosting, apart from ordinary external destinations, analytics, and linked third-party resources.
